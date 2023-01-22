class Animal{
    constructor(){
        var __name;
        var age
    }
    getName(){
        console.log(this.__name)
    }
    setName(name){
        this.name = name
    }
}

let a = new Animal()
a.getName()
a.setName('Soham')

a.getName()
