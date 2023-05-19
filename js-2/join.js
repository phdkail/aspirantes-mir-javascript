function join(arr) {
    var result = '';
    
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
      
      if (i !== arr.length - 1) {
        result += ' ';
      }
    }
    
    return result;
  }
  