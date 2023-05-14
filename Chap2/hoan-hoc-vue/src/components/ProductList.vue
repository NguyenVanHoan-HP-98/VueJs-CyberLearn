<template>
  <div>
    <GolbalComponent />
    <div><LocalComponentVue /></div>
  </div>
  <section class="container">
    <div class="row">
      <div v-for="(product, idx) in data1" :key="idx" class="col-sm-3">
        <ProductItemVue
          :proItem="product"
          :multipleType="'Văn Hoan Hoan'"
          @custom-handle-select="handleSelect" />
      </div>
    </div>
  </section>
  <div>
    <BaseModalVue />
  </div>
</template>

<script>
  import ProductItemVue from "./ProductItem.vue";
  import LocalComponentVue from "./LocalComponent.vue";
  import BaseModalVue from "./BaseModal.vue";
  export default {
    data() {
      return {
        data1: [
          {
            urlImage:
              "https://salt.tikicdn.com/cache/280x280/ts/product/11/cc/d5/904dc2051c8c655a352bbe8a44c5ea14.jpg.webp",
            nameproduct: "Hình 1",
          },
          {
            urlImage:
              "https://salt.tikicdn.com/cache/280x280/ts/product/11/cc/d5/904dc2051c8c655a352bbe8a44c5ea14.jpg.webp",
            nameproduct: "Hình 2",
          },
        ],
      };
    },
    components: {
      ProductItemVue,
      LocalComponentVue,
      BaseModalVue,
    },
    methods: {
      handleSelect(value) {
        console.log(value);
      },
    },
  };
</script>

<style></style>
