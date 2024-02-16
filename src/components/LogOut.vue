<template>
  <div class="log-out-section">
    <button class="logout-button" @click="logOut">Log Out</button>
  </div>
</template>

<script>
import "@/styles/index.css";

export default {
  name: "LogOut",

  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
    },
  },
};
</script>
