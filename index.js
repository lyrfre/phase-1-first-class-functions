function receivesAFunction(callback){
    return callback()
}

function namedFunc()
{
    return
}
function returnsANamedFunction(){
    return namedFunc
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("the girl has no name.")
    }
}

