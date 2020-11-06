<template>
  <div>
    <video
      src="https://doc.denhuii.com/api/file/IPX-557.mp4"
      controls="controls"
      v-if="isShow"
    >
      您的浏览器不支持 video 标签。
    </video>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      isShow: false,
    };
  },

  watch: {
    text(x) {
      console.log(x);
      if (x == '8785452') {
        this.isShow = true;
      }
    },
  },
  mounted() {},
  computed: {},
  components: {},
};
</script>

<style lang="less" scoped></style>
