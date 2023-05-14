import axios from "axios";
export const getAllUserApi = async () => {
  const res = await axios({
    method: "GET", // GET, POST , PUT , DELETE
    url: "https://6460a636fe8d6fb29e347445.mockapi.io/user",
  });
  return res;
};

export const createUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://6460a636fe8d6fb29e347445.mockapi.io/user",
    data: user,
  });
  return res;
};

export const deleteUser = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `https://6460a636fe8d6fb29e347445.mockapi.io/user/${id}`,
  });
  return res;
};
export const UpDateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://6460a636fe8d6fb29e347445.mockapi.io/user/${user.id}`,
    data: user,
  });
  return res;
};
