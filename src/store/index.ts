import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/common/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
      return state.recordList;
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecord(state, record) {
      if (record.tagIds.length === 0) {
        alert('请输入标签!');
        return
      }
      if (record.amount <= 0) {
        alert('请输入金额!');
        return
      }

      const newRecord: RecordItem = clone(record);
      state.recordList.push(newRecord);
      store.commit('saveRecords')
      window.alert('保存成功');
      window.location.reload();
    }
  },
  actions: {},
  modules: {}
});

export default store