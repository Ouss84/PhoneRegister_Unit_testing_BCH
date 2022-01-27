"use strict";
const PhoneRegister = require("../phoneRegister");
const phones = require("../phones.json");
describe("Testing constructor", () => {
  test("Test 1: Object created with given data", () => {
    const register = new PhoneRegister(phones);
    expect(register.phoneRegister).toEqual(phones);
  });
  test("Test 2: missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});
