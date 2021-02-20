import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/common/Layout/Layout.vue';
import Icon from '@/components/common/Icon/Icon.vue';
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// tag Store
window.tagList = tagListModel.fetch();
window.findTag = (id: string)=>{
  return  window.tagList.filter(t => t.id === id)[0];
}
window.createTag =({name,iconName,mold})=>{
  tagListModel.create({name,iconName,mold})
}
window.removeTag = (id: string) =>{
  tagListModel.remove(id);
}
window.updateTag = (id,{name,iconName,mold})=>{
  tagListModel.update(id, {name, iconName, mold});
}

// record Store
window.recordList = recordListModel.fetch()
window.createRecord = (record: RecordItem)=>{
  recordListModel.create(record)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
