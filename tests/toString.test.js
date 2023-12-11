import assert from "assert";
import toString from "../library/src/toString.js";

describe("Converts numbers to string", function () {
    describe("#toString()", function () {
      it("Should convert string to string", function () {
        assert.equal(toString("test"), "test");
      });
      it("Should convert number to string", function () {
        assert.equal(toString("2"), "2");
      });
      it("Should convert decimal to string", function () {
        assert.equal(toString(2.2), "2.2");
      });
      it("Should convert empty string to empty string", function () {
        assert.equal(toString(""), "");
      });
      it("Should convert list to string", function () {
        assert.equal(toString([1,2,3]), "1,2,3");
      });
  });
});