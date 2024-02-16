<template>
  <div class="game-card">
    <img :src="game.attributes.image" alt="Game Image" />
    <h3>{{ game.attributes.title }}</h3>
    <button @click="playDemo">Play Demo</button>
  </div>
</template>

<script>
import "@/styles/home.css";
import { defineComponent } from "vue";
import { toRaw } from "@vue/reactivity";

export default defineComponent({
  props: {
    game: Object,
  },
  methods: {
    async playDemo() {
      const rawGame = toRaw(this.game);
      await this.$store.dispatch("playDemo", rawGame.id);
    },
  },
});
</script>
