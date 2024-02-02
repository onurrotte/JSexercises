let avrNumber = 0;
let sumNum = 0;
function averageNumber(arr){
    for ( let i = 0; i < arr.length ;  i++ ){
    sumNum += arr[i]
    avrNumber = sumNum / arr.length
}
console.log(avrNumber)
}
averageNumber ([10 ,20 ,30 ,40])