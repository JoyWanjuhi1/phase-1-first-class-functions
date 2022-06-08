function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
     return namedFunction;
}
function namedFunction(){
    console.log("")

}
function returnsAnAnonymousFunction(){
    return function (){
    console.log("")

    }
    
}

