import assert from "assert";
import get from "../library/src/get.js"

const testObject = { 'a': [{ 'b': { 'c': 4 } }] };

describe("Get values from list", function () {
  describe("#get()", function () {
    it("Should get 3rd value from list", function () {
      assert.equal(get([1,2,3,4,5], 2), 3);
    });
    it("Should get value by string path", function () {
        assert.equal(get(testObject, "a.0.b.c"), 4);
    });
    it("Should get value by string path 2", function () {
        assert.equal(get(testObject, "a[0].b.c", "default"), 4);
    });
    it("Should get value by list path", function () {
        assert.equal(get(testObject, ['a', '0', 'b', 'c']), 4);
    });
    it("Should use default value if not found", function () {
        assert.equal(get(testObject, "1.2.3", "default"), "default");
    });
    it("Should use default value if searching undefined", function () {
        assert.equal(get(testObject, undefined, "default"), "default");
    });
  });
});
