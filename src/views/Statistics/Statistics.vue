<template>
  <Layout name="统计">
    <div class="sta_wrapper">
      <ul>
        <li :class="{selected:title === '概览'}" @click="setTextTitle('概览')">
          <router-link to="/statistics/overview">概览</router-link>
        </li>
        <li :class="{selected:title === '支出'}" @click="setTextTitle('支出')">
          <router-link to="/statistics/expenses">支出分析</router-link>
        </li>
        <li :class="{selected:title === '收入'}" @click="setTextTitle('收入')">
          <router-link to="/statistics/income">收入分析</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';


  import Vue from 'vue';

  @Component
  export default class Statistics extends Vue {
    title = '概览';

    setTextTitle(newTitle: string) {
      this.title = newTitle;
    }

  }
</script>

<style lang="scss" scoped>
  .sta_wrapper {
    > ul {
      display: flex;
      justify-content: center;

      > li {
        margin: 4px 8px;
        padding: 10px 24px;
        background-color: #fff;
        color: #000;
        border-radius: 10px;

        &.selected {
          background-color: #9ccac0;
          color: #fff;
        }
      }
    }
  }
</style>