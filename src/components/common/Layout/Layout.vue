<template>
  <div class="wrapper">
    <div class="main">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  import Nav from '@/components/common/Nav/Nav.vue';

  export default {
    name: 'Layout',
    components: {Nav}
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .main {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>