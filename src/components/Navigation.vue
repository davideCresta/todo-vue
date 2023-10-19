<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ username }} Todo
          </v-list-item-title>
          <v-list-item-subtitle> Lista semplice e veloce </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="text-no-wrap grow" style="max-width: 400px;">
        {{ username || "Guest" }} Todo
      </v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  computed: {
    ...mapState(['username']),
  },
  methods: {
    ...mapActions(['setUsername']),
    saveUsername() {
      this.setUsername(this.usernameInput);
      this.modal = false;
    },
    cancelUsername() {
      this.modal = false;
    },
  },
  data() {
    return {
      drawer: null,
      usernameInput: '',
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "/todo" },
        { title: "Completati", icon: "mdi-check-circle", to: "/completed" },
        { title: "Albo", icon: "mdi-image-album", to: "/albo" },
        { title: "Login", icon: "mdi-login", to: "/login" },
      ],
      modal: false,
    };
  },
};
</script>
