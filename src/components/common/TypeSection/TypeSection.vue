<template>
  <div class="typeSection-wrapper">
    <CategorySection class="typeStyle" :type.sync="category"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  @Component({
    components: {CategorySection}
  })
  export default class TypeSection extends Vue {
    category = '-'

    @Watch('category')
    onCategoryChange(newCategory: string){
      this.$emit('getCategory',newCategory)
    }



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