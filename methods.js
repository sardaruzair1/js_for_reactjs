// important methods of function used for react js mostly and its to important to know that

// .map()
// .filter()
// .reduce()

// map method
// access elements of array using map method
const names = ['uzair', 'jamil', 'shehzad', 'okasha'];

names.map((name) =>{
    console.log(name);
});

// editing in the elements of an array using map

const Names = ['uzair', 'jamil', 'shehzad', 'okasha'];

Names.map((names) => {
    return names + '1';
});

// display array element in h1 tag

const Names1 = ['uzair', 'jamil', 'shehzad', 'okasha'];

Names1.map((names1) => {
    return <h1> {names1} </h1> ;
});

// filter method
// access elements of array using filter method
const persons = ['uzair','jamil','sardar','okasha']
persons.filter((person)=>{
    console.log(person);
});

// filtering in the elements of an array using filter
const Persons = ['uzair','jamil','sardar','okasha']
persons.filter((Person)=>{
    return console.log(Person !== "uzair")
});