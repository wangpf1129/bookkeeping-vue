<template>
  <div class="money-wrapper">
    <TopNav name="back">
      <CategorySection slot="title" :type.sync="selected.category"/>
    </TopNav>
    <section class="main">
      <TagsSection :tags.sync="tags" :tagIds.sync="selected.tagIds" :type.sync="selected.category"/>
    </section>
    <KeyboardSection :amount.sync="selected.amount" :note.sync="selected.note" @onSubmit="saveRecord"/>
  </div>
</template>

<script lang="ts">
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  import TagsSection from '@/views/Home/childComps/Money/TagsSection.vue';
  import KeyboardSection from '@/views/Home/childComps/Money/KeyboardSection.vue';

  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import {recordListModel} from '@/models/recordListModel';
  // import {createId} from '@/common/createId';

  @Component({
    components: {TopNav, CategorySection, TagsSection, KeyboardSection}
  })
  export default class Money extends Vue {

    tags = window.tagList;
    // 初始值
    selected: RecordItem = {
      tagIds: [], // 标签
      note: '写点备注...',  // 备注
      createdAt: new Date().toISOString(), //日期
      category: '-', // 收入/支出
      amount: 0  // 总和
    };

    recordList = recordListModel.fetch();


    saveRecord() {
      recordListModel.create(this.selected);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save();
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