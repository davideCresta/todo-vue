import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    tasks: [], 
    completedTasks: [], 
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    completeTask(state, taskIndex) {
      const completedTask = state.tasks.splice(taskIndex, 1)[0];
      state.completedTasks.push(completedTask);
    },
    setUsername(state, username) {
      state.username = username; 
    },
    updateTask(state, { index, newTitle }) {
      state.tasks[index].title = newTitle; 
      state.tasks[index].user = state.username; 
    },
    cancelTaskUpdate(state, index) {
      state.tasks[index].title = state.tasks[index].originalTitle;
      state.tasks[index].user = state.tasks[index].originalUser;
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit("addTask", task);
    },
    completeTask({ commit }, taskIndex) {
      commit("completeTask", taskIndex);
    },
    updateUsername({ commit }, username) {
      commit('setUsername', username); // Chiama la mutazione per aggiornare il dato username
    },
    saveEditedTask(index) {
      const newTitle = this.tasks[index].title; // Ottenere il nuovo titolo dall'input
      this.editedTaskIndex = null;
      this.$store.dispatch("updateTask", { index, newTitle }); // Chiamare l'azione con il nuovo titolo
    },
    cancelEdit({ commit }, index) {
      commit('cancelTaskUpdate', index);
    },
  },
  getters: {
    completedTasks: (state) => state.completedTasks,
    getUsername: state => state.username,
  },
});

