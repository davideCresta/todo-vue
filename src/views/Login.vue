<template>
    <div class="login-page">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevate-card" height="250">
                        <v-card-title class="headline">Accesso</v-card-title>
                        <v-card-text>
                            <v-text-field v-model="username" label="Nome utente" outlined dense
                                @keyup.enter="login"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-row justify="center">
                                <v-btn color="primary" @click="login">Accedi</v-btn>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data() {
        return {
            username: "",
        };
    },
    methods: {
        login() {
            this.$store.dispatch("updateUsername", this.username).then(() => {
                this.$router.push("/todo");
            });
        },
    },
};
</script>
  

  