"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneRegister = data;
  }
  getTypes() {
    const types = [];
    for (let person of this.phoneRegister) {
      if (person.phones) {
        for (let phone of person.phones) {
          if (phone.type && phone.type.length > 0) {
            if (!types.includes(phone.type)) {
              types.push(phone.type);
            }
          }
        }
      }
    }
    return types;
  } //end of getTypes
  getPersonsNumberByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];
      for (let person of this.phoneRegister) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  } //end of getPersonsNumberByType
  getAllNumbersByType(type) {
    if (!type) throw new Error("missing parameter");
    const allNumbers = [];
    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (phone.type === type) {
          const obj = {
            firstname: person.firstname,
            lastname: person.lastname,
            number: {
              type: phone.type,
              tel: phone.number,
            },
          };
          allNumbers.push(obj);
        }
      }
    }
    return allNumbers;
  }
}; //end of class
