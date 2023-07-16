import { assert } from "chai";

import { isPangram } from "../src/2-6kyu-detect-pangram";

describe("2-6kyu-detect-pangram", function() {
    it("test", function() {
        assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
        assert.strictEqual(isPangram("This is not a pangram."), false);
    });
});