import axios from '@/utils/axios';
// console.log(axios);

const getSwiperdata = () => {
  return axios.get('/api/public/v1/home/swiperdata');
};

// console.log(getSwiperdata);

export { getSwiperdata };
