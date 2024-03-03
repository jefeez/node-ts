import { describe, expect, it } from '@jest/globals'
import { sum } from './main'

describe('Main', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
