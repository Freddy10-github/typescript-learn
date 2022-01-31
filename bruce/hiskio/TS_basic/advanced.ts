// type

let num1: number;
let something: string | number | boolean;
let something2: string | number | boolean;

type product = string | number | boolean;

let car: product;

// object with type

type OBJ = {name:string, age?:number};

let obj1: OBJ;

//interface

interface UserCard {
  name: string,
  desc: string
}

const userCard: UserCard ={
  name : "opa",
  desc: 'is a cat'
}

// deferent between type and interface

// type 擴充
// type Animal = {
//   name: string
// }

// type Dog = Animal & {
//   age: number
// }

// type Cat = Animal

// const dog:Dog ={
//   name: 'happy',
//   age: 14
// }

// const cat: Cat = {
//   name: 'OPA'
// }

// interface 擴充

interface Animal{
  name: string
}

interface Dog extends Animal {}

// interface 合併
// 同樣名稱的 interface 會自動合併

interface Animal {
  age: number
}

let dog:Dog = {
  name: 'happy'
}


// enum

enum LiveStatus {
  'streaming' = 0,
  'closed' = 1,
  'mutiple' = 2
}

if (status === LiveStatus.streaming){
  console.log('Live')
}