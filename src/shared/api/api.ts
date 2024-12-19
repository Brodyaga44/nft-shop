import axios from 'axios';

const $api = axios.create({
  // baseURL: "https://nft-sfbx.onrender.com/api/v1",
  baseURL: 'http://localhost:3000/',
});

export default $api;
