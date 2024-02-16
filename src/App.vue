<template>
  <Spinner v-if="loading" />
  <Login v-if="!$store.state.accessToken" />
  <Home v-else />
  <notification />
</template>

<script>
import "@/styles/index.css";

import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Notification from "@/components/Notification.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "App",
  components: {
    Login,
    Home,
    Notification,
    Spinner,
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
