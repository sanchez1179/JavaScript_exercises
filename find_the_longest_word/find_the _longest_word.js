function findLongestWord(str) {
   var arr, car = [];
   var tar, thar = [];          // define empty arrays
  arr = str.split(' ');         // use split to put each word of string in an array  
  for (var i = 0; i<arr.length; i ++){    
    tar = arr[i].split('');             // use split spilt each word in an array
    if(tar.length >= thar.length && tar.length > car.length){
      car = tar;
    }                                   // comparison of lengths of each word largest word stored in array car
    thar = tar;                         // old value of tar stored in thar in order to have a comparison base
  }
    
  return car.length;                    // return the length of the longest word
}

findLongestWord("The quick brown fox jumped over the lazy dog");