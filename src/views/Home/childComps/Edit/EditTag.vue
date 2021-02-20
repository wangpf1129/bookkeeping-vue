<template>
  <div class="edit_tag_wrapper">
    <TopNav name="back">
      <span slot="title">{{id === '9999' ? '新建分类' : '编辑分类'}}</span>
    </TopNav>
    <section class="input_tag">
      <TypeSection @getCategory="getCategory">
        <CategorySection/>
      </TypeSection>
      <label v-if="id !== '9999' ">
        <Icon :iconName="iconName === '9999' ? tag.iconName : iconName"/>
        <input type="text"
               placeholder="请输入分类类型(不超过四个字)"
               v-model="value"
        />
      </label>
      <label v-if="id === '9999' ">
        <Icon :iconName="iconName"/>
        <input type="text"
               placeholder="请输入分类类型(不超过四个字)"
               v-model="value"
        />
      </label>
    </section>
    <section class="icon_list">
      <ul>
        <li v-for="icon in  defaultIcon" :key="icon.id" @click="getIconName(icon.iconName)">
          <Icon :iconName="icon.iconName"/>
        </li>
      </ul>
    </section>
    <section>
      <div class="button_tag" v-if="id === '9999'">
        <button class="save" @click="addNewTag">添加新标签</button>
      </div>
      <div class="button_tag" v-else>
        <button class="save" @click="saveTag">保存标签</button>
        <button class="delete" @click="deleteOneTag">删除标签</button>
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
    tags = window.tagList;
    iconName = '9999';
    mold = '-';
    tag?: any = {};
    value = '';

    created() {
      const tag = this.tags.filter(t => t.id === this.id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        //表示进入新建分类
      }
    }

    getCategory(category: string) {
      this.mold = category;
    }

    getIconName(iconName: string) {
      this.iconName = iconName;
    }

    saveTag() {
      if (this.tag && this.value.trim().length <= 4 && this.value.length > 0) {
        // this.tag.name = this.value;
        // 更新 tags 代码
        const newIconName = this.iconName !== '9999' ? this.iconName : this.tag.iconName;
        const name = this.value, iconName = newIconName, mold = this.mold;
        tagListModel.update(this.tag.id, {name, iconName, mold});
        window.alert('添加成功');
      } else {
        window.alert('不能输入空的标签以及输入的汉字不能超过四个！');
        this.value = '';
      }
    }

    addNewTag() {
      console.log('添加新标签');
      // const newTag = tagListModel.create()
    }


    deleteOneTag() {
      if (this.tag) {
        tagListModel.remove(this.tag.id);
        window.alert('删除成功');
        this.$router.go(-1)
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