import clone from '@/common/clone';

const localStorageName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],

  create(record: RecordItem) {
    const newRecord: RecordItem = clone(record);
    this.data.push(newRecord);
    this.save()
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    return window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  }
};

export {recordListModel};