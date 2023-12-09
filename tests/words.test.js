import assert from "assert";
import words from "../library/src/words.js";

describe("Split string to an array of words", function () {
    describe("#words()", function () {
      it("Should convert string with commas to a list of words", function () {
        assert.deepEqual(words("fred, barney, pebbles"), ["fred", "barney", "pebbles"]);
      });
      it("Should convert string without commas to a list of words", function () {
        assert.deepEqual(words("fred barney pebbles"), ["fred", "barney", "pebbles"]);
      });
      it("Should convert string without commas with given separator", function () {
        assert.deepEqual(words("fred, barney, & pebbles", /[^, ]+/g), ["fred", "barney", "&", "pebbles"]);
      });
      it("Should return input string if not matching regex", function () {
        assert.deepEqual(words("fred, barney, pebbles", /[^!]+/g), ["fred, barney, pebbles"]);
      });
      it("Should return empty array when input is null", function () {
        assert.deepEqual(words(null, []));
      });
  });
});
