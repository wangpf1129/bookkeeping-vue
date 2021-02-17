<template>
  <div class="money-wrapper">
    <TopNav name="back">
      <CategorySection slot="title"/>
    </TopNav>
    <section class="main">
      <TagsSection/>
    </section>
    <KeyboardSection/>
  </div>
</template>

<script lang="ts">
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import CategorySection from '@/views/Home/childComps/CategorySection.vue';
  import TagsSection from '@/views/Home/childComps/TagsSection.vue';
  import KeyboardSection from '@/views/Home/childComps/KeyboardSection.vue';

  export default {
    name: 'money',
    components: {KeyboardSection, TagsSection, CategorySection, TopNav}
  };
</script>

<style lang="scss" scoped>
  .money-wrapper {
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

    .main {
      background-color: #fafbf6;
      flex: 1;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>