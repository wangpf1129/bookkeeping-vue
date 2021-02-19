<template>
  <div class="category-wrapper" :class="typeStyle">
    <span :class="type === '-' && 'selected'" @click="selectType('-')">支出</span>
    <span :class="type === '+' && 'selected'" @click="selectType('+')">收入</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CategorySection extends Vue {
    @Prop(String) readonly type!: string;
    @Prop(String) readonly typeStyle!: string;
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

    > span {
      margin-left: 8px;
      padding: 8px;
    }

    .selected {
      border-bottom: 2px solid #000;
    }

    &.typeStyle {
      span {
        padding: 8px 24px;
        font-size: 18px;
        margin-right: 10px;
        margin-left: 10px;
      }

      .selected {
        background-color: #9ccac0;
        border: none;
        color: white;
        border-radius: 4px;
      }
    }
  }


</style>