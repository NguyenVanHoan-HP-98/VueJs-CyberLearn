<template>
  <header>
    <the-header-vue
      :cartList="cartList"
      @handle-up-or-dow="hanldeUporDow"
      @hanlde-delete-cart="hanldedeletecart">
    </the-header-vue>
  </header>
  <main class="container">
    <product-list-vue @handle-buy="hanldeBuy" />
  </main>
</template>

<script>
  import ProductListVue from "./components/ProductList.vue";
  import TheHeaderVue from "./components/TheHeader.vue";
  export default {
    name: "App",
    components: {
      TheHeaderVue,
      ProductListVue,
    },
    data() {
      return {
        cartList: [],
      };
    },
    methods: {
      hanldeBuy(productItem) {
        const index = this.cartList.findIndex(
          (cart) => cart.id === productItem.id
        );
        if (index !== -1) {
          this.cartList[index].amount += 1;
        } else {
          const newProductItem = { ...productItem, amount: 1 };
          this.cartList = [...this.cartList, newProductItem];
        }
        // this.cartList = [...this.cartList, productItem];
      },
      hanldedeletecart(cart) {
        this.cartList = this.cartList.filter(
          (cartItem) => cartItem.id !== cart.id
        );
      },
      hanldeUporDow(params) {
        const { status, cart } = params;
        const index = this.cartList.findIndex(
          (cartItem) => cartItem.id == cart.id
        );
        if (index !== -1) {
          if (status) {
            if (
              this.cartList[index].amount < this.cartList[index].quantityInStock
            )
              this.cartList[index].amount += 1;
          } else {
            if (this.cartList[index].amount !== 1)
              this.cartList[index].amount -= 1;
          }
        }
      },
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
  }
</style>
