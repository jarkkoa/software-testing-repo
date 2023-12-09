import assert from "assert";
import compact from "../library/src/compact.js"

describe("Remove Falsey values from list", function () {
  describe("#compact()", function () {
    it("Should remove false values", function () {
      assert.deepEqual(compact([1, 2, false, 4]), [1, 2, 4]);
    });
    it("Should remove empty values", function () {
        assert.deepEqual(compact([1, 2, "", 4]), [1, 2, 4]);
    });
    it("Should remove zero values", function () {
        assert.deepEqual(compact([1, 2, 0, 4]), [1, 2, 4]);
    });
    it("Should multiple zero values", function () {
        assert.deepEqual(compact([1, 2, 0, -0, 0.0, 4]), [1, 2, 4]);
    });
    it("Should remove NaN", function () {
        assert.deepEqual(compact([1, 2, NaN, 4]), [1, 2, 4]);
    });
    it("Should remove multiple Falsey values", function () {
        assert.deepEqual(compact([1, 2, NaN, null, 0, undefined, 4]), [1, 2, 4]);
    });
  });
});
