function increment(x){
    return new Promise( (resolve, reject) => {
        setTimeout( () => resolve(x+1), 2000);
    });
}

const result = increment(42);

result
    .then( x => {console.log(x); return increment(x);} )
    .then( x => {console.log(x); return increment(x);} )
    .then( x => {console.log(x); }  )
    .catch( console.error );
