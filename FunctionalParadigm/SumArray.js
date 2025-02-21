var sumArray = (arr) => {
    var num = 0;
    for(let i=0; i<arr.length; i++){
        num += arr[i];
    }
    return num;
}

var total = sumArray([1, 2, 3, 4, 5]);
console.log(total)