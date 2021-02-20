import clone from '@/common/clone';

const localStorageName = 'recordList';

type RecordListModel = {
  data: RecordItem[];
  fetch: () => RecordItem[];
  save: () => void;
  create: (record: RecordItem) => boolean;
}
const recordListModel: RecordListModel = {
  data: [],

  create(record) {
    if (record.tagIds.length === 0) {
      alert('请输入标签!');
      return false;
    }
    if (record.amount <= 0) {
      alert('请输入金额!');
      return false;
    }
    const newRecord: RecordItem = clone(record);
    this.data.push(newRecord);
    this.save();
    return true;
  },
  
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }
};

export {recordListModel};