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

    tags = [
      {id: 1, name: '餐饮', iconName: '1', mold: '-'},  // 1
      {id: 2, name: '娱乐', iconName: '2', mold: '-'},  // 2
      {id: 3, name: '日用', iconName: '3', mold: '-'},  // 3
      {id: 4, name: '通讯', iconName: '4', mold: '-'},  // 4
      {id: 5, name: '果蔬', iconName: '5', mold: '-'},  // 5
      {id: 6, name: '交通', iconName: '6', mold: '-'},  // 6
      {id: 7, name: '烟酒', iconName: '7', mold: '-'},  // 7
      {id: 8, name: '数码', iconName: '8', mold: '-'},  // 8
      {id: 9, name: '服饰', iconName: '9', mold: '-'},  // 9
      {id: 10, name: '宠物', iconName: '10', mold: '-'},  // 10
      {id: 11, name: '旅行', iconName: '11', mold: '-'},  // 11
      {id: 12, name: '美容', iconName: '12', mold: '-'},  // 12
      {id: 13, name: '社交', iconName: '13', mold: '-'},  // 13,
      {id: 14, name: '汽车', iconName: '14', mold: '-'},  // 14
      {id: 15, name: '住房', iconName: '15', mold: '-'},  // 15
      {id: 16, name: '书籍', iconName: '16', mold: '-'},  // 16
      {id: 17, name: '长辈', iconName: '17', mold: '-'},  // 17
      {id: 18, name: '彩票', iconName: '18', mold: '-'},  // 18
      {id: 19, name: '学习', iconName: '19', mold: '-'},  // 19
      {id: 20, name: '办公', iconName: '20', mold: '-'},  // 20
      {id: 21, name: '礼物', iconName: '21', mold: '-'},  // 21
      {id: 22, name: '运动', iconName: '22', mold: '-'},  // 22
      {id: 23, name: '零食', iconName: '23', mold: '-'},  // 23
      {id: 24, name: '维修', iconName: '24', mold: '-'},  // 24
      {id: 25, name: '工资', iconName: '001', mold: '+'},  // 25
      {id: 26, name: '兼职', iconName: '002', mold: '+'},  // 25
      {id: 27, name: '理财', iconName: '003', mold: '+'},  // 25
      {id: 28, name: '礼金', iconName: '004', mold: '+'},  // 25
      {id: 29, name: '其他', iconName: '005', mold: '+'},  // 25
    ];
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