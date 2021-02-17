<template>
  <div class="notes-wrapper">
    <label class="goNote">
      <Icon iconName="note"/>
      <span>写点备注吧...</span>
    </label>
    <label class="create_date">
      <Icon iconName="date"/>
      <input type="datetime-local"
             class="dateIpt"/>
    </label>
    <MaskDiv/>
  </div>
</template>

<script lang="ts">
  import MaskDiv from '@/views/Home/childComps/Money/MaskDiv.vue';
  export default {
    name: 'NotesSection',
    components: {MaskDiv}
  };
</script>

<style lang="scss" scoped>
  .notes-wrapper {
    padding: 10px 20px;

    > label {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 10px;

      > input {
        width: 100%;
        padding: 12px 48px;
        background-color: #fff;
        border: none;
        border-radius: 10px;

        &.dateIpt {
          padding: 12px 8px 12px 48px;
        }
      }

      .icon {
        position: absolute;
        left: 5px;
        width: 28px;
        height: 28px;
      }
    }

    .goNote {
      width: 100%;
      padding: 12px 48px;
      background-color: #fff;
      border: none;
      border-radius: 10px;

      span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .create_date {
      > input {
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
      }
    }

  }
</style>