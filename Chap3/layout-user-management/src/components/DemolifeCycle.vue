<template>
  <div>
    <h1>Demo lifeCycle Component</h1>
    <input type="text" />
    <p>{{ count }}</p>
    <button @click="hanldeIncrement" class="btn btn-succsess">increment</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      hanldeIncrement() {
        this.count++;
      },
    },
    beforeCreate() {
      console.log("Chạy beforeCreate", this.count);
    },
    created() {
      console.log("Chạy vào created", this.count);
    },
  };
</script>

<style></style>
