type RecordItem = {
  tagIds: number[];
  note: string;
  createdAt: string;
  category: '-' | '+';
  amount: number;
}

type Tag = {
  id: string;
  name: string;
  iconName: string;
  mold: string;
}

interface Window {
  tagList: Tag[];
  findTag: (id: string) => Tag | undefined;
  createTag: (obj: { name: string; iconName: string; mold: string }) => void;
  removeTag: (id: string) => void;
  updateTag: (id: string, obj: { name: string; iconName: string; mold: string }) => void;

  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}
