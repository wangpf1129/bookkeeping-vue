<template>
  <div>
    <ShowMoney>
      <span slot="title_slot" class="title">总收入</span>
      <span slot="pay_slot" class="pay">￥{{incomeAll}}</span>
      <span slot="count_slot" class="count">共{{$store.getters.income.length}}条收入项目</span>
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
  export default class IncomeChart extends Vue {
    // 获取总收入
    get incomeAll() {
      return (this.$store.getters.income as RecordItem[])
              .map(item => item.amount).reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0);
    }
  }
</script>

<style lang="scss" scoped>

</style>