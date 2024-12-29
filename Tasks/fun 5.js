function search(SString, chr) {
  var ind = [];
  for (var i = 0; i < SString.length; i++) {
    if (SString[i].toLowerCase() == chr.toLowerCase()) {
      ind.push(i);
    }
  }
  document.writeln("Your Statment was: "+SString);
  document.writeln("<br>"+ind);
}

var SString = prompt("Enter the statment");
var chr = prompt("Enter charcter to search");
search(SString, chr);
