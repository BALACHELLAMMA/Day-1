// using slice()
function addSuffixOrPrefix(valOne, valTwo, type){

    // valOne[0]= valOne[0].toUpperCase().toString();
    // valTwo[1].toUpperCase();

    if(type === "prefix"){
        return valTwo[0].toUpperCase() + valTwo.slice(1)+" "+valOne[0].toUpperCase() + valOne.slice(1);

    }
    else if(type === "suffix"){
        return valOne[0].toUpperCase() + valOne.slice(1)+" "+valTwo[0].toUpperCase() + valTwo.slice(1);
        
    }
}

console.log(addSuffixOrPrefix("99","mr","prefix"));
console.log(addSuffixOrPrefix("chares","jr","suffix"));

//without use of "slice()"

// function displayString(arr){
//     let newArr='';
//     for(let index=1; index < arr.length; index++){
//           newArr+=arr[index]
//     }
//     return newArr;
// }


// function addSuffixOrPrefix(valOne, valTwo, type){

//     // valOne[0]= valOne[0].toUpperCase().toString();
//     // valTwo[1].toUpperCase();

//     if(type === "prefix"){
//         return valTwo[0].toUpperCase() + displayString(valTwo)+" "+valOne[0].toUpperCase() + displayString(valOne);

//     }
//     else if(type === "suffix"){
//         return valOne[0].toUpperCase() + displayString(valOne)+" "+valTwo[0].toUpperCase() + displayString(valTwo);
        
//     }
// }


