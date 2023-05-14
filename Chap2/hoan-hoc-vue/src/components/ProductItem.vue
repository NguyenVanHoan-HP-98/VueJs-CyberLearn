<template>
  <div v-if="proItem" class="card text-left">
    <img class="card-img-top" :src="proItem.urlImage" />
    <div class="card-body">
      <h4 class="card-title">{{ proItem.nameproduct }}</h4>
      <button class="btn btn-info" @click="handleSelect(proItem)">
        Select
      </button>
      <p>{{ user }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      proItem: {
        type: Object,
        required: true,
      },
      multipleType: {
        type: [String, Number],
        required: false,
        default: "Default",
        validator(value) {
          if (value.length > 3) return true;
          return false;
        },
      },
    },
    inject: ["user"],
    methods: {
      handleSelect(value) {
        this.$emit("custom-handle-select", value);
      },
    },
  };
</script>

<style></style>
