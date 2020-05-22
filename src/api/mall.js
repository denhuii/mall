import axios from '@/utils/request';

const getSwiperdata = () => {
  return axios.get('/api/public/v1/home/swiperdata');
};

export { getSwiperdata };
