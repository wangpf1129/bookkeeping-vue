<template>
  <Layout name="明细">
    <TypeSection @getCategory="getCategory"/>
    <section class="icon_div" v-if="groupList.length === 0">
      <Icon iconName="none"/>
      <money-key/>
    </section>
    <section v-if="groupList.length !== 0">
      <div v-for="([date,group],index) in groupList" :key="index">
        <div class="date_div">{{date}}</div>
        <div class="record_list" v-for="(item,index) in group" :key="index">
          <div class="record_items">
            <div class="left">
              <span><Icon :iconName="$store.getters.getItemIcon(item.tagIds[0])"/></span>
            </div>
            <div class="center">
              <span class="nameSpan">{{$store.getters.getItemName(item.tagIds[0])}}</span>
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

    get recordList() {
      return (this.$store.state as RootStore).recordList;
    }

    get tagList() {
      return (this.$store.state as RootStore).tagList;
    }


    getCategory(category: string) {
      this.category = category;
    }


    get groupList() {
      const {recordList} = this;
      const hash: { [key: string]: RecordItem[] } = {};
      const selectedRecords = recordList.filter(r => r.category === this.category);
      selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        if (!(key in hash)) {
          hash[key] = [];
        }
        hash[key].push(r);
        return hash;
      });
      // 把对象变为数组   以时间排序
      return Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
      });

    }

    get itemDate() {
      return (item: RecordItem) => {
        return day(item.createdAt).format('HH:mm');
      };
    }


    beforeCreate() {
      this.$store.commit('fetchRecords');
      this.$store.commit('fetchTags');
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