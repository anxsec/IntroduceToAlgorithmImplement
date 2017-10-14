function heap_sort(unsortedArray) {
  unsortedArray = build_max_heap(unsortedArray);
  let sortedArray = [];
  for (let i = heap_size(unsortedArray) - 1; i >= 0; i --) {
    sortedArray.push(unsortedArray.shift());
    unsortedArray.unshift(unsortedArray.pop());
    unsortedArray = max_heapify(0, unsortedArray);
  }
  return sortedArray;
}

function build_max_heap(heap) {
  for (let i = Math.floor((heap_size(heap) - 1) / 2); i >= 0; i--) {
    heap = max_heapify(i, heap);
  }
  return heap;
}

function max_heapify(i, heap) {
  const l = left(i);
  const r = right(i);
  let largest = i;
  if (l < heap_size(heap) && heap[l] > heap[largest])
    largest = l;
  if (r < heap_size(heap) && heap[r] > heap[largest])
    largest = r;
  if (largest !== i) {
    [heap[i], heap[largest]] = [heap[largest], heap[i]];
    return max_heapify(largest, heap);
  }
  return heap;
}

function left(i) {
  return (i + 1) * 2 - 1;
}

function right(i) {
  return (i + 1) * 2;
}

function heap_size(heap) {
  // assume the length of array is heap size
  return heap.length;
}

// algorithm test
const unsortedArray = [];
for ( let i = 0; i < 10; i++) {
  unsortedArray.push(Math.floor(Math.random() * 1000));
}

console.log('unsorted Array: ', unsortedArray);

console.time('heap_sort');

console.log('sorted Array: ', heap_sort(unsortedArray));

console.timeEnd('heap_sort');