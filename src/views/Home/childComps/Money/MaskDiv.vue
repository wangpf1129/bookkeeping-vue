<template>
  <div class="maskDiv">
    <div class='box'>
      <div class='title'>
        <Icon iconName='占位'/>
        <span>记账备注</span>
        <span @click="closeMask"><Icon iconName='close'/></span>
      </div>
      <label class='main'>
        <span>输入备注：</span>
        <textarea v-model="notes"/>
        <button @click="sureText(notes)">确定</button>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, } from 'vue-property-decorator';

  @Component
  export default class MaskDiv extends Vue {
    notes = ''

    closeMask() {
      this.$emit('closeMask', {display:'none'})
    }
    sureText(notes: string){
      if(notes !== ''){
        this.$emit('sureText', notes.trim())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .maskDiv {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .6);
    z-index: 2;

    .box {
      margin: 30% auto;
      border-radius: 20px;
      width: 337px;
      height: 540px;
      background-color: #fff;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    .title {
      display: flex;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #9bcac0;
      font-size: 28px;
      padding: 20px;

      .icon {
        width: 28px;
        height: 28px;
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;

      span {
        color: #b4b6b5;
        text-align: left;
        font-size: 24px;
        padding: 10px 0;
      }

      textarea {
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 15px;
        font-size: 22px;
        background-color: #f9f9f7;
        width: 300px;
        height: 280px;
        margin-bottom: 10px;
      }

      button {
        outline: none;
        border: none;
        font-size: 18px;
        color: #fff;
        margin-top: 30px;
        padding: 10px;
        border-radius: 10px;
        background-color: #9dcac0;
      }
    }
  }
</style>