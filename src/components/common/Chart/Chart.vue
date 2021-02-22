<template>
  <div class="chart_wrapper" ref="chartDiv">chart</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import * as echarts from 'echarts';

  @Component
  export default class Chart extends Vue {
    @Prop() options?: any;

    mounted() {
      if (this.options === undefined) {
        return console.log('options not found');
      }
      const chart = echarts.init(this.$refs.chartDiv as HTMLDivElement);
      chart.setOption(this.options);
    }
  }
</script>

<style lang="scss" scoped>
  .chart_wrapper {
    height: 300px;
  }
</style>