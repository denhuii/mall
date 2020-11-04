<template>
  <div class="home">
    <van-uploader :after-read="afterRead" v-model="fileList" />
    <!-- <van-button type="default" @click="handel">默认按钮</van-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { getQiniuToken } from '../api/mall';
import * as qiniu from 'qiniu-js';

export default {
  data() {
    return {
      fileList: [],
    };
  },
  name: 'Home',
  mounted() {},
  methods: {
    async afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      // 此时可以自行将文件上传至服务器
      const { fname } = file.file;
      const res = await getQiniuToken();
      const { token, key } = res.data;
      const putExtra = {
        fname, // 文件原文件名
        params: {}, // 用来放置自定义变量
        mimeType: null, // 用来限制上传文件类型，为 null 时表示不对文件类型限制；eg: ["image/png", "image/jpeg"]
      };
      const config = {
        useCdnDomain: true, //是否使用 cdn 加速域名，为布尔值，true 表示使用，默认为 false。
        region: qiniu.region.z2,
      };
      const observable = qiniu.upload(file.file, key, token, putExtra, config);
      observable.subscribe({
        complete(data) {
          file.status = 'done';
          const { key } = data;
          const url = 'http://cdn.denhuii.com/' + key;
          console.log(url);
        },
        next(res) {
          console.log(res);
        },
        error(err) {
          console.log(err);
          file.status = 'failed';
          file.message = '上传失败';
        },
      });
    },

    async handel() {},
    _getQiniuToken() {
      getQiniuToken().then(res => {
        console.log(res);
      });
    },
  },
  components: {
    // HelloWorld,
  },
};
</script>
