import {  findMaxValue } from '../tools/utils.js'
import { describe, it , expect} from "vitest";

describe('test for function findMaxValue', () => {
  it('return the max value', () => {    
    expect(findMaxValue([45,125,123,78,45])).toBe(125)
    expect(findMaxValue([-1,-0,-99])).toBe(-0)
    expect(findMaxValue([-1,0.99,-1.99])).toBe(0.99)
  })

  it('return null when the array is empty', () => {
    const maxValue = findMaxValue([])
    expect(maxValue).toBe(null)
  })

  it('return null when doesn\'t have a parameter', () => {
    const maxValue = findMaxValue()
    expect(maxValue).toBe(null)
  })
})