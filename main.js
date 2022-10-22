// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! 
// You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
        // let str = 123;
        // let numToString = str.toString();
        // String(str)
        // str+''

let inputNum = document.getElementById('num');
const btn1 = document.getElementById('btn1');
const output = document.getElementById('outputToString');
let inputValue = inputNum.value;

const outputToString = (number) => {
  console.log(typeof inputValue);
  console.log('inputValue', inputNum.value);
  let numToString = number.toString()
  console.log(typeof numToString)
  output.innerHTML = `${inputNum.value} has been converted to string.`
} 
btn1.addEventListener('click', outputToString);


// Write a JavaScript program to convert a string to the number.
let str2 = "612";
console.log(parseInt(str2));
// console.log(typeof Number(quantity));


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  let sunny = true;
  console.log(sunny);
  // * Null
  let text = null;
  console.log(text);
  // * Undefined
   let c;
   console.log(c);
  // * Number
  let days = 7;
  console.log(days)
  // * NaN
  let text1 = ('A' / 2);
  console.log(text1);
  // * String
  let str1 = 123;
  console.log(str1.toString());
  

  
// Write a JavaScript program that adds 2 numbers together.
function add() {
  let a = parseInt(document.getElementById("firstNum").value);
  let b = parseInt(document.getElementById("secondNum").value);
  console.log(sum(a, b));
  result = document.getElementById('result');
  result.insertAdjacentHTML('afterBegin',`
  <div id="result">result: ${sum(a,b)}</div> 
  `)
}
const sum = (num1, num2) => num1 + num2;
// console.log(sum(6,22));

// Write a JavaScript program that runs only when 2 things are true.
   // && operator runs when 2 things are true.
const age = 21;
const work = true;
if ( age > 18 && work){
  console.log("You're over 18 and working.")
} else {
  console.log("You're under 18.")
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const sunday = false;
let rest;
rest = sunday === true ? 'rest' : 'no rest';
console.log(rest);



// Write a JavaScript program that runs when both things are not true.  
const age1 = 18;
const work1 = true;
if ( age1 > 18 && work1 !== true){
  console.log("You're over 18 and working.")
} else {
  console.log("You're under 18.")
}




// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
