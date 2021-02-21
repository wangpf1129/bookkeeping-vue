<template>
  <div class="typeSection-wrapper">
    <CategorySection classPrefix="types" :type.sync="category"/>
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
    category = '-';

    @Watch('category')
    onCategoryChange(newCategory: string) {
      this.$emit('getCategory', newCategory);
    }
  }
</script>

<style lang="scss" scoped>
  .typeSection-wrapper {
    margin-top: 12px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;

    ::v-deep {
      .types-item {
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