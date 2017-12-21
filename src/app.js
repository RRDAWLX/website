import './app.css';

class A {
  constructor() {
    this.name = 'A';
  }
}


export default function app() {
  let a = new A();
  let set = new Set([1, 2, 3]);
  console.log(a);
  console.log(set);
}