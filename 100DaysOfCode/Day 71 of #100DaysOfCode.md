# Day 71 of #100DaysOfCode

## Day 4 - META Programing with JS

### re-Introduction to objects

key value pairs
Variable = property KEY
value = property VALUE

Adding key value-pairs using dot notation

```js
let storeManager = {};
storeManager.health = 100;
storeManager.money = 999;
storeManager.skill = 50;
```

output:

```js
storeManager: {
 health: 100,
 money: 999,
 skills: 50
}
```

### Object Methods

```js
let car = {
 color: "red",
 turnKey() {
  console.log("engine running");
 },
};
```

```js
car.turnKey(); // engine running
```

## ✍ **Note**

**function** of an object == **method**.
**key-value pairs** of an object == **properties**

* I've been doin knowledge checks on MDN and META
