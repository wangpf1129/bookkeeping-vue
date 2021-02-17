<template>
  <div class="wrapper">
    <TopNav>
      <span slot="title">{{name}}</span>
    </TopNav>
    <section class="main">
      <slot />
    </section>
    <Nav/>
  </div>
</template>

<script lang="ts">
  import Nav from '@/components/common/Nav/Nav.vue';
  import TopNav from '@/components/common/TopNav/TopNav.vue';

  export default {
    name: 'Layout',
    components: {TopNav, Nav},
    props: {
      name: String,
    }
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .main {
      flex: 1;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>