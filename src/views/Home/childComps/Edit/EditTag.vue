<template>
  <div class="edit_tag_wrapper">
    <TopNav name="back">
      <span slot="title">{{id === '9999' ? '新建分类' : '编辑分类'}}</span>
    </TopNav>
    <section class="input_tag">
      <TypeSection>
        <CategorySection/>
      </TypeSection>
      <label v-if="tag.id !== 9999 ">
        <Icon :iconName="tag.iconName"/>
        <input type="text"
               placeholder="请输入分类类型(不超过四个字)"
               v-model="value"
        />

      </label>
      <label v-if="tag.id === 9999 ">
        <Icon iconName="9999"/>
        <input type="text"
               placeholder="请输入分类类型(不超过四个字)"
               v-model="value"
        />
      </label>
    </section>
    <section class="icon_list">
      <ul>
        <li v-for="icon in  defaultIcon" :key="icon.id">
          <Icon :iconName="icon.iconName"/>
        </li>
      </ul>
    </section>
    <section>
      <div class="button_tag" v-if="id === '9999'">
        <button class="save">添加新标签</button>
      </div>
      <div class="button_tag" v-else>
        <button class="save">保存标签</button>
        <button class="delete">删除标签</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import TypeSection from '@/components/common/TypeSection/TypeSection.vue';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  import {defaultIcon} from '@/common/iconsLib';

  @Component({
    components: {CategorySection, TypeSection, TopNav}
  })
  export default class EditTag extends Vue {
    id = this.$route.params.id;
    defaultIcon = defaultIcon;
    tag?: Tag = undefined;
    value = '';

    created() {
      tagListModel.fetch();
      const tags = tagListModel.tags;
      const tag = tags.filter(t => t.id === parseFloat(this.id))[0];
      if(tag){
        this.tag = tag
      }else{
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit_tag_wrapper {
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

    .input_tag {
      padding: 12px 16px;

      > label {
        display: flex;
        align-items: center;

        > input {
          flex: 1;
          border: none;
          border-bottom: 2px solid #000;
          outline: none;
          padding: 10px 0;
          margin: 0 12px;
          font-size: 16px;
        }

        .icon {
          margin-right: 10px;
          width: 38px;
          height: 38px;
        }

      }
    }

    .icon_list {
      flex: 1;
      overflow-y: auto;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

        li {
          padding: 20px;

          > .icon {
            width: 38px;
            height: 38px;
          }
        }
      }
    }

    .button_tag {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      > button {
        outline: none;
        font-size: 14px;
        border-radius: 4px;
        padding: 10px 24px;
        margin: 0 24px;

        &.save {
          border: 1px solid #9CCAC0;
          background-color: #fff;
        }

        &.delete {
          border: 1px solid #FFFFFF;
          background-color: #9CCAC0;
          color: red;
        }

        .selected {
          background-color: #9CCAC0;
          color: #fff;
        }
      }
    }
  }
</style>