// primitive types

    // string
    let first_name:string="sanjay";
    // number
    let age:number=21;
    // boolean
    let isMarried:boolean=true;

    // void : Using this type it tells the function is not returning anything,and also we can return undefined using void;
    function voidFun():void{
        console.log("Not returning");
        return undefined;
    }
    console.log(voidFun())

    // null : the value is absent
    // undefined : the value is uninitialized
    function nullFun(x:string | null){
        if(x==null){
            // do nothing
        }else{
            // do something
        }
    }
    nullFun(null)

// object types

    // interfaces
        // used to specify types of an object;

        interface obj1{
            name:string;
            age:number;
        }
        function interfaceFun(obj1:obj1){
            return obj1
        }
        interfaceFun({name:"sanjay v",age:22})
    
    // class
        // It is a blueprint for creating object

        class Person{
            name:string;
            age:number;
            constructor(name:string,age:number){
                this.name=name;
                this.age=age
            }

        }
        let User=new Person("sanjay v",21);

    // enum
        // It is used to create or define a set of constants values that can be used later

        enum ParkingTicketCost{
            car=50,
            bike=20,
            truck=100,
            cycle=10
        }
        const carValue = ParkingTicketCost.car; // to access car value
        console.log(carValue); 
    
    // Array
      let arr:number[]=[1,2,3]; // array of numbers
      let arr2:string[]=["one","two","three"]; // array of strings

    // tuples

        // It is an another type of array it exactly knows how many elements in the array

        type tuples=[number,string];

        let pair:tuples=[1,"one"];
        
                // or 

        let pair2:[number,string]=[1,"one"];


// other types

        //any
          let pair3:any=[1,"one"];
          let pair4:any={name:"sanjay"};

        // alternate of interfaces
        function fun3(obj:{a:number,b:string}){

        }
        fun3({a:1,b:"one"})

        // unknown

            /// it does not allows to access property or methods without types checking

            // function f2(a: unknown) {
            //     if (typeof a === 'object' && a !== null && 'b' in a) {
            //       a.b(); // Type checking is now satisfied
            //     }
            //   }
              
            //   f2(2);
    
// combining types

        // type union

            type strOrnum=string|number;
            let value:strOrnum=22;

        // type intersection

            //used to combine two or more types in to a single types

            interface A{
                name:string
            }
            interface B{
                age:number
            }
            type AB=A & B;

            let value2:AB={name:"sanjay V",age:22};

        // type Aliases

            type Name=string;
            type Age=number;

            type User2={name:Name,age:Age};

            let value3:User2={name:"sanjay",age:22}

        // keys of operators

            interface Userkey{
                name:string,
                age:number
            }

            type UserKey=keyof Userkey; // gets all the key of Userkey in union  name | age

            let user3:UserKey="age"

// Type Guards / narrowing

        // Equality (===,!==,==,!=)
        // Truthiness (&&,||,!)
        // type predicates ??

// Typescript Functions
        // allows you to tell the return type value in function
    //typing functions

        function fun4(a:number,b:number):number{
            return a+b
        }
        fun4(1,2)
        
    // function overloading

        //declaring 2 or more function with same but with different parameters type or return type
        
        function add(a:number,b:number):number;
        function add(a:string,b:string):string;
        function add(a:any,b:any):any{
            return a+b;
        }

        let ans=add(1,2);
        console.log(ans)

// TypeScript Interfaces

        // Extending interfaces

            interface one{
                name:string;
                getName:()=>string;
            }
            interface two extends one{
                age:number
            }

            let User3:two={
                name:"sanjay v",
                age:21,
                getName() {
                    return this.name
                },
            }

        // hybrid type
            type hybrid1={
                school:string;
                college:string;
                location:string
            }

            type hybrid2={
                name:string;
                age:number;
                education:hybrid1
            }

// classes
    
    //constructor params
            
            class Example{
                constructor(private name:string,public age:number){
                    this.name=name;
                    this.age=age
                }
                sayName(){
                    console.log(`${this.name}`)
                }
                sayAge(){
                    console.log(`${this.age}`)
                }
            }
            // in the above class name can only be accessed only in the class
            // where as age can be accessed outside of the class

            console.log(new Example("sanjay v",22).sayName()) // can be accessed
            // console.log(new Example("sanjay v",22).name) // cannot be accessed
    
    // constructor overloading

    class Point {
        // Overloads
        constructor(x: number, y: string);
        constructor(s: string);
        constructor(xs: any, y?: any) {
          // TBD
        }
      }
      const point1 = new Point(10, "20"); // Calls the first overload
      const point2 = new Point("30");     // Calls the second overload
    
    // Access Modifiers

    // public - Its properties and methods can be accessed from outside or inside of the class
    // private - Its properties and methods can only be accessed from inside of the function
    // protected - Its properties and methods can be accessed by the class and its subclassess,but are not accessable outside of its class and subclasses

    // Abstract classes

    abstract class Animal {
        name: string;
      
        constructor(name: string) {
          this.name = name;
        }
      
        abstract makeSound(): void; // Abstract method
      
        move(distance: number) {
          console.log(`${this.name} moves ${distance} meters.`);
        }
      }
      
      class Dog extends Animal {
        makeSound() {
          console.log("Dog barks.");
        }
      }

      const dog = new Dog("Buddy");
      dog.makeSound(); // Output: "Dog barks."
      dog.move(10);    // Output: "Buddy moves 10 meters."

    // method overriding

    // class Animal {
    //     makeSound(): void {
    //       console.log('Making animal sound');
    //     }
    //   }
      
    //   class Dog extends Animal {
    //     makeSound(): void {
    //       console.log('Bark');
    //     }
    //   }
      
    //   class Cat extends Animal {
    //     makeSound(): void {
    //       console.log('Meow');
    //     }
    //   }
      
    //   let animal: Animal;
      
    //   animal = new Dog();
    //   animal.makeSound(); // Output: Bark
      
    //   animal = new Cat();
    //   animal.makeSound(); // Output: Meow

// Generics

      function generics<T>(name:T):T{
        console.log(name);
        return name;
      }
      generics<string>("sanjay");


