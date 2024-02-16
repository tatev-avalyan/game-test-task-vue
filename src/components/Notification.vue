<template>
  <transition name="fade">
    <div class="notification" v-if="error">
      <p>{{ error }}</p>
      <span class="close-icon" @click="dismissNotification">&#10005;</span>
    </div>
  </transition>
</template>

<script>
import "@/styles/notifications.css";

export default {
  name: "notification-bar",
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  methods: {
    dismissNotification() {
      this.$store.commit("CLEAR_ERROR");
    },
  },
};
</script>
