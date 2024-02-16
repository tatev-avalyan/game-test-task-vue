<template>
  <main class="main-content">
    <div class="sidebar">
      <SidebarComponent />
    </div>
    <div class="game-cards">
      <div v-for="game in games" :key="game.id" class="game-card">
        <GameCard :game="game" />
      </div>
    </div>
  </main>
</template>

<script>
import "@/styles/home.css";
import GameCard from "./GameCardComponent";
import SidebarComponent from "./SidebarComponent.vue";

export default {
  components: {
    GameCard,
    SidebarComponent,
  },
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.$store.dispatch("fetchGames").then(() => {
      this.games = this.$store.state.games;
    });
  },
};
</script>
