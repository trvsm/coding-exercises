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
To avoid: 
1) Object with no prototype: Object.create(null) this has limitations if you want objects as keys, eg linked list
2) Built in Map class: let ages = new Map(); Map.set: add (key, value) pair, Map.get(key): return associated value, Map.(has): return boolean, true if key exists in Map

3) Object.keys ignores prototypal keys, Object.hasOwnProperty() ignores prototypal property.

Polymorphism: writing a method to match a certain interface; then when any object matching the interface is passed as arg, it will work.

Symbols: It is possible for multiple interfaces to use the same property name.  Text has covered .toString methods with different functionality.
Property names are usually strings but can also be symbols; each new Symbol is unique

It is possible to include symbol properties in classes & object expressions:
let stringObject = { [toStringSymbol](){return "a piece of twine";}}
above the property have is evaluated, like square bracket property access. A bingin that holds the symbol

Iterator interface: Symbol.iterator: returns an object with interface *iterator*
*iterator*: has .next method that returns next result > result has value prop(to feed to next <next>) and done prop (boolean that's true when next result returns no value)

Getters & Setters: discrete properties like size may hide a method call; see Temperature class below
Temperature allows to read & write in Celsius or Farenheit, internally stores Celsius & converts

Static: sometimes properties in constructor rather than prototype; provide ways to create instances
eg temperature allows Temperature.fromFarenheit() to create a temp using degrees Farenheit.

Inheritance: <subclass> extends superclass{} this supports making a new class like old class but new defs on some properties.
constructor calls superclass's constructor via super keyword
super.set calls the method from super, rather than constructor.
this.set would refer to subclass method.
**inheritance is more controversial in OOP; encapsulation & polymorphism help separate code, inheritance tangles it. **

instanceof operator: looks through inherited types eg Array is an instance of Array and Object.  Can also check defined classes

 */

// Implementing an iterable data structure:
class Matrix {
    constructor(width, height, element =(x, y)=>undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y =0; y <height; y++){
            for(let x= 0; x < width; x++){
                this.content[y*width+x]= element(x, y)
            }
        }
    }
    get(x, y){
        return this.content[y* this.width+x];
    }
    set(x, y, value){
        this.content[y* this.width + x] = value;
    }
}

// Stores content in a single array of width*height elements
// Constructor takes width, height and optional element function to fill initial values
// .get & .set methods retrieve & update elements in the matrix

// Looping over matrix usually position & elements matter.
// design iterator with x, y, and value properties

class MatrixIterator {
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        if(this.y === this.matrix.height) return {done: true};
// if the bottom of the matrix has not been reached then create obj with val, then update position
        let value = {x: this.x,
        y: this.y,
    value: this.matrix.get(this.x, this.y)};
    this.x++;
    if(this.x === this.matrix.width){
        this.x = 0;
        this.y++;
    }
    return {value, done: false}
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}
// can now loop over a matrix with for/of:
let matrix = new Matrix(2,2, (x,y)=>`value ${x},${y}`);
for(let{x,y,value} of matrix){
    console.log(x,y, value);
}

//Inheritance:
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y)=> undefined){
        super(size, size, (x,y)=>{
            if(x<y)return element(y, x);
            else return element(x,y);
        });
            }
            set(x,y, value){
                super.set(x,y, value);
                if(x != y){
                    super.set(y,x,value);
                }
            }
}

// Getters & Setters
class Temperature{
    constructor(celsius){
        this.celsius = celsius
    }
    get farenheit(){
        return this.celsius * 1.8 + 32;
    }
    set farenheit(value){
        this.celsius = value(value-32)/1.8;
    }

    static fromFarenheit(value){
        return new Temperature((value - 32)/1.8);
    }
}

/* Exercises */

//Vector type: write a class Vec that represents a vector in 2D space.  Takes numbers x & y as params, should have props by same name.

//Give Vec two methods: plus & minus that take another vector as param, return new vector that has sum of diff of two vectors x & y(eg <this.x> & param.x)

//add a getter prop, <length>, that computes length of vector (point (x,y) from (0,0)) (absolute for x, y, x^2 + y^2 = length^2)

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        //sum vectors: this.x + vector.x
       return new Vec((this.x+vector.x), (this.y+vector.y))
    }
    minus(vector){
      return  new Vec((this.x-vector.x),(this.y-vector.y))
        //diff of vectors: this.x - vector.x
    }
    get length(){
        let hor = Math.abs(this.x);
        let ver = Math.abs(this.y);
        return (Math.sqrt(hor*hor+ ver*ver));
    }
}

console.log(new Vec(1,2).plus(new Vec(2,3)));