// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers(arrayOfNumbers){
  arrayOfNumbers = [2, 6, 4, 10, 33, 2, 1, 10,7];
  summation = 0
  for(let arr of arrayOfNumbers){
    summation +=arr;
  }
    return summation;
}

assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
arrayOfNumbers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, ]
  let evenArray= [];
  for(let i of arrayOfNumbers){
    if(i%2==0){
      evenArray.push(i)
    }
  }
    return evenArray.length;
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
**/

 // function celsiusToFahrenheit(arrayOfNumbers) {
 //   arrayOfNumbers= [33, 22, 12, 98, 21, 77, 32, 10, 5, 34, 62, 11, 10, 3];
 //  let fahrenheit = [];
 //   for(let celsius of arrayOfNumbers){
 //     celsius = celsius*9/5+32
 //     celsius = Math.trunc(celsius)
 //    fahrenheit.push(celsius)
   
 // }
 //    return fahrenheit;
 // }



// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

