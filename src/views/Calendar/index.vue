<template>
  <div class="calendar">
    <Calendar
      @choseDay="clickDay"
      @changeMonth="changeDate"
      @changeYear="changeDate"
      @isToday="clickToday"
      :textTop="['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']"
      sundayStart
    ></Calendar>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar';
export default {
  components: {
    Calendar,
  },
  methods: {
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(1, data); //跳到了本月
    },
  },
};
</script>

<style lang="less" scoped></style>
