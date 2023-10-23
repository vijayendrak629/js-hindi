

function sayMyNAme() {

    console.log("V");
    console.log("I");
    console.log("J");
    console.log("A");
    console.log("Y");
}

//sayMyNAme();

// function addTwoNumbers(Number1, Number2) {
//     console.log(Number1 + Number2); 
    
// }

function addTwoNumbers(Number1, Number2) {
    // let result = Number1 + Number2; 
    // return result;
    return Number1 + Number2
    
}

const result = addTwoNumbers(3,4);

// console.log("Result:", result);

function loginUserMessage(username = "Sam") {
    if(!username){
        console.log("Please enter valid username");
    }else{
        return `${username} Just LoggenIn`;
    }
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Vijay"));

