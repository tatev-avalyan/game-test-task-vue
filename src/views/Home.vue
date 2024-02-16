<template>
  <log-out />
  <main-content-component />
</template>

<script>
import MainContentComponent from "@/components/Home/MainContentComponent.vue";
import LogOut from "@/components/LogOut.vue";

export default {
  name: "HomePage",
  components: { MainContentComponent, LogOut },
};
</script>
