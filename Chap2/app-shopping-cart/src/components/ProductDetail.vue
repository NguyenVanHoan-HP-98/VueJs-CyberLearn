<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-4">
        <img :src="producDetail.image" alt="" />
      </div>
      <div class="col-sm-8">
        <div class="alert alert-success">
          <b>Name: </b><span>{{ producDetail.name }}</span>
        </div>
        <div class="alert alert-success">
          <b>Mô tả: </b><span> {{ producDetail.description }}</span>
        </div>
        <div class="alert alert-success">
          <b>Giá bán: </b>
          <span>{{ producDetail.price }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      producDetail: {
        type: Object,
      },
    },
  };
</script>

<style></style>
