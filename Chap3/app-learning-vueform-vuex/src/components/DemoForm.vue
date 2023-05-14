<template>
  <section class="container">
    <h1>Demo Form</h1>
    <form action="" @submit.prevent="hanldeSubmit">
      <div class="form-group">
        <label for="taikhoan">Tài khoản</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Tài khoản"
          v-model="taikhoan" />
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Mật khẩu"
          v-model="matkhau" />
        <hr />
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="vtextarea"></textarea>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            v-model="isCheck" />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
        <hr />
        <label for="">Thành phố</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="1"
            v-model="isListCheck" />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="2"
            v-model="isListCheck" />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="3"
            v-model="isListCheck" />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
        <hr />
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="A"
              checked
              v-model="radiocheck" />
            <label class="form-check-label" for="exampleRadios1"> A </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="B"
              checked
              v-model="radiocheck" />
            <label class="form-check-label" for="exampleRadios1"> B </label>
          </div>
        </div>
        <hr />
        <div class="col-auto my-1">
          <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            v-model="vselect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <button class="btn btn-success" type="submit">submit</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        taikhoan: "",
        matkhau: "",
        vtextarea: "",
        isCheck: true,
        isListCheck: [],
        radiocheck: "",
        vselect: 1,
      };
    },
    methods: {
      hanldeSubmit() {
        console.log(
          this.taikhoan +
            " " +
            this.matkhau +
            " " +
            this.vtextarea +
            " " +
            this.isCheck +
            " " +
            this.radiocheck
        );
        console.log(this.isListCheck);
        console.log(this.vselect);
      },
    },
  };
</script>

<style></style>
