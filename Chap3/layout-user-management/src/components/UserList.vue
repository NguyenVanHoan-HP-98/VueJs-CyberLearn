<template>
  <tbody>
    <user-item v-for="(user, idx) in getdata" :key="idx" :user="user">
    </user-item>
  </tbody>
</template>

<script>
  import UserItem from "./UserItem.vue";
  import { mapActions, mapGetters, mapState } from "vuex";
  export default {
    data() {
      return {
        userData: {},
      };
    },
    components: {
      UserItem,
    },
    computed: {
      loading() {
        return false;
      },
      // userlistByBoy() {
      //   return this.$store.getters.userListByBoy;
      // },
      ...mapGetters({
        userlistByBoy: "user/userListByBoy",
        userListBySearchName: "user/userListBySearchName",
        getdata: "user/getData",
      }),
      ...mapState({
        userList: (state) => state.user.userList,
        userListCopy: (state) => state.userListCopy,
      }),
    },
    methods: {
      ...mapActions({
        getAllUser: "user/getAllUserAction",
      }),
    },
    created() {
      this.getAllUser();
    },
  };
</script>

<style></style>
