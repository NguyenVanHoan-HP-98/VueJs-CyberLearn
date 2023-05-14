<template>
  <!-- <h1>App</h1>
  <FirtsComponentVue></FirtsComponentVue> -->
  <ProductListVue></ProductListVue>
  <hr />
  <br />
  <DemoSlotsVue>
    <template v-slot:header>
      <div>
        <h1>Đây là header</h1>
      </div>
    </template>
    <template #main>
      <div>
        <h1>Đây là main</h1>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <h1>Đây là footer</h1>
      </div>
    </template>
  </DemoSlotsVue>
  <hr />
  <demo-dynamic-component-vue></demo-dynamic-component-vue>
</template>

<script>
  //import FirtsComponentVue from "./components/FirtsComponent.vue";
  import ProductListVue from "./components/ProductList.vue";
  import DemoSlotsVue from "./components/DomoSlots.vue";
  import DemoDynamicComponentVue from "./components/DemoDynamicComponent.vue";
  export default {
    name: "App",
    components: {
      //FirtsComponentVue,
      ProductListVue,
      DemoSlotsVue,
      DemoDynamicComponentVue,
    },
    provide() {
      return {
        user: "Nguyễn Văn Hoan",
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
