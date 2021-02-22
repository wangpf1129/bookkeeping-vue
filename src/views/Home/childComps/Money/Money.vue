<template>
  <div class="money-wrapper">
    <TopNav name="back">
      <CategorySection slot="title" :type.sync="selected.category"/>
    </TopNav>
    <section class="main">
      <TagsSection :tags.sync="tags" :tagIds.sync="selected.tagIds" :type.sync="selected.category"/>
    </section>
    <KeyboardSection :amount.sync="selected.amount"
                     :note.sync="selected.note"
                     :createdAt.sync="selected.createdAt"
                     @onSubmit="saveRecord"/>
  </div>
</template>

<script lang="ts">
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  import TagsSection from '@/views/Home/childComps/Money/TagsSection.vue';
  import KeyboardSection from '@/views/Home/childComps/Money/KeyboardSection.vue';

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {TopNav, CategorySection, TagsSection, KeyboardSection},
  })
  export default class Money extends Vue {
    get tags() {
      return this.$store.state.tagList;
    }
    // 初始值
    selected: RecordItem = {
      tagIds: [], // 标签
      note: '',  // 备注
      createdAt: new Date().toISOString(), //日期
      category: '-', // 收入/支出
      amount: 0  // 总和
    };

    created() {
      this.$store.commit('fetchRecords');
      this.$store.commit('fetchTags');

    }

    saveRecord() {
      this.$store.commit('createRecord', this.selected);
    }
  }
</script>

<style lang="scss" scoped>
  .money-wrapper {
    max-width: 520px;
    margin: 0 auto;
    background-color: #fff;
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

    .main {
      background-color: #fafbf6;
      flex: 1;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>