function rotate(arr,n){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < n; j++) {
           console.log(arr[j]);
           
        }
    }
    
}
console.log(rotate([1,2,3,4,5,6,7,8,9,],2));
