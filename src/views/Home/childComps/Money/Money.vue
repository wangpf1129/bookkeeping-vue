<template>
  <div class="money-wrapper">
    <TopNav name="back">
      <CategorySection slot="title"/>
    </TopNav>
    <section class="main">
      <TagsSection :tags="tags"/>
    </section>
    <KeyboardSection/>
  </div>
</template>

<script lang="ts">
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  import TagsSection from '@/views/Home/childComps/Money/TagsSection.vue';
  import KeyboardSection from '@/views/Home/childComps/Money/KeyboardSection.vue';

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {createId} from '@/common/createId';


  @Component({
    components: {TopNav, CategorySection, TagsSection, KeyboardSection}
  })
  export default class Money extends Vue {
    tags =[
          {id:createId(),name:"餐饮",iconName:"1",mold:"-"},  // 1
          {id:createId(),name:"娱乐",iconName:"2",mold:"-"},  // 2
          {id:createId(),name:"日用",iconName:"3",mold:"-"},  // 3
          {id:createId(),name:"通讯",iconName:"4",mold:"-"},  // 4
          {id:createId(),name:"果蔬",iconName:"5",mold:"-"},  // 5
          {id:createId(),name:"交通",iconName:"6",mold:"-"},  // 6
          {id:createId(),name:"烟酒",iconName:"7",mold:"-"},  // 7
          {id:createId(),name:"数码",iconName:"8",mold:"-"},  // 8
          {id:createId(),name:"服饰",iconName:"9",mold:"-"},  // 9
          {id:createId(),name:"宠物",iconName:"10",mold:"-"},  // 10
          {id:createId(),name:"旅行",iconName:"11",mold:"-"},  // 11
          {id:createId(),name:"美容",iconName:"12",mold:"-"},  // 12
          {id:createId(),name:"社交",iconName:"13",mold:"-"},  // 13,
          {id:createId(),name:"汽车",iconName:"14",mold:"-"},  // 14
          {id:createId(),name:"住房",iconName:"15",mold:"-"},  // 15
          {id:createId(),name:"书籍",iconName:"16",mold:"-"},  // 16
          {id:createId(),name:"长辈",iconName:"17",mold:"-"},  // 17
          {id:createId(),name:"彩票",iconName:"18",mold:"-"},  // 18
          {id:createId(),name:"学习",iconName:"19",mold:"-"},  // 19
          {id:createId(),name:"办公",iconName:"20",mold:"-"},  // 20
          {id:createId(),name:"礼物",iconName:"21",mold:"-"},  // 21
          {id:createId(),name:"运动",iconName:"22",mold:"-"},  // 22
          {id:createId(),name:"零食",iconName:"23",mold:"-"},  // 23
          {id:createId(),name:"维修",iconName:"24",mold:"-"},  // 24
          {id:createId(),name:"工资",iconName:"001",mold:"+"},  // 25
          {id:createId(),name:"兼职",iconName:"002",mold:"+"},  // 25
          {id:createId(),name:"理财",iconName:"003",mold:"+"},  // 25
          {id:createId(),name:"礼金",iconName:"004",mold:"+"},  // 25
          {id:createId(),name:"其他",iconName:"005",mold:"+"},  // 25
        ]
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