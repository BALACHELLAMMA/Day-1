
let array = [-14,4,5,-2,76,0,5.6, "str", true]


function getPositiveNumbersInarray(array){
    //create a new arrayay to store positive values 
    let newArray = []

    for(let index = 0; index < array.length; index++){
    
        // only number type should include.
        // and number should > 0 => to get a positive number

        if(typeof array[index] == "number" && array[index] > 0)
          newArray.push(array[index])
    }

    return newArray
}

console.log(getPositiveNumbersInarrayay(array))