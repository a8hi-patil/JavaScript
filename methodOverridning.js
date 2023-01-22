class Parent{
    constructor (name){
        this.name= name;
    }
    sayName(){
        console.log("Parent Name is ",this.name)
    }
}

class Child extends Parent{
    constructor(name,age){
        super(name);
        this.age= age
    }
     sayName(){
    //     super.sayName()
         console.log("Child Name is ",this.name)
     }
}
let child = new Child('Abhi',25)
// let parent = new Parent('Abhi',25)
// parent.sayName()
child.sayName()
