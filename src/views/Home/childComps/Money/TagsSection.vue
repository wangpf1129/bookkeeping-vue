<template>
  <div class="tags-wrapper">
    <ol>
      <li v-for="tag in tags" :key="tag.id"
          @click="toggleTag(tag.id)"
          :class="{selected: selectedTagIds.indexOf(tag.id) >= 0}"
      >
        <Icon :iconName="tag.iconName"/>
        <span>{{tag.name}}</span>
      </li>
      <li>
        <Icon iconName="set"/>
        <span>
          <router-link to='home/money/edit'>设置</router-link>
         </span>
      </li>
    </ol>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class TagsSection extends Vue {
    @Prop() tags: { id: number; name: string; iconName: string; mold: string }[] | undefined;
    selectedTagIds: number[] = [];

    toggleTag(tag: number) {
      const index = this.selectedTagIds.indexOf(tag);
      if (index >= 0) {
        this.selectedTagIds = this.selectedTagIds.filter(item => item !== tag);
      } else {
        this.selectedTagIds = [tag];
        this.$emit('update:value',this.selectedTagIds)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags-wrapper {
    padding: 20px 38px;

    > ol {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-right: -24px;

      > li {
        width: 20%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 2px 3px 4px #ddd;
        padding: 10px 12px;
        margin-top: 24px;
        margin-right: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 12px;

        > span {
          padding-top: 5px
        }

        .icon {
          width: 28px;
          height: 28px;
          fill: rgba(0, 0, 0, .6)
        }
      }

      .selected {
        background-color: #a1ddd4;
        box-shadow: 1px 2px 2px #ddd;
      }
    }
  }
</style>