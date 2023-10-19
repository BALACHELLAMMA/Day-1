let arr = [10,20,30,40,50,true,"true",-3,5.6]

function interChangePosition(arr,element){
    if(arr.length==0) return "Empty array..! so, can't interchangeble"
    
    let newArr = arr;
    
    let index = element - 1;
    let nextIndex = index +1;

    //if index is in negative or indexoutofbounds
    if(index < 0 && index > arr.length) 
    {
        return "Enter an existing element position...!";        
    }

    //for first and last index
    if(index===0 || index===newArr.length-1){
       [newArr[0], newArr[newArr.length-1]] = [newArr[newArr.length-1] , newArr[0]]
       return newArr
    }

    [newArr[index], newArr[nextIndex]] =  [newArr[nextIndex], newArr[index]]

    return newArr;
    // return newArr.slice(0,nextIndex+1);
}

// console.log(interChange([],1))
console.log(interChange(arr,7))




