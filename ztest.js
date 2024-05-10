// What is callback and why we use callback and how to write callback function ?
/*
* callback is a function that go with a function argument, and call or return this function
* */

// example

/*function foo(callback){
    console.log('that is foo function');
    callback();
}
function callbackFun(){
    console.log('this is callback function');
}

foo(callbackFun);*/



// program that shows the delay in execution
/*
function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');*/

// What is promise, how to write promise


// Promise is an object that gives you a single value. Promise has 3 possible states
//       1. Fulfilled: That is the state of success promise,
//       2. Rejected: That is the state of a failed promise.
//       3. Pending: That is the default state of promise.
/*
const promise = new Promise((resolve, reject) => {
    const num = Math.random()
    console.log(num);
    if (num >= 0.5) {
        resolve("Promise is fulfilled!")
    } else {
        reject("Promise failed!")
    }
});

promise.then((res)=> console.log(res) , (err)=> console.log(err))
*/

// Q: What is async await in JavaScript ? Why use async await ?
// Ans: That is the way to transfer JavaScript function into an asynchronous function, and this function return a Promise.
// and await use inside an async function to pause its execution and wait for a Promise to resolve before continuing.
// Example 1: simple async
// async function foo() {
//     console.log('This is foo function');
// }
// foo();

// Example 2: Wait for promise result

