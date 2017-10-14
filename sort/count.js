function count_sort(unsortedArray) {
  const counter = [];
  let sortedArray = [];
  for (let i = 0; i < 1001; i ++)
    counter.push(0);
  for (let i = 0; i < unsortedArray.length; i ++)
    counter[unsortedArray[i]] ++;
  for (let i = 1; i < 1001; i ++)
    counter[i] = counter[i] + counter[i - 1];
  for (let i = unsortedArray.length - 1; i >= 0; i --) {
    sortedArray[counter[unsortedArray[i]] - 1] = unsortedArray[i];
    counter[unsortedArray[i]] --;
  }
  return sortedArray;
}

// algorithm test
const unsortedArray = [];
for ( let i = 0; i <10; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

console.time('count_sort');

console.log('sorted Array: ', count_sort(unsortedArray));

console.timeEnd('count_sort');