  function largestOfFour(arr) {
  var final = [];
  var leader = "";
  for (var i = 0; i < arr.length; i++){
    var inside = arr[i];
    leader = '';
    for(var j = 0; j < inside.length - 1; j++){
      var master = inside[j];
      var subject = inside[j+1];
      master = leader;
      if (master >= subject){
        leader = master;
      }
      else{
         leader = subject;
      }
      
    } final.push(leader);
  }
  return final;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);