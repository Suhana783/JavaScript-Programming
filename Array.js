let arr = [1,4,-5,8,3,-1,7]
function kadanAlgo (arr) {

    let max = -Infinity;
    let sum = 0;
    let n = arr.length;

    for(let i=0; i < n; i++) {
        sum += arr[i];

        if (sum > max) {
        max = sum;   
}

    }
    return max;
}

console.log(kadanAlgo(arr));
