<template>
  <div class="typeSection-wrapper">
    <CategorySection class="typeStyle" :type.sync="category"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  @Component({
    components: {CategorySection}
  })
  export default class TypeSection extends Vue {
    category = '-'
  }
</script>

<style lang="scss" scoped>
  .typeSection-wrapper {
    margin-top: 12px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
  }
</style>