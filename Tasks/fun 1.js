function count(SString) {
  var count = 0;

  for (var i = 0; i < SString.length; i++) {
    if (SString[i] == "e") {
      count += 1;
    }
  }

  document.writeln("E Counter: ", count);
}
var SString = prompt("Enter String");
count(SString);
