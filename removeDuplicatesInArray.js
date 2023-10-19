let array = [-10,29,4,-4,16,29,-10, 33, 33, 33]


function removeDuplicates(array){
  
    let newArray = [];
    
    for (let index = 0; index < array.length; index++) {
             if(!newArray.includes(array[index]))
                 newArray.push(array[index])
        
    }

    return newArray;
}

console.log(removeDuplicates(array));