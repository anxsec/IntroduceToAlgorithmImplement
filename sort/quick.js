function quick_sort(arr) {
  if (arr.length > 1) {
    const { lArr, rArr } = partition(arr);
    return quick_sort(lArr).concat(quick_sort(rArr))
  }
  return arr;
}

function partition(arr) {
  if (arr.length < 1) return;
  const mid = arr.pop()
  const lArr = [];
  const rArr = [mid];
  arr.forEach(elm => {
    if (elm <= mid) {
      lArr.push(elm)
    } else {
      rArr.push(elm)
    }
  })
  return {
    lArr,
    rArr
  }
}

// test algorithm

const unsortedArray = [];
for ( let i = 0; i <1000000; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

// console.log(partition(unsortedArray));

console.time('quick_sort');

console.log('sorted Array: ', quick_sort(unsortedArray));

console.timeEnd('quick_sort');