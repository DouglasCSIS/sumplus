function sumtwo() {
    var num1 = document.getElementById("inp1").value;
    var num2 = document.getElementById("inp2").value;

    // parse to integer
    var val1 = parseInt(num1, 10);
    var val2 = parseInt(num2, 10);

    var result = val1 + val2;

    document.getElementById("sumplace").value = result;

}