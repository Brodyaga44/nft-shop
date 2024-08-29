import axios from "axios";

const $api = axios.create({
  baseURL: "https://nft-sfbx.onrender.com/api/v1",
});

export default $api;
