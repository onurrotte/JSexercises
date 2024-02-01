//2.1
function add(a,b){
    return a + b
}
let sum = add(1,8);
console.log(sum);


//2.2
function reverseString(str){
    return str
    .split('')
    .reverse()
    .join('');
}
console.log(reverseString('hello'))
