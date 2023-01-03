// Singletons are classes which can be instantiated once, and can be accessed globally
// Single instance can be shared throughout our application.
// Handy for handling global state in an application

let counter = 0;
let instance;
// using classes
class Counter {
  constructor() {
    if (instance) {
      throw new Error("Cannot multiple instances of counter");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

//using prototype

const singletonCounter = new Counter();

// const counter2 = new Counter(); Error cannot create multiple instances

console.log(singletonCounter.increment());
console.log(singletonCounter.increment());

singletonCounter.read = () => {
  console.log(counter);
};

const read = () => {
  console.log(counter);
};

console.log(singletonCounter.read());
read();
