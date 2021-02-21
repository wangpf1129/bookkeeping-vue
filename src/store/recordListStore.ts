import clone from '@/common/clone';


const recordListStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    if (record.tagIds.length === 0) {
      alert('请输入标签!');
      return false;
    }
    if (record.amount <= 0) {
      alert('请输入金额!');
      return false;
    }

    const newRecord: RecordItem = clone(record);
    this.recordList && this.recordList.push(newRecord);
    recordListStore.saveRecords();
    return true;
  }
};

recordListStore.fetchRecords();

export default recordListStore;
