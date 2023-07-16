import { G964 } from "../src/3-6kyu-playing-with-digits";
import { assert } from "chai";

function dotest(n: number, p: number, expected: number) {
    assert.equal(G964.digPow(n, p), expected, "Incorrect answer for n=" + n + ", p=" + p);
}

describe("3-6kyu-playing-with-digits", function() {
    it("digPow", function() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(114, 3, 9);
    });
});