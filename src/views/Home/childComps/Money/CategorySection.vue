<template>
  <div class="category-wrapper">
    <span class="span-item" :class="{[classPrefix+'-item']:classPrefix,selected:type === '-'}"
          @click="selectType('-')">支出</span>
    <span class="span-item" :class="{[classPrefix+'-item']:classPrefix,selected:type === '+'}"
          @click="selectType('+')">收入</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CategorySection extends Vue {
    @Prop(String) readonly type!: string;
    @Prop(String) readonly classPrefix?: string;

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('Type is unknown');
      }
      this.$emit('update:type', type);
    }
  }
</script>

<style lang="scss" scoped>
  .category-wrapper {
    font-size: 18px;
    padding: 3px 0;

    .span-item {
      margin-left: 8px;
      padding: 8px;
    }

    .selected {
      border-bottom: 2px solid #000;
    }

  }


</style>