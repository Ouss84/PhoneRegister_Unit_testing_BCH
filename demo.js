"use strict";

const phones = [
  {
    type: "home",
    number: "12345678",
  },
  {
    type: "",
    number: "22112211",
  },
  {
    number: "33993399",
  },
];

const result = [];
for (let phone of phones) {
  result.push(phone.type);
}

console.log(result);
