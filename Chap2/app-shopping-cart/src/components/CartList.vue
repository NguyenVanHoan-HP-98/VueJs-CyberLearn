<template>
  <table class="table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Số lượng trong kho</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, idx) in cartList" :key="idx">
        <td scope="row">{{ idx + 1 }}</td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button @click="handleUporDow(true, cart)" class="btn btn-success">
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-2">{{ cart.amount }}</span>
          <button @click="handleUporDow(false, cart)" class="btn btn-success">
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>{{ cart.price * cart.amount }}</td>
        <td>
          <button @click="hanldeDelete(cart)" class="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td>Tổng tiền</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sumMonney }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      cartList: {
        type: Array,
      },
    },
    computed: {
      sumMonney() {
        return this.cartList.reduce(
          (sum, cart) => (sum += cart.amount * cart.price),
          0
        );
      },
    },
    methods: {
      hanldeDelete(cart) {
        this.$emit("hanlde-delete-cart", cart);
      },
      handleUporDow(status, cart) {
        this.$emit("handle-up-or-dow", { status, cart });
      },
    },
  };
</script>

<style></style>
