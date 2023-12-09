import assert from "assert";
import isEmpty from "../library/src/isEmpty.js"

describe("Check if value is empty", function () {
  describe("#isEmpty()", function () {
    it("Should be true with empty object", function () {
      assert.deepEqual(isEmpty(new Object()), true);
    });
    it("Should be true with empty Set", function () {
        assert.deepEqual(isEmpty(new Set()), true);
    });
    it("Should be true with empty Map", function () {
      assert.deepEqual(isEmpty(new Map()), true);
    });
    it("Should be true with null", function () {
        assert.deepEqual(isEmpty(null), true);
    });
    it("Should be true with empty string", function () {
        assert.deepEqual(isEmpty(""), true);
    });
    it("Should be false with non-empty list", function () {
        assert.deepEqual(isEmpty([1,2,3]), false);
    });
    it("Should be false with non-empty object", function () {
        assert.deepEqual(isEmpty({"Test": 1}), false);
    });
    it("Should be false with non-empty Set", function () {
        assert.deepEqual(isEmpty(new Set(["Test"])), false);
    });
    it("Should be false with non-empty Map", function () {
        assert.deepEqual(isEmpty(new Map([["test", "test"]])), false);
    });
    it("Should be false with non-empty string", function () {
        assert.deepEqual(isEmpty("string"), false);
    });
  });
});
