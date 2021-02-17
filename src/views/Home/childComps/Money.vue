<template>
  <div class="wrapper">
    <TopNav name="back">
      <category-section slot="title"/>
    </TopNav>
    money.vue
    money.vue
    money.vue
    money.vue

  </div>
</template>

<script lang="ts">
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import CategorySection from '@/views/Home/childComps/CategorySection.vue';

  export default {
    name: 'money',
    components: {CategorySection, TopNav}
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 520px;
    margin: 0 auto;
    background-color: #fff;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
</style>