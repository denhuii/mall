import axios from '@/utils/request';

const getSwiperdata = () => {
  return axios.get('/api/public/v1/home/swiperdata');
};

const getQiniuToken = () => {
  return axios.get('/qiniutoken');
};

export { getSwiperdata, getQiniuToken };
