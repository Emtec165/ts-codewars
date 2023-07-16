import { assert } from "chai"
import { rgb } from "../src/5-5kyu-rgb-to-hex-conversion"


describe("5-5kyu-rgb-to-hex-conversion", function () {
    it("Basic Tests", function () {
        assert.strictEqual(rgb(0, 0, 0), "000000")
        assert.strictEqual(rgb(0, 0, -20), "000000")
        assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
        assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
    })
})