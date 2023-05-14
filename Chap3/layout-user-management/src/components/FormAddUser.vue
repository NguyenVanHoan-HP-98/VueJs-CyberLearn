<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            v-model="user.name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Age"
            v-model="user.age"
          />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
            v-model="user.avatar"
          />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.programmingLanguage"
                  value="JavaScript" />
                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.programmingLanguage"
                  value="Java" />
                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.programmingLanguage"
                  value="PHP" />
                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.programmingLanguage"
                  value="Python" />
                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.programmingLanguage"
                  value="C#" />
                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="user.rogrammingLanguage"
                  value="C/C++" />
                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nam"
                  v-model="user.gender" />
                Nam <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nữ"
                  v-model="user.gender" />
                Nữ <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Khác"
                  v-model="user.gender" />
                Khác <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="user.type">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="4"
            v-model="user.description"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-gradient-primary mr-2"
          @click.prevent="hanldeSubmit"
        >
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        user: {
          name: "",
          avatar: "",
          age: 0,
          description: "",
          programmingLanguage: [],
          gender: "Nam",
          type: "",
        },
      };
    },
    props: {
      userInfor: {
        type: Object,
      },
    },
    created() {
      if (this.userInfor) {
        this.user = { ...this.userInfor };
      }
    },
    methods: {
      async hanldeSubmit() {
        if (this.userInfor) {
          await this.hanldeUpdateUser(this.user);
        } else {
          const response = await this.hanldeAddUser(this.user);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          if (response.status == 201) {
            alert("Thêm thành công");
          }
        }
      },
      ...mapActions({
        hanldeAddUser: "user/AddUserAction",
        hanldeUpdateUser: "user/UpdateUserAction",
      }),
    },
  };
</script>

<style>
  .form-row-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
