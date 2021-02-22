type getName = (id: string) => string;
const getData = (moneyType: RecordItem[], moneyAll: number, fn: getName) => {
  // 获得支出/收入的ID，根据ID来选出 标签名 和 amount
  const moneyTypeID = moneyType.map(item => item.tagIds);
  const moneyAmount = moneyType.map(item => item.amount);
  const arrayName = [];
  const arrayPer = [];
  for (let i = 0; i < moneyTypeID.length; i++) {
    arrayName.push(fn(moneyTypeID[i][0]));
    arrayPer.push(((moneyAmount[i] / moneyAll) * 100).toFixed(2) + '%');
  }
  const valueAndName: any[] = [];
  for (let i = 0; i < arrayName.length; i++) {
    valueAndName[i] = {
      value: moneyAmount[i], name: arrayName[i],
      label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
    };
  }
  return valueAndName;
};

export {getData};