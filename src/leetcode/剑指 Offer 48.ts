/*
   求最长不重复字串，如 1231456 => 231456
   优化点：可以比较当前结果的长度，减少计算次数。
*/
export default function getUnduplicatedStr(str: string): string {
  let unduplicatedStr = '';
  for (let start = 0; start < str.length; start++) {
    for (let end = str.length - 1; end > start; end--) {
      const currentStr = str.slice(start, end + 1);
      const isDuplicatedStr = checkIsDuplicatedStr(currentStr);
      if (!isDuplicatedStr && currentStr.length > unduplicatedStr.length) {
        unduplicatedStr = currentStr;
      }
    }
  }

  return unduplicatedStr;
}

function checkIsDuplicatedStr(str: string) {
  const duplicatedMap: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    if (duplicatedMap[str[i]]) {
      return true;
    } else {
      duplicatedMap[str[i]] = 1;
    }
  }
  return false;
}
