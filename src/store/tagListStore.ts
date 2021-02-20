import {tagListModel} from '@/models/tagListModel';


export default {
  // tag Store
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: ({name, iconName, mold}) => {
    tagListModel.create({name, iconName, mold});
  },
  removeTag: (id: string) => {
    tagListModel.remove(id);
  },
  updateTag: (id, {name, iconName, mold}) => {
    tagListModel.update(id, {name, iconName, mold});
  },
} as TagListStore;

