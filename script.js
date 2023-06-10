// Good Luck 💪🏾

function findSeven(values){

    

    for(let i = 0; i < values.length; i++){
        if(values[i] == 7){
            console.log("number 7 Found")
        }if (values[i] != 7){
            console.log("there is no number 7")
        }
    }
}

const numbers = [1,2,3,4,9,0]
findSeven(numbers)