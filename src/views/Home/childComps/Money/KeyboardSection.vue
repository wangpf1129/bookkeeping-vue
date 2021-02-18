<template>
  <div class="keyboard-wrapper">
    <NotesSection @update:value="onUpdateNotes"/>
    <NumberPadSection @update:value="onUpdateAmount"/>
  </div>
</template>

<script lang="ts">
  import NotesSection from '@/views/Home/childComps/Money/NotesSection.vue';
  import NumberPadSection from '@/views/Home/childComps/Money/NumberPadSection.vue';

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {NumberPadSection, NotesSection}
  })
  export default class KeyboardSection extends Vue {

    onUpdateNotes(notes: string){
      this.$emit('update:notes',notes)
    }
    onUpdateAmount(amount: number){
      this.$emit('update:amount',amount)
    }
  }
</script>

<style lang="scss" scoped>
  .keyboard-wrapper {
    background-color: #9ccac0;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .8);
  }
</style>