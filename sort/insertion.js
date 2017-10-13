function insertion_sort(unsortedArray) {
  for(let i = 1; i < unsortedArray.length; i++) {
    const currentValue = unsortedArray[i];
    for( let j = i - 1; j >= 0 && currentValue > unsortedArray[j]; j--) {
      unsortedArray[j + 1] = unsortedArray[j];
      unsortedArray[j] = currentValue;
    }
  }
  return unsortedArray;
}

// algorithm test
const unsortedArray = [];
for ( let i = 0; i <10; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

console.time('insertion_sort');

console.log('sorted Array: ', insertion_sort(unsortedArray));

// insertion_sort(unsortedArray);

console.timeEnd('insertion_sort');

