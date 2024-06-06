import { expect, it, describe } from "vitest";
import { simpleFactorial, factorial } from "../tools/utils";

describe('test for factorial functions', () => {
  it('return correct factorial', () => {
    expect(simpleFactorial(6)).toBe(720)
    expect(factorial(6)).toBe(720)
    expect(factorial(10)).toBe(3628800)
    expect(simpleFactorial(10)).toBe(3628800)
  })

  it('return null when the parameter is negative', () => {
    expect(simpleFactorial(-6)).toBe(null)
    expect(factorial(-45)).toBe(null)
    expect(factorial(-9)).toBe(null)
    expect(simpleFactorial(-5.6)).toBe(null)
  })

  it('return "1" when the parameter is 1 or 0', () => {
    expect(simpleFactorial(0)).toBe(1)
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(simpleFactorial(1)).toBe(1)
  })
})