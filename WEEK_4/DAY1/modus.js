function cariModus(arr) {
    // you can only write your code here!
    let obj = {};
    let terbesar = 0;
    let mark = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 0;
        }
        obj[arr[i]]++;

    }

    for (let i = 0; i < arr.length; i++) {
        if (terbesar < obj[arr[i]]) {
            terbesar = obj[arr[i]]
            mark = arr[i]
        }
    }
    if (terbesar === 1 || terbesar === arr.length) {
        return -1
    } else {
        return mark;
    }

}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1