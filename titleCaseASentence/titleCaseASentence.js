function titleCase(str) {
  var word,letter,thar = [];
  var check, slow, mic = [];
  var toc, res = ('');              // define my variables to empty arrays and strings
  
  word = str.split(' ');            // takes a string and splits the string every case that at space is encountered (individual words)
   
  for (var i = 0; i<word.length; i ++){    // for loop that manipulates each individua word 
    letter = word[i].split('');      // takes a word and splits it into individual characters
    toc = letter[0];                 // isolates the first character of each word
    check = toc.toUpperCase();     // capitalizes the first letter of the word
    letter.shift();                  // takes the uncapitalized letter in the array and leaves the rest of the array still in tact
    mic = letter.join('');            // makes the remaining letters in the array into a string
    res = mic.toLowerCase();       // makes the string of the former array all lower case
    slow = res.split('');          // places the new lower case string into a new array
    slow.unshift(check);           // places the capialized first letter of the original word back to the front of the array
    check = slow.join('');         // makes the newly formed array a string
    thar.push(check);              // places the new word into another array with the word fully manipulated and in tact
    str = thar.join(' ');          // places the words together to form asentence that has all of the words first letter capitalized and the rest of the letters lower case
    }
  
  return str;                     // returns the anticipated result
}

titleCase("I'm a liTTle tea pot");

