const computeResult = (output: string) => {
  const numArr: string[] = output.split(/[+-]/);  // 筛选出 数字
  const symArr: string = output.replace(/[^+-]/g, '');  // 筛选出 运算符
  let sum = Number(numArr[0]);

  for (let i = 0; i < numArr.length - 1; i++) {
    const symOne = symArr.charAt(i);
    const num = Number(numArr[i + 1]);
    if (symOne === '+') {
      sum += num;
    } else if (symOne === '-') {
      sum -= num;
      if(sum < 0){
        alert('不能为负数')
        sum = 0
      }
    }
  }
  return sum.toFixed(0);
};

const generateOutput = (text: string, output: string) => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      }
    case'+':
      if (output[output.length - 1] === '+' || output[output.length - 1] === '-') return output;
      return output + '+';
    case'-':
      if (output[output.length - 1] === '+' || output[output.length - 1] === '-') return output;
      return output + '-';
    case'删除':
      if (output.length === 1) {
        return '0';
      } else {
        return output.slice(0, -1) || '0';
      }
    case '清零':
      return '0';
    case '=':
      return computeResult(output) + '';
    case '完成':
      return output;
    default:
      return '0';
  }
};

export default generateOutput;

