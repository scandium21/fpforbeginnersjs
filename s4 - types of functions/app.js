// -------------------------------------------------------
// 16. Introduction to Currying
// function greet(greeting) {//, name) {
//     return function (name) {
//         return `${greeting} ${name}`;
//     }
// }

// using Ramda library
const greet = R.curry((greeting, name) => `${greeting} ${name}`);

console.log(greet('Good day')('SC'));

const friends = ['Monica', 'Rachel', 'Phoebe', 'Chandler', 'Ross', 'Joey'];

console.log(friends.map(greet('Hawdy')));
// friends.map(() => { return `${greeting} ${name}`})
// ['Monica 0', 'Rachel 1', 'Phoebe 2', 'Chandler 3', 'Ross 4', 'Joey 5']

const friendGreetings = friends.map(greet);

// ------------------------------------------------------------
// exercise fp7
// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
];

const message = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good', 
};

function letterGrade(grade) {
    if (grade >= 90) {
        return 'a';
    } else if (grade >= 80) {
        return 'b';
    } else if (grade >= 70) {
        return 'c';
    } else if (grade >= 60) {
        return 'd';
    } else {
        return 'e';
    }
}
function giveFeedback(message) {
    return function (student) {
        const grade = letterGrade(student.grade);
        return `${message[grade]} ${student.name}, you got an ${grade}`;
    }
}


const studentFeedback = studentGrades.map(giveFeedback(message));

console.log(studentFeedback);
/*
const studentFeedback = [
'Nice Job Joe, you got an b',
'Excellent Job Jen, you got an a',
'Well done Steph, you got an c',
'What happened Allen, you got an d',
'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console


// ------------------------------------------------------------
// 17. Currying and Partial Application

// ------------------------------------------------------------
// 18. Pure Functions

// impure function example
let counter = 0;

// this function should be considered a procedure, not a function
function increment() {
    couter++;
}

// ----------------------------------------------------------------------
// 19. Function Composition 
// using ramda
const sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, praesentium!'

const wordList = R.split(' ', sentence);
const wordCount = R.length(wordList);
console.log(wordCount, wordList);
const countWords = R.compose(R.length,R.split);
console.log(countWords(' ', sentence));

const countWords2 = R.compose(R.length,R.split(' '));
console.log('countWords2', countWords2(sentence));

const countWords3 = R.pipe(R.split(' '),R.length);
console.log('countWords3', countWords3(sentence));
// ------------------------------------------------------------
// exercise fp7
// Count how many digits there are in the following 
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console

const sentence2 = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// Hints:
// 1. transform the string into a list of individual characters 
// 2. attempt to transform the individual characters into integers 
// 3. filter the list to only include integers 
// 4. find the length of the list of numbers

const numbersInString = R.pipe(
    R.split(''),
    R.map((item)=> parseInt(item) ), 
    R.filter((item)=> !Object.is(item, NaN) ),
    R.length
);

// Answer
const numbersInStringAnswer = R.pipe(
    R.split(''),
    R.map(parseInt),
    R.filter(Number.isInteger),
    R.length,
    );

//expect(numbersInString(sentence2)).toBe(7); 
console.log(numbersInString(sentence2));
console.log('If you see this printed in the console, the test passed!');