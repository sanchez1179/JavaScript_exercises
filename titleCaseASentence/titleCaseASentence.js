function titleCase(str) {
  var word,char,thar = [];
  word = str.split(' ');
   for (var i = 0; i<word.length; i ++){    
    char = word[i].split('');
    var toc = char[0];
    check = toc.toUpperCase();
    char.shift();
    char.unshift(check);
    var check = char.join('');
    thar.push(check);
    str = thar.join(' ');
    
   }
  
  return str;
}

titleCase("I'm a little tea pot");