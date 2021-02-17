<template>
<div class="keyboard-wrapper">
  <NotesSection/>
  <NumberPadSection/>
</div>
</template>

<script lang="ts">
  import NotesSection from '@/views/Home/childComps/NotesSection.vue';
  import NumberPadSection from '@/views/Home/childComps/NumberPadSection.vue';

  export default {
    name: 'KeyboardSection',
    components: {NumberPadSection, NotesSection}
  };
</script>

<style lang="scss" scoped>
  .keyboard-wrapper {
    background-color: #9ccac0;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .8);
  }
</style>