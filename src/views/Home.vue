<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  created() {
    console.log('father created');
  },
  mounted() {
    console.log('father mounted');
  },
  components: {
    HelloWorld,
  },
};
</script>
