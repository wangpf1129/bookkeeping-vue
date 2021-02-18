<template>
  <div class="keyboard-wrapper">
    <NotesSection @update:value="onUpdateNotes" :note.sync="note"/>
    <NumberPadSection @update:value="onUpdateAmount" :amount.sync="amount"/>
  </div>
</template>

<script lang="ts">
  import NotesSection from '@/views/Home/childComps/Money/NotesSection.vue';
  import NumberPadSection from '@/views/Home/childComps/Money/NumberPadSection.vue';

  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component({
    components: {NumberPadSection, NotesSection}
  })
  export default class KeyboardSection extends Vue {
    @Prop(String) readonly note!: string;
    @Prop(Number) readonly amount!: number;

    onUpdateNotes(note: string) {
      this.$emit('update:note', note);
    }

    onUpdateAmount(amount: number) {
      this.$emit('update:amount', amount);
    }
  }
</script>

<style lang="scss" scoped>
  .keyboard-wrapper {
    background-color: #9ccac0;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .8);
  }
</style>