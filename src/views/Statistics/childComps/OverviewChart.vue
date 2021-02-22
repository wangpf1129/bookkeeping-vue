<template>
  <div class="overview_wrapper">
    <div class="show_money">
              <span class="titleWrapper">
                <Icon iconName="chart"/>
                支出和收入
              </span>
    </div>
    <Chart :options="Option"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Chart from '@/components/common/Chart/Chart.vue';
  import day from 'dayjs';
  import _ from 'lodash';

  @Component({
    components: {Chart}
  })
  export default class OverviewChart extends Vue {
    get dataArray() {
      const {dayTotalList} = this.$store.getters;
      const today = new Date();
      const array = [];
      for (let i = 0; i <= parseInt(day(today).format('DD')) - 1; i++) {
        const dateString = day(today).subtract(i, 'day').format('MM/DD');
        // 寻找recordsList中的createdAt和dateString一样的对象
        const foundIncome = _.find(dayTotalList('+'), {title: dateString});
        const foundExpenses = _.find(dayTotalList('-'), {title: dateString});
        array.push({
          key: dateString,
          valuesIncome: foundIncome ? foundIncome.total : 0,
          valuesExpenses: foundExpenses ? foundExpenses.total : 0
        });
      }
      array.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        } else if (a.key === b.key) {
          return 0;
        } else {
          return -1;
        }
      });
      return array;
    }

    get Option() {
      const {dataArray} = this;
      const keys = dataArray.map(item => item.key);
      const valuesIncome = dataArray.map(item => item.valuesIncome);
      const valuesExpenses = dataArray.map(item => item.valuesExpenses);
      return {
        tooltip: {
          trigger: 'axis',
          lineStyle: 'line'
        },
        legend: {
          data: ['支出', '收入'],
          bottom: 0,
          itemWidth: 50,
          itemHeight: 2
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: keys
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '支出',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 3,
              color: '#9bcac0'
            },
            areaStyle: {color: '#9bcac0'},
            itemStyle: {
              color: '#9bcac0',
              borderWidth: 2
            },
            symbol: 'circle',
            symbolSize: 8,
            data: valuesExpenses
          },
          {
            name: '收入',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 3,
              color: '#ffa1a0'
            },
            areaStyle: {color: '#ffa1a0'},
            itemStyle: {
              color: '#ffa1a0',
              borderWidth: 2
            },
            symbol: 'circle',
            symbolSize: 8,
            data: valuesIncome
          }
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .overview_wrapper {
    .show_money {
      margin-top: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        padding: 5px;
        font-weight: 700;
      }

      .title {
        color: #81B7AA;
      }

      .titleWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 5px solid #9ccac0;
        font-size: 26px;
        padding: 8px;
        color: rgba(185, 186, 184, 0.9);

        & .icon {
          margin-right: 12px;
          width: 38px;
          height: 38px;
          fill: #9ccac0;
        }
      }

      .pay {
        font-size: 28px;
        color: #81B7AA;
      }

      .count {
        margin-top: 10px;
        font-size: 18px;
        color: rgba(185, 186, 184, 0.9);
        padding: 10px 16px;
        background-color: #f9faf5;
        border-radius: 8px;
      }

      .income {
        margin-top: 15px;
        color: #B7B7B7;
        font-size: 16px;
      }
    }
  }
</style>