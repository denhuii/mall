<template>
  <div>
    <test class="cell" />
  </div>
</template>

<script>
import test from '@/assets/icon/information.svg';
export default {
  data() {
    return {
      text: '',
      isShow: false,
    };
  },

  watch: {},
  mounted() {},
  computed: {},
  components: {
    test,
  },
};
</script>

<style lang="less" scoped>
.cell {
  width: 20px;
  height: 20px;
  path {
    fill: green;
  }
}
</style>
