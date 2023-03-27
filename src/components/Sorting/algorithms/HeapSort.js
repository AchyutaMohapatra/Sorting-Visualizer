const heapSort = (arr) => {
    buildHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, 0, i);
    }
    return arr;
  };
  
  const buildHeap = (arr) => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, i, arr.length);
    }
  };
  
  const heapify = (arr, i, heapSize) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
  
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, largest, heapSize);
    }
  };
  export default heapSort;
  