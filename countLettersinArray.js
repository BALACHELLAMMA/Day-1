let str ="numentica ui internship"
let str1 = " hello world !"


const countLetters=(str)=>{
    
    const charactersToAvoid = "/[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?~]/0123456789";
    
    let count=0;

    for(let index=0;index< str.length; index++){
        let currChar = str.charAt(index);
        
        if(currChar!=' ' && !charactersToAvoid.includes(currChar)){

            //check whether the string has any special characters or numbers 
            count++;  

        }
    }
    return count;
}


//samples

console.log(" h e l l o1"+" : ",countLetters(" h e l l o1")); //has numbers
console.log(str+" : ",countLetters(str));
console.log(str1+" : ",countLetters(str1)); //has special character

