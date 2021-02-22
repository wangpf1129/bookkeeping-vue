<template>
  <div>
    <ShowMoney>
      <span slot="title_slot" class="title">共支出</span>
      <span slot="pay_slot" class="pay">￥{{expensesALL}}</span>
      <span slot="count_slot" class="count">共{{$store.getters.expenses.length}}条支出项目</span>
    </ShowMoney>
    <Chart :options="Option"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import ShowMoney from '@/components/common/ShowMoney/ShowMoney.vue';
  import {getData} from '@/common/getDate';
  import Chart from '@/components/common/Chart/Chart.vue';

  @Component({
    components: {Chart, ShowMoney}
  })
  export default class ExpensesChart extends Vue {
    get expensesALL() {
      return (this.$store.getters.expenses as RecordItem[])
              .map(item => item.amount).reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0);
    }

    get Option() {
      const {expensesALL} = this;
      const {expenses, getItemName} = this.$store.getters;
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['25%', '50%'],
            center: ['50%', '60%'],
            data: getData(expenses, expensesALL, getItemName),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    }

  }
</script>

<style lang="scss" scoped>

</style>