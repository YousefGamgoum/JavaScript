function operations(arr){
    var sum = arr[0] ;
    var multi = arr[0] ;
    var dev = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i]; 
        multi = multi * arr[i];
        dev = dev / arr[i];
    }
    document.writeln("<h2 style="+`"color: red"`+">sum of three values: " + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum +"</h2>");
    document.writeln("<h2 style="+`"color: red"`+"><br>Multiply of three values: " + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + multi+"</h2>");
    document.writeln("<h2 style="+`"color: red"`+"><br>Division of three values: " + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + dev+"</h2>");
}

var arr = [];
for (var i = 0; i < 3; i++){
    arr.push(Number(prompt("Enter a number")));
}

operations(arr);
