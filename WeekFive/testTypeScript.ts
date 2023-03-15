let x: string = "GoodBye";
x = "Hello"
//x != 3
x = "3";

let y: number;
y = 3;

if(x == y.toString()){
    console.log(`${x} is x ${y} is y`);
}

export interface Todo {
    name: string;
    category: string;
    id: number;
    completed: boolean;
}

let newTodo: Todo = {
    name: "something",
    category: "something else",
    id: 4,
    completed: false,
};


interface Shape {
    x: number; // This must be set for all shapes
    y?: number; //the ? means that a value isn't required to be set
    color: string;
    getArea(): number;
  }
  
  class Circle implements Shape { // 'implements' is to ensure that a class uses a specific interface
    x: number;                    // 'extends' is used to create a subclass that inherits from a parent class
    y: number;
    color: string;
    radius: number;
  
    constructor(x: number, y: number, color: string, radius: number) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

 export interface person {
    firstName: string;
    lastName: string;
    age: number;
    height: number;
    hobbies: Array<String>;
}

let mark: person = {
    firstName: "mark",
    lastName: "helburg",
    age: 22,
    height: 6,
    hobbies: ["reading", "writting", "skiing"],
}