//
const typeChecker = (input) => {
  return typeof input;
};

const string = typeChecker("string");
console.log(string, "[1;31mstring in typeCheckher.js at line 13[0m");

const number = typeChecker(39);
console.log(number, "[1;31mnumber in typeCheckher.js at line 10[0m");

const boolean = typeChecker(true);
console.log(boolean, "[1;31mboolean in typeCheckher.js at line 7[0m");

const Null = typeChecker(null);
console.log(Null, "[1;31mNull in typeCheckher.js at line 16[0m"); // js historical bug
let undef;

const Undefined = typeChecker(undef);
console.log(Undefined, "[1;31mUndefined in typeCheckher.js at line 20[0m");

console.log(1 + "2");
console.log(true + 1);
console.log(null + 1);
