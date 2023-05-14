<template>
  <div class="container">
    <div>
      <button
        @click="handleSelectComponent('DangchieuComponentVue')"
        class="btn btn-info">
        Đang chiếu
      </button>
      <button
        @click="handleSelectComponent('SapchieuComponentVue')"
        class="btn btn-danger">
        Sắp chiếu
      </button>
    </div>
    <!-- <div v-if="selectComponet === 'DangchieuComponentVue'">
      <dangchieu-component-vue></dangchieu-component-vue>
    </div>
    <div v-if="selectComponet === 'SapchieuComponentVue'">
      <sapchieu-component-vue></sapchieu-component-vue>
    </div> -->
    <div>
      <keep-alive>
        <component :is="selectComponet"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import DangchieuComponentVue from "./DangchieuComponent.vue";
  import SapchieuComponentVue from "./SapchieuComponent.vue";
  export default {
    data() {
      return {
        selectComponet: "SapchieuComponentVue",
      };
    },
    components: {
      DangchieuComponentVue,
      SapchieuComponentVue,
    },
    methods: {
      handleSelectComponent(comp) {
        this.selectComponet = comp;
      },
    },
  };
</script>

<style></style>
