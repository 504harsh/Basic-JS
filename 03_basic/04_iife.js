// Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();


//globle scope ke polutionse problem hoti hai kai baar to bhi globle scope ke variable 
// hai ya jo bhio declaretion hai usko hatane ke liya iife ka use krte hai 


//simple iife/ unorder iife
( (name) => {
    console.log(`DB Connected Two ${name}`);
    
})('Harsh');