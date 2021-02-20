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
  removeTag: (id: string) => void;
  updateTag: (id: string, obj: { name: string; iconName: string; mold: string }) => void;
}
