function Display(arrr){
    var sortingArr = arrr.slice();
    document.writeln("<h2 style="+`"color: red"`+">You have entered values: " + arrr +"</h2>");
    sortingArr.sort(function(a, b) {return a - b; });
    document.writeln("<h2 style="+`"color: red"`+">ASC array: " + sortingArr +"</h2>");
    sortingArr.sort(function(a, b) {return b - a; });
    document.writeln("<h2 style="+`"color: red"`+">DEC array: " + sortingArr +"</h2>");
    return true;
}

var arr = [];
for (var i = 0; i < 5; i++){
    arr.push(Number(prompt("Enter a number")));
}

Display(arr);
document.writeln("<h2 style="+`"color: red"`+">You have entered values: " + arr +"</h2>");