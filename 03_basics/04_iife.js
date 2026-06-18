// Immediately Invoked Function Expressions (IIFE)
/* immediately execute ho jaye 
    global scope ke pollution se problem hoti hai kaafi baar to usse bachne ke liye we use this
*/
(function chai(){ //named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('phugga')
