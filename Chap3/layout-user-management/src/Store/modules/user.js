import { getAllUserApi } from "../../api/user";
import { createUserApi } from "../../api/user";
import { deleteUser } from "../../api/user";
import { UpDateUserApi } from "../../api/user";

const state = () => {
  return {
    userList: [
      {
        id: 1,
        name: "Nguyễn Văn Hoan",
        avatar:
          "https://symbols.vn/wp-content/uploads/2021/12/Hinh-dai-dien-avatar-nam-tam-trang-buon.jpg",
        age: 23,
        description: "thân thiện , hoc hỏi nhanh",
        programmingLanguage: ["JS", "JAVA"],
        gender: "Nam",
        type: "ADMIN",
      },
      {
        id: 2,
        name: "Phan Thùy Duyên",
        avatar:
          "https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg",
        age: 22,
        description: "thân thiện , hoc hỏi nhanh",
        programmingLanguage: ["PHP", "C#"],
        gender: "Nữ",
        type: "CLIENT",
      },
    ],
    searchName: "",
    userListCopy: [],
  };
};
const getters = {
  userListByBoy(state) {
    return state.userList.filter((user) => user.gender === "Nam");
  },
  userListBySearchName(state) {
    const { userList, searchName } = state;
    return userList.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
  },
  getData(state) {
    return state.userListCopy.length == 0 ? state.userList : state.userListCopy;
  },
};
const mutations = {
  setSearchNameMuitation(state, searchName) {
    state.searchName = searchName;
    state.userListCopy = state.userList.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
  },
  AddUserAction(state, data) {
    state.userList.push(data);
    state.userListCopy = state.userList;
  },
  hanldeDeleteUser(state, id) {
    state.userList = state.userList.filter((user) => user.id !== id);
    state.userListCopy = state.userList;
  },
  UpdateUserAction(state, v_data) {
    state.userList = state.userList.filter((user) => user.id !== v_data.id);
    state.userList = [...state.userList, v_data];
  },
  SetUserList(state, v_data) {
    state.userList = v_data;
  },
};
const actions = {
  async getAllUserAction(context) {
    const data = await getAllUserApi();
    context.commit("SetUserList", data.data);
    console.log();
  },
  setSearchNameAction(context, v_value) {
    context.commit("setSearchNameMuitation", v_value);
  },
  async AddUserAction(context, v_data) {
    const res = await createUserApi(v_data);
    console.log(res);
    // const user = { ...v_data, id: Math.random() };
    //context.commit("AddUserAction", user);
    context.dispatch("getAllUserAction");
    return res;
  },
  async UpdateUserAction(context, v_data) {
    await UpDateUserApi(v_data);
    context.dispatch("getAllUserAction");
    //context.commit("UpdateUserAction", v_data);
  },
  async hanldeDeleteUser(context, id) {
    const res = await deleteUser(id);
    console.log(res);
    //context.commit("hanldeDeleteUser", id);
    context.dispatch("getAllUserAction");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
