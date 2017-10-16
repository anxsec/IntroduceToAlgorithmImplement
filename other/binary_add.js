function binary_add(arr1, arr2) {
  let carry = 0;
  const result = [];
  for ( let i = Math.max(arr1.length, arr2.length) - 1; i >= 0; i--) {
    if (arr1[i] !== undefined && arr2[i] !== undefined) {
      switch (carry + arr1[i] + arr2[i]) {
        case 0:
          result.unshift(0);
          break;
        case 1:
          result.unshift(1);
          carry = 0;
          break;
        case 2:
          result.unshift(0);
          carry = 1;
          break;
        case 3:
          result.unshift(1);
          carry = 1;
          break;
        default:
          throw new Error('Wrong Format.');
      }
    } else if (arr1[i] === undefined) {
      result.unshift(arr2[i])
    } else {
      result.unshift((arr1[i]))
    }
    // 特殊处理当循环结束但是还有进位的情况
    if (carry > 0 && i === 0) result.unshift(1);
  }
  return result;
}

// algorithm test

const arr1 = [1];
const arr2 = [1];

for( let i = 0; i < Math.floor(Math.random() * 10 + 10); i++) {
  arr1.push(Math.floor(Math.random()*2));
}

for( let i = 0; i < Math.floor(Math.random() * 10 + 10); i++) {
  arr2.push(Math.floor(Math.random()*2));
}

console.log('arr1 and arr2: ', arr1, arr2);

console.time('binary_add');

console.log('result" ', binary_add(arr1, arr2));

console.timeEnd('binary_add');

// 11111000111110
// 10101011011001
// 10100100010111