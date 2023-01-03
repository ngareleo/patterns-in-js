const person = {
  name: "Leo",
  age: 20,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    // console.log(`The property of ${prop} is ${obj[prop]}`);
    // now using the Reflect pattern instead
    console.log(`The propery of ${prop} is ${Reflect.get(obj, prop)}`);
  },

  set: (obj, prop, value) => {
    // console.log(`Setting value of ${prop} from ${obj[prop]} to ${value}`);
    // obj[prop] = value;
    // now using the Reflect pattern instead
    console.log(`The propery of ${prop} is ${Reflect.get(obj, prop)}`);
    Reflect.set(obj, prop, value);
    return true;
  },
});

personProxy.name;
personProxy.age = 23;

console.log(person.age);
