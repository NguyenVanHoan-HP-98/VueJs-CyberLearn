<template>
  <DemoFormVue />
</template>

<script>
  import DemoFormVue from "./components/DemoForm.vue";

  export default {
    name: "App",
    components: {
      DemoFormVue,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
