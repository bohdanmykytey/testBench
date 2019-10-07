// VERY EASY

// Write a function that takes an integer minutes and converts it to seconds.

const MinToSeconds = (input) => {
    const seconds = input * 60;
    console.log(seconds);
}

// MinToSeconds(5)

// Create a function that takes an array and returns the first element.

const array = [1,2,3,4,5,6]

const FirstElem = ()  =>   {
    const first = array[0]
    console.log(first)
}

// FirstElem()

// Write a function that takes the base and height of a triangle and return its area.

const triangleArea = (base) =>  {
    const area = base * 3
    console.log(area)
}

// triangleArea(50)

// Create a function that takes a number as an argument. Add up all the numbers from 1 to 
// the number you passed to the function. For example, if the input is 4 then your function 
// should return 10 because 1 + 2 + 3 + 4 = 10.EASY

const sumOfNumbers = (input) => {
    let iterator
    while(iterator > input) {
        let iterator = 1
        iterator += iterator
        console.log(input)
        console.log(iterator)
    }
}

sumOfNumbers(4)