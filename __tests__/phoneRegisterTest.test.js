"use strict";
const PhoneRegister = require("../phoneRegister");
const phones = require("../phones.json");
describe("Testing constructor", () => {
  // test("Test 1: Object created with given data", () => {
  //   const register = new PhoneRegister(phones);
  //   expect(register.phoneRegister).toEqual(phones);
  // });
  test("Test 2: missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});

describe("Testing getTypes", () => {
  test("Test 1: use default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
    // expect(register.getTypes().sort()).toEqual(
    //   ["home", "work", "mobile"].sort()
    // );
  });
  test("Test 2: use custom data", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          {
            type: "work",
            number: "22112211",
          },
        ],
      },
    ];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(["work"]);
  });
  test("Test 3: no persons in phone register", () => {
    const register = new PhoneRegister([]);
    expect(register.getTypes()).toEqual([]);
  });
  describe("persons have no phones", () => {
    test("test 4: no phone field present", () => {
      const testData = [
        {
          firstname: "Leila",
          lastname: "Hökki",
        },
        {
          firstname: "Matt",
          lastname: "River",
        },
      ];
      const register = new PhoneRegister(testData);
      expect(register.getTypes()).toEqual([]);
    });
    test("test 5: phone array is empty", () => {
      const testData = [
        {
          firstname: "Leila",
          lastname: "Hökki",
          phones: [],
        },
        {
          firstname: "Matt",
          lastname: "River",
          phones: [],
        },
      ];
      const register = new PhoneRegister(testData);
      expect(register.getTypes()).toEqual([]);
    });
  });
  test("test 6: Phone object has no type", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          {
            type: "home",
            number: "12345678",
          },
          {
            type: "",
            number: "12345678",
          },
          {
            type: null,
            number: "12345678",
          },
          {
            number: "33993399",
          },
        ],
      },
    ];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(["home"]);
  });
});

describe("testing getTypes method test.each version", () => {
  const testData = require("../getTypesTestCases.json");
  test("Test 6 version 2", () => {
    const register = new PhoneRegister(testData.test6);
    expect(register.getTypes()).toEqual(["home"]);
  });
  const testValues = [
    //a            //expected
    [testData.test2, ["work"]],
    [testData.test3, []],
    [testData.test4, []],
    [testData.test5, []],
    [testData.test6, ["home"]],
  ];
  test.each(testValues)("testing ...", (a, expected) => {
    const register = new PhoneRegister(a);
    expect(register.getTypes()).toEqual(expected);
  });
});
