<template>
  <div>
    <ShowMoney>
      <span slot="title_slot" class="title">共支出</span>
      <span slot="pay_slot" class="pay">￥{{expensesALL}}</span>
      <span slot="count_slot" class="count">共{{$store.getters.expenses.length}}条支出项目</span>
    </ShowMoney>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import ShowMoney from '@/components/common/ShowMoney/ShowMoney.vue';

  @Component({
    components: {ShowMoney}
  })
  export default class ExpensesChart extends Vue {
    // 获取总支出
    get expensesALL() {
      return (this.$store.getters.expenses as RecordItem[])
              .map(item => item.amount).reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0);
    }
  }
</script>

<style lang="scss" scoped>

</style>