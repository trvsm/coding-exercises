/*
Chapter 6: Objects
OOP: programs divided into pieces, each piece manages own state (encapsulation)
OOP properties: interface of an object specifies which properties the program works on "public". Some languages specify "private" properties, not edited.
Writing a property starting with "_" is a convention to specify private

function.call takes <this> as first arg.  When function called as method <this> points at object it was called on.

each function declaration has its own <this> scope
arrow functions do not bind <this> but can see surrounding <this> scope.

prototypes ~ an take on classes.
instance of class: call constructor function; derives from protoype, has requisite properties
new keyword achieves thes the same
eg function Rabbit(type){this.type = type;}
Rabbit.prototype.speak = function(line){console.log(`The ${this.type} rabbit says '${line}'`);};
above sets up a Rabbit prototype, then adds the .speak method

prototype of a constructor his Function: Object.getPrototypeOf(Rabbit) == Function.prototype
prototype property holds the prototype used to create instances: Rabbit.prototype = clas Rabbit constructor(type){this.type = type;} speak(line){console.log(`The ${this.type} rabbit says '${line}'`);}}

class keyword starts class declaration, defining constructor & methods at once.
class declaration only allows methods; properties holding functions.  If you want to store a non-fn prop manipulate protoype directly.

When properties are added to an object, an instance, they will mask prototypal properties if they exist.

Maps Data structure: associates values (object keys) with other values.
Be careful: since regular objects derive from Object.prototype all prototype properties "appear" in objects, eg 'toString' in myObj === true
 */