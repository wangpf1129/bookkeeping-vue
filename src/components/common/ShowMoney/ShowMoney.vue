<template>
  <div class="show-money">

    <slot name="title_slot"/>
    <slot name="pay_slot"/>
    <slot name="income_slot"/>
    <slot name="count_slot"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class ShowMoney extends Vue {

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
</style>