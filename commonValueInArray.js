//sample 1
let arrOne = [1, 3, 33, 8, 8 , 8]
let arrTwo = [76, 8, 13, 54]

//sample 2
let one = [1, 3, 33, 8, true]
let two = [76, 8, 3, 13]

//sample 3
let three = [1, -3, 33, 8]
let four = [76, -1, -3, 54]

//sample 4
let dec1 = [1, 33.2, 3, 5.4]
let dec2 = [ 8, -3, 33.2, 5.4]

function commonVal(arrOne, arrTwo){
let commonArr = []

for(let firstArrIndex=0; firstArrIndex < arrOne.length; firstArrIndex++){
   for(let secondArrIndex=0; secondArrIndex < arrTwo.length; secondArrIndex++)
   {
       if(arrOne[firstArrIndex] === arrTwo[secondArrIndex] && !commonArr.includes(arrOne[firstArrIndex]))
       {
          commonArr.push(arrOne[firstArrIndex])
       }
   }
}

return commonArr;

}

console.log(commonVal(arrOne,arrTwo))
console.log(commonVal(one,two)) //more than one common number
console.log(commonVal(three,four)) //-negative numbers
console.log(commonVal(dec1,dec2)) //for decimal values



