import axios from 'axios';

// const baseURL = 'http://localhost:3000/lololo';
const baseURL = 'http://localhost:3000/';

const apijson = axios.create({
  baseURL,
});

console.log(apijson.getUri());
export const getNfts = () => apijson.get('/nfts').then(({ data }) => data);
