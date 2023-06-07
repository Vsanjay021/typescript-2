//types vs interfaces

// types is used for static type checking during development
// interfaces can inherit the types of other interface
// multiple interfaces can be written using interface

// type Person={
//     name:string;
//     age:number;
// }

// interface Person{
//     name:string;
//     age:number
// }
// interface Person extends Qualification{
//     place:string
// }
// interface Qualification{
//     highest:string
// }
// const person:Person={
//     name:"Sanjay v",
//     age:22,
//     place:"Bengaluru",
//     highest:"B.E"
// }


// hybrid types

    type Education ={
        degree:string;
        school:string;
        year:number
    }

    type User={
        name:string;
        age:number;
        email:string;
        education:Education
    }


    let user:User={
        name:"sanjay v",
        age:21,
        email:"vsanjay8722@gmail.com",
        education:{
            degree:"CS",
            school:"RIS",
            year:2022
        }
    }

// generic types
    function generic<T>(value:T):T{
        return value
    }
    let res=generic<number>(10);
    console.log(res);

    type Person_1<T>={
        name:T
    }
    let obj:Person_1<string>={
        name:"sanjay"
    }
    console.log(obj)

//  generic constraints
    // it allows to add requirements to the function paramerters
 interface length{
    length:number
 }

 function genericConstraints<T extends length>(len:T):T{
    console.log(len)
    return len;
 }
 genericConstraints({length:3})


 // classes

//    It is blueprint for creating objects

    // class Person{
    //     name:string
    //     constructor(name:string){
    //         this.name=name;
    //     }

    //     get sayName():undefined{
    //         console.log(`my name is ${this.name}`);
    //         return undefined;
    //     }
    // }
    // let newuser=new Person("sanjay");
    // newuser.sayName;
    
//  constructor params
    // access modifiers
        // public
        // private
        // protected

    //public
        // can be accessed outside of the class
    // private 
        // It can only be accessed by that class only
    // class Person{
    //     private  name:string
    //     constructor(name:string){
    //         this.name=name;
    //     }

    //      public get sayName():undefined{
    //         console.log(`my name is ${this.name}`);
    //         return undefined;
    //     }
    // }
    // let newuser=new Person("sanjay");

    // console.log(newuser);
    // // console.log(newuser.name) cannot access the property name
    // newuser.sayName;

    // protected

        // can access the property by classes and other subclasses that is used with extends