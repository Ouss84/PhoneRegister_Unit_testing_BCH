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

describe("getPersonsNumbersByType(firstname,lastname,type)", () => {
  const register = new PhoneRegister(phones);
  test("Test 1: get with parameters Leila, Hökki, work", () => {
    expect(register.getPersonsNumberByType("Leila", "Hökki", "work")).toEqual([
      "22112211",
      "33993399",
    ]);
  });
  describe("tests 2 to 4: getPersonsNumbersByType", () => {
    const testValues = [
      // firstname,lastname,type, expected
      ["Matt", "River", "mobile", ["0453341223"]],
      ["Matt", "River", "home", ["00110011"]],
      ["Matt", "River", "x", []],
      ["Matt", "x", "mobile", []],
      ["x", "River", "mobile", []],
      ["x", "y", "z", []],
    ];
    test.each(testValues)(
      "getPersonsNumbersByType('%s','%s','%s')returns %s",
      (firstname, lastname, type, expected) => {
        expect(
          register.getPersonsNumberByType(firstname, lastname, type)
        ).toEqual(expected);
      }
    );
  });

  describe("test 5: missing parameter throws an exception", () => {
    test("one parameter missing", () => {
      expect(() => register.getPersonsNumberByType("Matt", "River")).toThrow(
        "missing parameter"
      );
    });
    test("two parameters missing", () => {
      expect(() => register.getPersonsNumberByType("Matt")).toThrow(
        "missing parameter"
      );
    });
    test("all parameters missing", () => {
      expect(() => register.getPersonsNumberByType()).toThrow(
        "missing parameter"
      );
    });
  });
});

describe("getAllNumbersByType(type)", () => {
  const register = new PhoneRegister(phones);
  // with test each
  describe("test 1:getAllNumbersByType with types: home, mobile, work and x", () => {
    const expectedHome = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: {
          type: "home",
          tel: "12345678",
        },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: {
          type: "home",
          tel: "00110011",
        },
      },
    ];
    const expectedMobile = [
      {
        firstname: "Matt",
        lastname: "River",
        number: {
          type: "mobile",
          tel: "0453341223",
        },
      },
    ];
    const expectedWork = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "22112211" },
      },
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "33993399" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "3393234444" },
      },
    ];
    const testValues = [
      ["home", expectedHome],
      ["mobile", expectedMobile],
      ["work", expectedWork],
      ["x", []],
    ];
    test.each(testValues)(
      "testing: getAllNumbersByType('%s')",
      (type, expected) => {
        expect(register.getAllNumbersByType(type)).toEqual(expected);
      }
    );
  }); // end of test 1: testing with test.each

  //seperate testing
  // describe("test1: testing individually", () => {
  //   test("type home returns first phones of the phones array", () => {
  //     const expected = [
  //       {
  //         firstname: "Leila",
  //         lastname: "Hökki",
  //         number: {
  //           type: "home",
  //           tel: "12345678",
  //         },
  //       },
  //       {
  //         firstname: "Matt",
  //         lastname: "River",
  //         number: {
  //           type: "home",
  //           tel: "00110011",
  //         },
  //       },
  //     ];
  //     expect(register.getPersonsNumberByType("home")).toEqual(expected);
  //   });
  //   test("type:mobile returns only object in the array", () => {
  //     expect(register.getAllNumbersByType("mobile")).toEqual([
  //       {
  //         firstname: "Matt",
  //         lastname: "River",
  //         number: {
  //           type: "mobile",
  //           tel: "0453341223",
  //         },
  //       },
  //     ]);
  //   });
  //   test("type: work", () => {
  //     const expected = [
  //       {
  //         firstname: "Leila",
  //         lastname: "Hökki",
  //         number: { type: "work", tel: "87654321" },
  //       },
  //       {
  //         firstname: "Leila",
  //         lastname: "Hökki",
  //         number: { type: "work", tel: "05040302" },
  //       },
  //       {
  //         firstname: "Matt",
  //         lastname: "River",
  //         number: { type: "work", tel: "32145678" },
  //       },
  //     ];
  //     expect(register.getAllNumbersByType("work")).toEqual(expected);
  //   });
  //   test("if type doesn't exist", () => {
  //     expect(register.getAllNumbersByType("x")).toEqual([]);
  //   });
  // }); //end of test 1 individually
  describe("test 2: missing parameter", () => {
    test("missing type throws an exception", () => {
      expect(() => register.getAllNumbersByType()).toThrow("missing parameter");
    });
  }); // end of test2: missing parameter
}); //end of getAllNumbersByType
