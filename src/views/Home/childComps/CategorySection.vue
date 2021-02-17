<template>
  <div class="category-wrapper">
    <span class="selected">支出</span>
    <span>收入</span>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'CategorySection'
  };
</script>

<style lang="scss" scoped>
.category-wrapper{
  font-size: 18px;
  padding: 3px 0;
  >span{margin-left: 8px}
  .selected{
    border-bottom: 2px solid #000;
  }
}
</style>