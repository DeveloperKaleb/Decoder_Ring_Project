const { expect } = require("chai")
const { caesar } = require("../src/caesar") 

describe("caesar() tests written by Kaleb", () => {
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("foo", 26)
        expect(actual).to.be.false
    })
    it("should return the correct string when provided with a very long one", () => {
        const actual = caesar("I wish I could have done some of these tests on my own so I didn't have to come up with alternative tests.", 10)
        const expected = "s gscr s myevn rkfo nyxo cywo yp droco docdc yx wi ygx cy s nsnx'd rkfo dy mywo ez gsdr kvdobxkdsfo docdc."
        expect(actual).to.equal(expected)
    })
    it("should return a message even if it's heavy in usage of special characters", () => {
        const actual = caesar("& I said 'what @bout br%@fast @t ?iff@ny's?'", 22)
        const expected = "& e owez 'sdwp @xkqp xn%@bwop @p ?ebb@ju'o?'"
        expect(actual).to.equal(expected)
    })
})