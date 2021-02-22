<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {

    beforeCreate() {
      this.$store.commit('fetchRecords');
      this.$store.commit('fetchTags');
    }
  }
</script>
<style lang="scss">
  @import "~@/assets/style/index.scss";

  #app {
    max-width: 520px;
    margin: 0 auto;
  }
</style>
