function merge_sort(unsortedArr) {
  const len = unsortedArr.length;
  if (len > 1) {
    const mid = Math.ceil(len / 2);
    return merge(merge_sort(unsortedArr.slice(0, mid)), merge_sort(unsortedArr.slice(mid)));
  }
  return unsortedArr;
}

function merge(arr1, arr2) {
  const ret = [];
  for (;arr1.length > 0 || arr2.length > 0;) {
    if (arr1.length < 1) {
      ret.push(arr2.shift());
    } else if (arr2.length < 1) {
      ret.push(arr1.shift());
    } else if (arr1[0] < arr2[0]) {
      ret.push(arr1.shift());
    } else {
      ret.push(arr2.shift());
    }
  }
  return ret;
}

// test algorithm
const unsortedArray = [];
for ( let i = 0; i <300000; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

// console.log('unsorted Array: ', unsortedArray);

console.time('merge_sort');

// console.log('sorted Array: ', merge_sort(unsortedArray));

merge_sort(unsortedArray);

console.timeEnd('merge_sort');