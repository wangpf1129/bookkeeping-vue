import {nanoid} from 'nanoid';


const tagListStore: TagListStore = {
  tagList: [] as Tag[],
  fetchTags() {
    let localTags = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: nanoid(10), name: '餐饮', iconName: '1', mold: '-'},  // 1
        {id: nanoid(10), name: '娱乐', iconName: '2', mold: '-'},  // 2
        {id: nanoid(10), name: '日用', iconName: '3', mold: '-'},  // 3
        {id: nanoid(10), name: '通讯', iconName: '4', mold: '-'},  // 4
        {id: nanoid(10), name: '果蔬', iconName: '5', mold: '-'},  // 5
        {id: nanoid(10), name: '交通', iconName: '6', mold: '-'},  // 6
        {id: nanoid(10), name: '烟酒', iconName: '7', mold: '-'},  // 7
        {id: nanoid(10), name: '数码', iconName: '8', mold: '-'},  // 8
        {id: nanoid(10), name: '服饰', iconName: '9', mold: '-'},  // 9
        {id: nanoid(10), name: '宠物', iconName: '10', mold: '-'},  // 10
        {id: nanoid(10), name: '旅行', iconName: '11', mold: '-'},  // 11
        {id: nanoid(10), name: '美容', iconName: '12', mold: '-'},  // 12
        {id: nanoid(10), name: '社交', iconName: '13', mold: '-'},  // 13,
        {id: nanoid(10), name: '汽车', iconName: '14', mold: '-'},  // 14
        {id: nanoid(10), name: '住房', iconName: '15', mold: '-'},  // 15
        {id: nanoid(10), name: '书籍', iconName: '16', mold: '-'},  // 16
        {id: nanoid(10), name: '长辈', iconName: '17', mold: '-'},  // 17
        {id: nanoid(10), name: '彩票', iconName: '18', mold: '-'},  // 18
        {id: nanoid(10), name: '学习', iconName: '19', mold: '-'},  // 19
        {id: nanoid(10), name: '办公', iconName: '20', mold: '-'},  // 20
        {id: nanoid(10), name: '礼物', iconName: '21', mold: '-'},  // 21
        {id: nanoid(10), name: '运动', iconName: '22', mold: '-'},  // 22
        {id: nanoid(10), name: '零食', iconName: '23', mold: '-'},  // 23
        {id: nanoid(10), name: '维修', iconName: '24', mold: '-'},  // 24
        {id: nanoid(10), name: '工资', iconName: '001', mold: '+'},  // 25
        {id: nanoid(10), name: '兼职', iconName: '002', mold: '+'},  // 25
        {id: nanoid(10), name: '理财', iconName: '003', mold: '+'},  // 25
        {id: nanoid(10), name: '礼金', iconName: '004', mold: '+'},  // 25
        {id: nanoid(10), name: '其他', iconName: '005', mold: '+'},  // 25
      ] as Tag[];
    }
    this.tagList = [...localTags];
    return this.tagList;
  },
  saveTags() {
    window.localStorage.setItem('tagList', JSON.stringify(this.tagList));
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag({name, iconName, mold}) {
    this.tagList.push({id: nanoid(10), name, iconName, mold});
    this.saveTags();
    window.location.reload();
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    window.location.reload();
  },
  updateTag(id, {name, iconName, mold}) {
    const newTags = this.tagList.map(tag => tag.id === id ? {id, name, iconName, mold} : tag);
    this.tagList = [...newTags];
    this.saveTags();
    window.location.reload();
  },
};

tagListStore.fetchTags();

export default tagListStore;