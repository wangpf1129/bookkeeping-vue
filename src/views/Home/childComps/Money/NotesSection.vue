<template>
  <div class="notes-wrapper">
    <label class="goNote" @click="toNote">
      <Icon iconName="note"/>
      <span>{{note || '写点备注...'}}</span>
    </label>
    <label class="create_date">
      <Icon iconName="date"/>
      <input type="datetime-local"
             class="dateIpt"
             v-model="dateValue"
      />
    </label>
    <MaskDiv :style="styleInput" @closeMask="closeMask" @sureText="sureText"/>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import MaskDiv from '@/views/Home/childComps/Money/MaskDiv.vue';
  import day from 'dayjs';

  interface StyleInput {
    display: string;
  }

  @Component({
    components: {MaskDiv}
  })
  export default class NotesSection extends Vue {
    @Prop(String) readonly note!: string;
    @Prop(String) readonly createdAt!: string;

    dateValue = day(this.createdAt).format('YYYY-MM-DDTHH:mm');

    @Watch('dateValue')
    onDateValueChange(newValue: string) {
      const date = new Date(newValue).toISOString().trim();
      this.$emit('update:dateValue', date);
    }

    styleInput: StyleInput = {display: 'none'};


    toNote() {
      this.styleInput = {display: 'block'};
    }

    closeMask(obj: StyleInput) {
      this.styleInput = obj;
    }

    sureText(note: string) {
      this.styleInput = {display: 'none'};
      this.$emit('update:noteValue', note);
    }
  }

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