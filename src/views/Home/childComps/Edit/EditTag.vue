<template>
  <div class="edit-tag-wrapper">
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
    <p>编辑标签</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class EditTag extends Vue {
    created(){
      console.log(this.$route.params);
    }
  }
</script>

<style lang="scss" scoped>
.edit-tag-wrapper{
  border: 1px solid red;
  max-width: 520px;
  margin: 0 auto;
  background-color:#fff;
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