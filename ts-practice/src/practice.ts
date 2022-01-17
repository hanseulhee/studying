// const message: string = "Hello World"
// console.log(message)

// let count = 0;
// count +=1;

// const done: boolean = true;

// const numbers: number[] = [1, 2, 3]

// const text: string[] = ["hello", "bye"];

// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;

// let color: "red" | "orange" | "yellow" = "red";

// color = "red";


// function sum(x: number, y: number): number {
//     return x+y;
// }

// sum(1, 2)

// function sumArray(numbers: number[]): number {
//     return numbers.reduce((acc, current) => acc + current , 0)
// }

// const total = sumArray([1, 2, 3, 4, 5])

// function returnNothing(): void{
//     console.log("I'am just saying Hi")
// }

interface Person {
    name: string;
    age?: number;
  }
  interface Developer extends Person {
    skills: string[];
  }
  
  const person: Person = {
    name: '슬희',
    age: 20
  };
  
  const expert: Developer = {
    name: '희슬',
    skills: ['javascript', 'react']
  };
  
  const people: Person[] = [person, expert];