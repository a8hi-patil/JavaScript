let  p =  new Promise((res, rej)=>{
    if(1==2){
        res(true)
    }else{
        rej(false)
    }
})

p.then((a)=>{
    console.log('first then')
},()=>{console.log('middle')}).catch((a)=>{
    console.log('catch')
})
