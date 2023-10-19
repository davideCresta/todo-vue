<template>
  <div class="todo px-6">
    <v-card-title class="headline">Task completati</v-card-title><br>
    <v-text-field v-model="searchQuery" label="Cerca task" outlined clearable dense></v-text-field>
    <v-list>
      <div v-for="task in filteredCompletedTasks" :key="task.id">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
              <b>Task:</b> {{ task.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>
              <b>Utente:</b> {{ task.user }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Completed",
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
    ...mapState(['username']),
    completedTasks() {
      return this.$store.state.tasks.filter(task => task.done);
    },
    filteredCompletedTasks() {
      const query = this.searchQuery.toLowerCase();
      return this.completedTasks.filter(task => {
        return task.title.toLowerCase().includes(query) || task.user.toLowerCase().includes(query);
      });
    },
  },
};
</script>
