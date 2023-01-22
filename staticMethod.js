class University {
    constructor(name , city)
    {
        this.name = name;
        this.city = city; 
    }
    sayName(){
        console.log("This is "+this.name+" University in "+this.city+" city")
    }
    static help(){
        console.log("This is university class having sayName method")
    }
}

let u1 = new University('Solapur University','Solapur')
console.log(u1.name)
console.log(u1.city)
u1.sayName()
University.help()
