//let str = " hello world  !"

let str1 = "  fox i n the box  "

function removeSpace(str){
    let newStr =''

    for(let index=0; index < str.length; index++){
        if(str.charAt(index)!=' '){
              newStr+=str[index]
        }
    }

    return newStr;

}

console.log(removeSpace(str1))