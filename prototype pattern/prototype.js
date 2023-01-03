class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "woof";
  }
}

const dog = new Dog("Rex");
console.log(Dog.prototype);
console.log(dog.__proto__);
