function maxIndex(arr) {
    if (arr.length === 0) {
      return -1;
    }
  
    let max = arr[0];
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  
    return maxIndex;
  }
