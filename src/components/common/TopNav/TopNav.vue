<template>
  <div class="top">
    <div :v-if="name" class="back-icon" @click="backOne">
      <Icon :iconName="name"/>
    </div>
    <div class="title">
      <slot name="title"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class TopNav extends Vue {
    @Prop(String) name!: string;

    backOne() {
      this.$router.go(-1)
    }
  }
</script>

<style lang="scss" scoped>
  .top {
    position: relative;
    text-align: center;
    padding: 16px 0;

    .back-icon {
      position: absolute;
      left: 10px;
      padding: 0 15px 0 5px;

      .icon {
        width: 24px;
        height: 24px;
      }
    }

    .title {
      font-size: 24px;
      font-weight: 700;
    }
  }
</style>