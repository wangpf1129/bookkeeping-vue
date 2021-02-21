type RecordItem = {
  tagIds: string[];
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

type RootStore = {
  recordList: RecordItem[];
  tagList: Tag[];
}

type Payload = {
  id?: string;
  name: string;
  iconName: string;
  mold: string;
}