// objects in javascript
// simple defining the object and use it using variables

const Person = {
    name: 'uzair',
    age: '18',
    isMarry: false,
};

const name = Person.name;
const age = Person.age;
const isMarry = Person.isMarry;

// access the objects by using destructuring property of objects
const {name1, age1, isMarry1} = Person;

// passing variables or values in object by this method
const name2 = 'uzair';
const age2 = '19'

const Person2 = {
    name2,
    age2,
};

// use of Spread Syntax or Spread Operator

const Person3 = {...Person, name: "ali"}