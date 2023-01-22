function logData(data){ 
    console.log(data);
}

let prom = new Promise(function( success, fail,d){
    let x = 1;
    if( x!==1){
        success("Success")
    }else{
        fail("Failed")
    }
})

prom.then(
    function(value){logData(value)}
    ).catch(function(error){logData(error)})
