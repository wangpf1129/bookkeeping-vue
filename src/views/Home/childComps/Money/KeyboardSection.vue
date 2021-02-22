<template>
  <div class="keyboard-wrapper">
    <NotesSection @update:noteValue="onUpdateNotes"
                  :note.sync="note"
                  @update:dateValue="onUpdateCreatedAt"
                  :createdAt.sync="createdAt"
    />
    <NumberPadSection @update:value="onUpdateAmount" :amount.sync="amount" @onSubmit="onSubmit"/>
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
    @Prop(String) readonly createdAt!: string
    @Prop(Number) readonly amount!: number;


    onUpdateNotes(note: string) {
      this.$emit('update:note', note);
    }
    onUpdateCreatedAt(createdAt: string){
      this.$emit('update:createdAt',createdAt)
    }

    onUpdateAmount(amount: number) {
      this.$emit('update:amount', amount);
    }

    onSubmit(){
      this.$emit('onSubmit')
    }
  }
</script>

<style lang="scss" scoped>
  .keyboard-wrapper {
    background-color: #9ccac0;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .8);
  }
</style>