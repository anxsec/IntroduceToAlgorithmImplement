function bubble_sort(unsortedArray) {
  const arrLength = unsortedArray.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = arrLength - 1; j > i; j--) {
      if (unsortedArray[j] < unsortedArray[j - 1])
        [unsortedArray[j - 1], unsortedArray[j]] = [unsortedArray[j], unsortedArray[j - 1]];
    }
  }
  return unsortedArray;
}

// algorithm test
const unsortedArray = [];
for ( let i = 0; i <1000; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

console.time('bubble_sort');

console.log('sorted Array: ', bubble_sort(unsortedArray));

console.timeEnd('bubble_sort');