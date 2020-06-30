<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
// import _ from 'lodash';
export default {
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    };
  },
  mounted() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = this._.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer() {
      console.log(this.question);
      this.answer = 'Thinking...';
    },
  },
  watch: {
    question: function() {
      this.answer = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    },
  },
};
</script>

<style></style>
