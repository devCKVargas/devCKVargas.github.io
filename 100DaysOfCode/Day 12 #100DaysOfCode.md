DAY 12 #100DaysOfCode #MorningCode
I went back to some fundamentals because learning is not linear😉

Title: How JavaScript works under the hood
📖 New Knowledge
• The Call Stack
• Scope chain
➥Block scope
➥Function scope
• Variable Environment
    ➥Hoisting
    ➥Temporal Dead Zone (TDZ)
• window object
• "var" will create property in global window object
• this keyword
• this keyword/variable
    ➥this keyword's value is not static & only assigned when it is called
    ➥use: this.property instead of: object.property
    ➥⚠️lexical this: arrow functions do not get own this keyword, it uses this of surrounding functions
    ➥this in event listener uses the handler's DOM element
    ➥does NOT point to the function itself & NOT its variable environment
👨‍🏫 Good to know!
• use strict mode
• Undefined & 0 is a falsy value
• Declare variables at top of the scope. Make it clean!
• Always declare functions first expection: function declaration

DAY 12 #100DaysOfCode
#AfternoonCode
•Primitive vs Object data
    ➥Primitive vs Reference types
    ➥Copying objects (shallow copy)
•Destructuring Arrays
    ➥Conventional way
    ➥ES6 way
    