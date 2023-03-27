const bubbleSort = (arr, length) => {
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j].value > arr[j + 1].value) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          arr[j].style = "bar-swap";
          arr[j + 1].style = "bar-swap";
        }
      }
    }
    arr.forEach((element) => {
      element.style = "bar-sorted";
    });
    return [arr];
  };
  export default bubbleSort;
  