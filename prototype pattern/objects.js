var stooge = {
  name: "Dennis",
};

var x = stooge; // x now points to stooge
x.name = "Daniel";
console.log(stooge.name);

// To increase performance, JS doesn't copy objects but rather references an object

if (typeof Object.create !== "function") {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

let stoogeA = Object.create(stooge);
console.log(`stoogeA.name ${stoogeA.name}`);

let stoogeB = Object.create(stooge);

stoogeB.name = "Deniele";
console.log(`stoogeB.name ${stoogeB.name}`);

// the prototype relationship is a dynamic relationship.
// If we add a new property to a prototype, that property will immediately be visible in all of the objects

stooge.lastname = "Micheal";
console.log(`stoogeB.lastname ${stoogeB.lastname}`);
