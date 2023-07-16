// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { countBits } from "../src/1-6kyu-bit-counting";

// TODO Add your tests here
describe("1-6kyu-bit-counting", function() {
    it("test", function() {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(4), 1);
        assert.equal(countBits(7), 3);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(10), 2);
        assert.equal(countBits(6506760529183785), 30);
    });
});