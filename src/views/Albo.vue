<template>
    <v-container>
        <v-card-title class="headline">Vignetta</v-card-title><br>
        <v-card>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="details">
                        <v-card-title>{{ comic.safe_title }}</v-card-title>
                        <p class="detail-item ml-4">Giorno: {{ comic.day }}</p>
                        <p class="detail-item ml-4">Mese: {{ comic.month }}</p>
                        <p class="detail-item ml-4">Anno: {{ comic.year }}</p>
                        <p class="detail-item ml-4">Numero: {{ comic.num }}</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <img :src="comic.img" alt="Vignetta XKCD" class="comic-image" width="250" height="300" />
                </v-col>
            </v-row>
        </v-card> <br>
        <v-card-actions>
            <v-btn @click="loadComic(comic.num - 1)">Precedente</v-btn>
            <v-btn @click="loadComic(comic.num + 1)">Successiva</v-btn>
        </v-card-actions>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Albo",
    data() {
        return {
            comic: {},
        };
    },
    created() {
        this.loadComic(100); // Carica la vignetta 100 all'avvio
    },
    methods: {
        loadComic(comicNum) {
            axios
                .get(`https://xkcd.com/${comicNum}/info.0.json`)
                .then((response) => {
                    this.comic = response.data;
                })
                .catch((error) => {
                    console.error("Errore nella richiesta XKCD:", error);
                });
        },
    },
};
</script>

