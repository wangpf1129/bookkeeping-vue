
import tagListStore from '@/store/tagListStore';
import recordListStore from '@/store/recordListStore';


const store = {
  ...tagListStore,
  ...recordListStore
};

export default store;