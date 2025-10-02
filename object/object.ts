//
let obj: any = {};
Object.defineProperty(obj, "name", {
  value: "Shahjalal",
  writable: false,
  enumerable: true,
  configurable: true,
});

obj.age = "New Name"; // won't change because writable: false
console.log("shah"); // "Shahjalal"
