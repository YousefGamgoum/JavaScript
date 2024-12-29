function checkPlind(text, response) {
  var text2 = text.split("").reverse().join("");

  if (response) {
    if (text == text2) {
      document.writeln("<h2>plaindroom</h2>");
    } else {
      document.writeln("<h2>NOT plaindroom</h2>");
    }
  } else {
    if (text.toLowerCase() == text2.toLowerCase()) {
      document.writeln("<h2>plaindroom</h2>");
    } else {
      document.writeln("<h2>NOT plaindroom</h2>");
    }
  }
}
var text = prompt("Enter Word to check if it plaindroom or no");
var response = 0;
response = confirm("Do you want to consider case sensetive or no");
checkPlind(text, response);
