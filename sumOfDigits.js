let num = 96472; 
//10;
let sum =0;

const sumOfDigits = (num)=>{

   while(num){
    sum+= num%10;
    num = Math.floor(num/10);   
   }

   return sum;

}

console.log(sumOfDigits(num));