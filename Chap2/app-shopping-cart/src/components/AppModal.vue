<template>
  <div @click="handleClose" v-if="isOpen" class="modal__modal">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <h1 class="modal__title">Giỏ hàng của bạn</h1>
        <div @click="handleClose" class="modal__close">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
      },
      handleCloseModal: {
        type: Function,
      },
    },
    methods: {
      handleClose() {
        this.handleCloseModal();
      },
    },
  };
</script>

<style scoped>
  .modal__modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
  }
  .modal__container {
    width: 950px;
    margin: auto;
    margin-top: 70px;
    background: white;
    border: 1px solid rgb(182, 176, 164);
    padding: 10px 20px;
    background: white;
  }
  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal__close {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
  }
  .modal__close:hover {
    background-color: rgb(43, 43, 37);
    cursor: pointer;
  }
</style>
