<template>
  <Layout name="TODAY">
    <div class="show-money">
      <span class="title">今日支出</span>
      <span class="pay">￥ {{expenses}}</span>
      <span class="income">本月收入 ￥ {{income}}</span>
    </div>
    <money-key/>
  </Layout>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import MoneyKey from '@/components/common/MoneyKey/MoneyKey.vue';
  import day from 'dayjs';

  @Component({
    components: {MoneyKey}
  })
  export default class Home extends Vue {

    get expenses() {
      const today = day(new Date()).format('DD');
      return (this.$store.getters.expensesMoney(today) as number[]).reduce((preMoney, amount) => {
        return preMoney += amount;
      }, 0);
    }

    get income() {
      const mouth = day(new Date()).format('MM');
      return (this.$store.getters.incomeMoney(mouth) as number[]).reduce((preMoney, amount) => {
        return preMoney += amount;
      }, 0);
    }


  }
</script>

<style lang="scss" scoped>
  .show-money {
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

  .money-link {
    margin: 28px auto 0;
    background-color: #A1DECF;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    padding: 14px;
    max-width: 141px;
    text-align: center;
  }
</style>