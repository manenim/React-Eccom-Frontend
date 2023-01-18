import axios from "axios";

const BASE_URL = "https://shopnowwebstore.herokuapp.com/api/";
// const BASE_URL = process.env.BASE_URL;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFlZDQ1YTc4NzczZjQ1ZmNmNmUzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mzg2MDY5MCwiZXhwIjoxNjY0MTE5ODkwfQ.GwphYeQ-sDBrfILkYFtrLdTAUc5N_Vsmh-lFD5SH8EU"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});