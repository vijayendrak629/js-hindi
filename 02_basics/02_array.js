const realHeros = ["Shaktiman", "spiderman", "batman"];
const superHeros = ["Jackie", "JuniorG"];


// realHeros.push(superHeros);
// console.log(realHeros);

// const allNewHeros = realHeros.concat(superHeros);
// console.log(allNewHeros);

// const allHeros = [...realHeros, ...superHeros];
// console.log(allHeros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
// console.log(another_array);

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Vijay"));
console.log(Array.from("Vijay"));
console.log(Array.from({name : "Vijay"}));    //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

console.log(Array.isArray(1,2,3));
