// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Anonymous function
var numbers=[1,4,5,7,8,4,];
 var odds=[];   
 var x=function (numbers) {
     for(i=0;i<numbers.length;i++){
     var c=  numbers[i]%2!==0 ;
     if(c!=0){
        odds.push(numbers[i]); 
     }
     }
   return odds;  
 }
 console.log(x(numbers));

//  IIFE function

var numbers=[1,4,5,7,8,4,];
var odds=[];  
(function () {

function displayodd(numbers){
for(var i=0;i<numbers.length;i++){
   var c=numbers[i]%2;
if(c!=0){
   odds.push(numbers[i]);
}
}
return odds;
}
console.log(displayodd(numbers));

   }

)

();
// Convert all the strings to title caps in a string array
// Anonymous function
var x=function () {
   var str="hello guvi";
  str=str.split(" ");
   for(var i=0;i<str.length;i++){
   str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
   }
console.log(str.join(' '));
}
x();
// IIFE function
var str="hello guvi";
     
(function (str) {
   str=str.split(" ");
   
    for(var i=0;i<str.length;i++){
       str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    
    
     
  console.log(str.join(' '));
  
}

)

("hello guvi");

// Sum of all numbers in an array
// Anonymous
var arr=[1,4,5,8,3,9,10];
var sum=0;
var x= function (arr) {

for(i=0;i<arr.length;i++){
sum+=0+arr[i];
}
return sum;
}
console.log(x(arr));
// IIFE function
var arr=[1,4,5,8,3,9,10];
var sum=0;
(function () {
function add(arr){
for(i=0;i<arr.length;i++){
sum+=0+arr[i];
}
return sum;
}
console.log(add(arr));
}
)
();
// Return all the prime numbers in an array
//Anonymous function
let num = [1,2,3,4,5,6,7,8,9,];
let result = [];
var isPrime=function (num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); 

//IIFE function

(function () {
   var primeNum=[7,9,3,8];
   primeNum=primeNum.filter(function(number) {
       for(var i=2;i<=Math.sqrt(number);i++) {
           if(number%i==0)
           return false;
       }
       return true;
   });
   console.log(primeNum);
   })()

   // Return all the palindromes in an array
   //Anonymous
   var palindrome=function () {
      var arr=['malayalam','wow','noon','guvi','tamil'];
      var arr1=arr.filter(function (c,d) {
          var result=c.split('').reverse().join('');
          if(c==result){
              console.log(arr[d]);
          }
      });
  }
  palindrome();
  //IIFE function
  (function () {
   var arr=['malayalam','wow','noon','guvi','tamil'];
   var arr1=arr.filter(function (c,d) {
       var result=c.split('').reverse().join('');
       if(c==result){
           console.log(arr[d]);
       }
   });
})()
// Return median of two sorted arrays of the same size.
// Anonymous function
var arr1=[2,4,6,7,8,9];
var arr2=[1,2,3,4,5,6];
var median=function(a, b){
    
    var c=[...a,...b].sort((a, b) => a - b);
    console.log(c);
    var half=c.length/2|0;
    console.log(half);
    if(c.length%2){
        return c[half];
    }
    else {
        return (c[half]+c[half-1])/2;
    }

    }
console.log(median(arr1,arr2));

// IIFE function
var arr1=[2,4,6,7,8,9];
var arr2=[1,2,3,4,5,6];
(function (){
    
    let c=[...arr1,...arr2].sort((a, b) => a - b);
   //  console.log(c);
    var half=c.length/2|0;
   //  console.log(half);
    if(c.length%2){
        console.log(c[half]);
    }
    else {
        console.log(c[half]+c[half-1])/2;
    }

})()
// Remove duplicates from an array
// Anonymous
var duplicates= function (){
   var arr1=[1,2,3,4,5,6,7,2,4,1,5];
   var temp=[];
   var arr2=[...arr1].sort();
   for(var i=0;i<arr2.length;i++){
       if(arr2[i+1]===arr2[i]){
           temp.push(arr2[i]);
       }
   }
   console.log(temp);
}
duplicates();
// IIFE function
(function (){
   var arr1=[1,2,3,4,5,6,7,2,4,1,5];
   var temp=[];
   var arr2=[...arr1].sort();
   for(var i=0;i<arr2.length;i++){
       if(arr2[i+1]===arr2[i]){
           temp.push(arr2[i]);
       }
   }
   console.log(temp);

})()
// Rotate an array by k times
// Anonymous
var rotatearray=function(A, K) {
   if(A.length===K || K===0){
   return A;
   }
   K=K%A.length;
   for(var i=0;i<K;i++){
       A.unshift(A.pop());
       
   }
   console.log(A);
   
}
rotatearray([1,2,3,4,5], 2)
//IIFE function
(function(A, K) {
   if(A.length===K || K===0){
   return A;
   }
   K=K%A.length;
   for(var i=0;i<K;i++){
       A.unshift(A.pop());
       
   }
   console.log(A);
   
})([1,2,3,4,5], 2)

// Do the below programs in arrow functions.
// Print odd numbers in an array
    
const numbers = [1,2,3,4,5,6];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds); 
// Convert all the strings to title caps in a string array
const strings ="hello guvi";
const newStr=strings.split(" ").map(ele => ele[0].toUpperCase() + ele.slice(1)).join(' ');
console.log(newStr);

// Sum of all numbers in an array
var array=[1,2,3,4,5];
let result=0;
var res=array.forEach(ele => {result+=ele });
console.log(result);

// Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(ele => {
  for (let i = 2; i < ele; i++) {
    if (ele % i === 0) return false;
  }
  return ele !== 1;
});
console.log(myPrimeArray);
// Return all the palindromes in an array
onst getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon"]));