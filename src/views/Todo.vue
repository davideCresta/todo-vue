<template>
  <div class="todo px-6">
    <v-card-title class="headline">Task</v-card-title><br>  
    <v-text-field outlined label="Aggiungi attività" clearable hide-details v-model="newTaskTitle" @keyup.enter="addTask"
      class="mb-6">
      <template v-slot:append>
        <v-icon @click="addTask" class="mdi-plus-circle blue--text">mdi-plus-circle</v-icon>
      </template>
    </v-text-field>

    <v-list flat class="pt-0">
      <div v-for="(task, i) in tasks" :key="task.id">
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="task.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
              <span v-if="editedTaskIndex === i">
                <v-text-field v-model="task.title" @keyup.enter="saveEditedTask(i)"
                  @keyup.esc="cancelEdit(i)"></v-text-field>
              </span>
              <span v-else>
                <b>Task:</b> &nbsp;&nbsp;{{ task.title }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <span>
              <b>Utente:</b> &nbsp; &nbsp;{{ task.user }}
            </span>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn @click.stop="editTask(i)" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click.stop="deleteTask(i)" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <div v-if="tasks.length === 0" class="my-auto text-center green--text">
      <v-icon x-large class="green--text">mdi-check-all</v-icon>
      <h1>Nessuna attività</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Todo",
  data() {
    return {
      newTaskTitle: "",
      editedTaskIndex: null,
    };
  },
  computed: {
    ...mapState(['username']), 
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    addTask() {
      if (this.newTaskTitle === "") {
        alert("Inserisci un'attività");
      } else {
        const idDate = Date.now();
        const newTask = {
          id: idDate,
          title: this.newTaskTitle,
          done: false,
          user: this.username,
        };
        this.tasks.push(newTask);
        this.newTaskTitle = "";
      }
    },
    editTask(index) {
      this.editedTaskIndex = index;
      this.$store.state.tasks[index].originalTitle = this.$store.state.tasks[index].title;
      this.$store.state.tasks[index].originalUser = this.$store.state.tasks[index].user;
    },
    saveEditedTask(index) {
      this.editedTaskIndex = null;
      this.$store.dispatch("saveEditedTask", index);
    },
    cancelEdit(index) {
      this.editedTaskIndex = null;
      this.$store.dispatch("cancelEdit", index);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
