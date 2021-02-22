<template>
  <div>
    <ShowMoney>
      <span slot="title_slot" class="title">总收入</span>
      <span slot="pay_slot" class="pay">￥{{incomeAll}}</span>
      <span slot="count_slot" class="count">共{{$store.getters.income.length}}条收入项目</span>
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
  export default class IncomeChart extends Vue {
    get incomeAll() {
      return (this.$store.getters.income as RecordItem[])
              .map(item => item.amount).reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0);
    }

    get Option() {
      const {incomeAll} = this;
      const {income, getItemName} = this.$store.getters;
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: getData(income, incomeAll, getItemName),
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