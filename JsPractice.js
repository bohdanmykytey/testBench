// VERY EASY

// Write a function that takes an integer minutes and converts it to seconds.

// const MinToSeconds = (input) => {
//     const seconds = input * 60;
//     console.log(seconds);
// }

// MinToSeconds(5)

// Create a function that takes an array and returns the first element.

// const array = [1,2,3,4,5,6]

// const FirstElem = ()  =>   {
//     const first = array[0]
//     console.log(first)
// }

// FirstElem()

// Write a function that takes the base and height of a triangle and return its area.

// const triangleArea = (base) =>  {
//     const area = base * 3
//     console.log(area)
// }

// triangleArea(50)

// Create a function that takes a number as an argument. Add up all the numbers from 1 to 
// the number you passed to the function. For example, if the input is 4 then your function 
// should return 10 because 1 + 2 + 3 + 4 = 10.EASY

// const sumOfNumbers = (input) => {
//     let iterator
//     while(iterator > input) {
//         let iterator = 1
//         iterator += iterator
//         console.log(input)
//         console.log(iterator)
//     }
// }

// sumOfNumbers(4)

// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// const triangleArea = (base, height) =>  {
//     const totalArea = (base * height) / 2
//     console.log(totalArea)
// }

// triangleArea(6, 8)

// easy 
// Create a function that takes a number as an argument, increments 
// the number by +1 and returns the result.

// const incByOne = (userNumber) =>  {
//     const printedResult = userNumber + 1;
//     console.log(printedResult)
// }

// incByOne(10)

//all wayyyyy to easy - time to step it up

// Create a function that takes a number as an argument. Add up all the numbers
//  from 1 to the number you passed to the function. For example, if the input 
// is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

const SimpleAdding = (num) => {
    let answer = 0;
    for (let i = 1; i <= num; i++) {
      answer = answer + i;
    } 
    console.log(answer)
  }
  
  SimpleAdding(4);