<template>
  <aside class="sidebar">
    <p>User Balance:</p>
    <span class="balance-value">{{ balance }}</span>
  </aside>
</template>

<script>
import "@/styles/home.css";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      balanceInterval: null,
    };
  },

  computed: {
    ...mapGetters(["balance"]),
  },

  mounted() {
    this.$store.dispatch("fetchBalance");
    this.balanceInterval = setInterval(() => {
      this.$store.dispatch("fetchBalance");
    }, 30000);
  },

  beforeUnmount() {
    clearInterval(this.balanceInterval);
  },
};
</script>
