const localStorageName = 'recordList';
const recordListModel = {
  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    return window.localStorage.setItem(localStorageName, JSON.stringify(data));
  }
};

export {recordListModel};