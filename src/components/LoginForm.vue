<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="login" placeholder="Login" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import "@/styles/login.css";

export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
    };
  },

  methods: {
    async handleSubmit() {
      const loginForm = {
        login: this.login,
        password: this.password,
      };
      await this.$store.dispatch("login", loginForm);
    },
  },
};
</script>
