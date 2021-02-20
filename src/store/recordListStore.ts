import {recordListModel} from '@/models/recordListModel';


export default {
  // record Store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  }
} as RecordListStore;

