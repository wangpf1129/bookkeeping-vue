<template>
  <div class="numberPad-wrapper">
    <div class="money">0</div>
    <section>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="today">清零</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>删除</button>
      <button class="complete">完成</button>
    </section>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NumberPadSection'
  };
</script>

<style lang="scss" scoped>
  .numberPad-wrapper {
    position: relative;
    padding: 10px 20px;

    .money {
      position: absolute;
      top: -96px;
      right: 32px;
      font-weight: 800;
      font-size: 16px;
    }

    > section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      margin-right: -38px;

      > button {
        background-color: #fff;
        font-weight: 600;
        font-size: 24px;
        border-radius: 10px;
        margin-right: 12px;
        width: 20%;
        height: 40px;
        border: 1px solid #000;
        margin-bottom: 12px;

        &.today {
          background-color: #f0aa9f;
        }

        &.complete {
          background-color: #eec511;
        }
      }
    }
  }
</style>