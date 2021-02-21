<template>
  <div class="edit-wrapper">
    <TopNav name="back">
      <span slot="title">分类管理</span>
    </TopNav>
    <TypeSection @getCategory="getCategory"/>
    <section class="tags-list">
      <ul>
        <li v-for="tag in moldTags" :key="tag.id">
          <div class="tags">
            <Icon :iconName="tag.iconName"/>
            <span>{{tag.name}}</span>
          </div>
          <router-link :to="`${$route.path}/${tag.id}`">
            <Icon iconName="more"/>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="add_tag">
      <router-link :to="`${$route.path}/9999`">
        添加类别
      </router-link>
    </section>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import TopNav from '@/components/common/TopNav/TopNav.vue';
  import TypeSection from '@/components/common/TypeSection/TypeSection.vue';

  @Component({
    components: {TypeSection, TopNav}
  })

  export default class Edit extends Vue {
    get tags() {
      return this.$store.state.tagList as Tag[];
    }

    moldTags: Tag[] = this.tags.filter(tag => tag.mold === '-');

    getCategory(category: string) {
      this.moldTags = this.tags.filter(tag => tag.mold === category);
    }


  }
</script>

<style lang="scss" scoped>
  .edit-wrapper {
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

    .tags-list {
      flex: 1;
      overflow-y: auto;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        margin-left: 10px;

        > .tags {
          display: flex;
          align-items: center;

          > span {
            padding-left: 8px;
            font-size: 18px;
          }

          > .icon {
            width: 42px;
            height: 42px;
          }
        }

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }

    .add_tag {
      text-align: center;
      background-color: #9ccac0;
      font-size: 22px;
      padding: 14px 0;
    }
  }
</style>