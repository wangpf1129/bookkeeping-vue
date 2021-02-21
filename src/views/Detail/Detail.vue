<template>
  <Layout name="明细">
    <TypeSection @getCategory="getCategory"/>
    <section class="icon_div" v-if="array.length === 0">
      <Icon iconName="none"/>
      <money-key/>
    </section>
    <section v-if="array.length !== 0">
      <div v-for="([date,records],index) in array" :key="index">
        <div class="date_div">{{date}}</div>
        <div class="record_list" v-for="(item,index) in records" :key="index">
          <div class="record_items">
            <div class="left">
              <span><Icon :iconName="getItemIcon(item)"/>{{getItemIcon(item)}}</span>
            </div>
            <div class="center">
              <span class="nameSpan">{{getItemName(item)}}</span>
              <span class="noteSpan">{{item.note || '无备注'}}</span>
            </div>
            <div class="right">
              <span class="amountSpan">￥{{item.amount}}</span>
              <span class="dateSpan">{{itemDate(item)}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script lang="ts">

  import TypeSection from '@/components/common/TypeSection/TypeSection.vue';
  import CategorySection from '@/views/Home/childComps/Money/CategorySection.vue';
  import MoneyKey from '@/components/common/MoneyKey/MoneyKey.vue';
  import day from 'dayjs';

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {TypeSection, CategorySection, MoneyKey}
  })
  export default class Detail extends Vue {
    category = '-';

    get tagList() {
      return this.$store.state.tagList as Tag[];
    }

    get recordList() {
      return this.$store.state.recordList as RecordItem[];
    }

    get itemDate() {
      return (item: RecordItem) => {
        day(item.createdAt).format('HH:mm');
      };
    }

    selectedRecords = this.recordList.filter(r => r.category === this.category);
    hash: { [key: string]: RecordItem[] } = {};

    // 把对象变为数组
    get array() {
      return Object.entries(this.hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
      });

    }

    getCategory(category: string) {
      this.category = category;
    }

    getItemIcon(item: RecordItem) {
      console.log(item.tagIds[0]);
      const tag: any = this.tagList.filter(tag => tag.id === item.tagIds[0]);
      return tag.length !== 0 ? tag.iconName : '9999';
    }

    getItemName(item: RecordItem) {
      const tag: any = this.tagList.filter(tag => tag.id === item.tagIds[0]);
      return tag ? tag.name : '';
    }

    created() {
      this.$store.commit('fetchRecords');
      this.$store.commit('fetchTags');

      this.selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        // const key = r.createdAt;
        if (!(key in this.hash)) {
          this.hash[key] = [];
        }
        this.hash[key].push(r);
        return this.hash;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .icon_div {
    .icon {
      width: 148px;
      height: 148px;
    }

    margin-top: 80px;
    padding: 20px;
    text-align: center;
    font-size: 24px;
  }

  .date_div {
    font-size: 16px;
    color: #9ccac0;
    font-weight: 700;
    padding: 10px;
  }

  .record_list {
    margin: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .record_items {
    background-color: #f9faf5;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
    }

    .left {
      padding-right: 10px;

      .icon {
        width: 42px;
        height: 42px;
      }
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: column;

      .nameSpan {
        font-size: 18px;
        font-weight: 700;
      }

      .noteSpan {
        margin-top: 8px;
        color: #666;
        font-size: 14px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      .amountSpan {
        font-size: 18px;
        font-weight: 700;
      }

      .dateSpan {
        margin-top: 8px;
        color: #666;
        font-size: 14px;
        text-align: right;
      }
    }

  }
</style>