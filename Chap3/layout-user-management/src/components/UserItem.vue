<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(item, idx) in user.programmingLanguage"
        :key="idx"
        >{{ item }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="hanldeDeleteUser(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        @click="hanldeEditUser"
        type="button"
        class="btn btn-gradient-info btn-icon-text"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i>
        Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal :isOpen="isopenmodal" :handelCloseModal="handelCloseModal">
      <form-add-user :userInfor="user"></form-add-user>
    </app-modal>
  </teleport>
</template>

<script>
  import { mapActions } from "vuex";
  import FormAddUser from "./FormAddUser.vue";
  export default {
    components: { FormAddUser },
    data() {
      return {
        isopenmodal: false,
      };
    },
    props: {
      user: {
        type: Object,
      },
    },
    methods: {
      hanldeEditUser() {
        this.isopenmodal = true;
      },
      handelCloseModal() {
        this.isopenmodal = false;
      },
      ...mapActions({
        hanldeDeleteUser: "user/hanldeDeleteUser",
      }),
    },
  };
</script>

<style></style>
