<template>
  <div class="card text-left mt-3">
    <img class="card-img-top" :src="productItem.image" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ productItem.name }}</h4>
      <p class="card-text font-weight-bold">{{ productItem.price }} VNĐ</p>
    </div>
    <div class="mb-2">
      <button @click="handleBuy(productItem)" class="btn btn-danger ml-2">
        Mua
      </button>
      <button @click="handleOpenDetail" class="btn btn-info ml-2">
        Chi tiết
      </button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalDetail"
      :handleCloseModal="handleCloseDetail">
      <product-detail-vue :producDetail="productItem"></product-detail-vue>
    </app-modal>
  </teleport>
</template>

<script>
  import AppModal from "./AppModal.vue";
  import ProductDetailVue from "./ProductDetail.vue";
  export default {
    components: { AppModal, ProductDetailVue },
    data() {
      return {
        isOpenModalDetail: false,
      };
    },
    props: {
      productItem: {
        type: Object,
      },
    },
    methods: {
      handleBuy(productItem) {
        this.$emit("handle-buy", productItem);
      },
      handleOpenDetail() {
        this.isOpenModalDetail = true;
      },
      handleCloseDetail() {
        this.isOpenModalDetail = false;
      },
    },
  };
</script>

<style></style>
