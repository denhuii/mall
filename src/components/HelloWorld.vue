<template>
  <div>
    你在开什么玩笑
  </div>
</template>

<script>
// import { getSwiperdata } from '@/api/mall';
// console.log(getSwiperdata);
// import axios from '@/utils/axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    // getSwiperdata().then(res => {
    //   console.log(res);
    // });
    // console.log(axios);
    // axios
    //   .get('http://localhost:36742/api/public/v1/home/swiperdata')
    //   .then(res => {
    //     console.log(res);
    //   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
