,,, pi,o, e,fu, c (piw efak)

# 🚀 JavaScript from First Principles (The Raw Path)

A roadmap to understand JavaScript at the deepest level — not just what works, but **why** and **how** it works,  
like geometry from points to theorems.

---

## 🗂️ Outline & Topics

### 🔹 Part 1: The Atoms of JavaScript (Primitives)

- 💡 What is a programming language?
- 🔍 Values vs References
- 📦 Primitives:
  - `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- 🧪 Type checking: `typeof`, `instanceof`
- ⚖ Equality: `==` vs `===` (type coercion rules)
- 🎁 Boxing: why `"hello".toUpperCase()` works if strings are primitives

## chatgpt primitives learning: https://chatgpt.com/share/68ddfa63-0eec-800c-ada1-fce45ae7255e

### 🔹 Part 2: Objects — The Foundation Shape

- 🌐 Everything is an object (except primitives)
- 🛠 Properties & descriptors (`Object.defineProperty`)
- 🧬 Prototype chain (`__proto__` and `.prototype`)
- 📚 Built-in objects: `Object`, `Array`, `Function`, `Date`
- 🔄 Difference between `Array` and plain `{}`
- 📋 Enumerating & copying objects (shallow vs deep clone)

---

### 🔹 Part 3: Execution Context & Scope

- ⚙ How JavaScript code runs (Creation Phase → Execution Phase)
- 📜 The Call Stack
- 🌍 Global scope vs function scope vs block scope
- 🚀 Hoisting (`var`, `let`, `const`, function declarations)
- 🧠 Lexical scope (how JS “remembers” where variables are defined)

---

### 🔹 Part 4: Functions & Closures

- 🧩 Functions are objects
- 🎯 First-class functions (can be passed, returned, stored)
- 🔒 Closures: inner function + remembered scope
- 🔄 The `this` keyword: implicit, explicit, default, arrow functions
- 🔧 Re-implementing `bind`, `call`, and `apply`

---

### 🔹 Part 5: Classes & Inheritance

- 🏗 ES6 `class` syntax vs constructor functions
- 🌱 How inheritance works via prototypes
- 📌 Static methods vs instance methods
- 📦 Built-in classes: `Error`, `Array`, `Promise`, etc.
- ✨ Custom class design

---

### 🔹 Part 6: Errors & Exception Handling

- 🚨 `throw`, `try`, `catch`, `finally`
- 📚 The `Error` class hierarchy (`TypeError`, `RangeError`, `SyntaxError`)
- 🛠 Custom errors
- 🔄 Error handling in synchronous vs asynchronous code

---

### 🔹 Part 7: Asynchronous JavaScript

- ⏳ The Event Loop (call stack, task queue, microtask queue)
- 🕒 `setTimeout`, `setInterval`, `process.nextTick`, `queueMicrotask`
- 🔗 Promises:
  - Constructor (`new Promise`)
  - States: pending → fulfilled/rejected
  - Chaining (`then`, `catch`, `finally`)
  - Static helpers (`Promise.all`, `Promise.race`, `Promise.any`)
- 🚀 `async/await` (sugar over promises)

---

### 🔹 Part 8: Advanced Language Mechanics

- 🔄 Coercion & conversions (`toString`, `valueOf`, `Symbol.toPrimitive`)
- 🔁 Iterators & Generators (`function*`, `yield`)
- 🆔 Symbols & well-known symbols (`Symbol.iterator`)
- 📦 Modules (CommonJS vs ES Modules)
- ⚙ `this` in modules and strict mode

---

### 🔹 Part 9: Under the Hood

- 🧠 How JS engines (V8, SpiderMonkey) work
- 📜 Parsing → Compilation → Execution
- ⚡ JIT (Just-In-Time compilation)
- 🗑 Garbage collection (mark & sweep, memory leaks)
- 🕵 Hidden classes & inline caching

---

### 🔹 Part 10: Building from Scratch (Practice)

Re-implement core parts of JS to solidify knowledge:

- 🛠 `Array.map`, `Array.filter`, `Array.reduce`
- 🔧 Custom `bind`, `call`, `apply`
- 🔄 Custom Promise (mini implementation)
- 📡 Event emitter pattern
- ⏱ Debounce & Throttle functions

---

✨ **Tip:** Follow this roadmap step-by-step, mastering each part before moving to the next.  
By the end, you’ll not just use JavaScript — you’ll understand it from its atomic foundation to its most advanced mechanics.
