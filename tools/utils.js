export function sum(a, b) {
  return a + b
}

export function findMaxValue (array=[]) {
  if (!array.length) {
    return null
  }

  return Math.max(...array);
}

export function factorial (number) {
  if (number < 0) {
    return null
  }
  if (number === 1 || number === 0) {
    return 1
  }

  return number * factorial(number-1)
}

export function simpleFactorial (number) {
  if (number < 0) {
    return null
  }

  if (number === 1 || number === 0) {
    return 1
  }

  let result = 1;

  for (let i = 1; i <= number; i++ ){    
    result *= i 
  }

  return result
}

export function orderNumbers (numbers) {
  return numbers.sort((a, b) => a - b)
}