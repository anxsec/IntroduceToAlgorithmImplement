function selection_sort(unsortedArr) {
  for ( let i = 0; i < unsortedArr.length - 1; i++ ) {
    let maxIdx = i;
    for ( let j = i; j < unsortedArr.length; j++) {
      if (unsortedArr[j] > unsortedArr[maxIdx])
        maxIdx = j;
    }
    [unsortedArr[i], unsortedArr[maxIdx]] = [unsortedArr[maxIdx], unsortedArr[i]];
  }
  return unsortedArr;
}

// test algorithm

const unsortedArray = [];
for ( let i = 0; i <10; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

console.time('selection_sort');

console.log('sorted Array: ', selection_sort(unsortedArray));

console.timeEnd('selection_sort');