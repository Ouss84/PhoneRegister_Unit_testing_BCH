# Test cases

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is an empty array or there is no phones field), then the person is not added into the result array.
If all phones are missing or phones array is empty, an empty array [] is returned.
If all persons are missing, an empty array is returned.

### test 1: test with default data

before test create register object from PhoneRegister class with the default data

```js
register.getAllNumbers();
```

returns the default json array

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "22112211"
      },
      {
        "type": "work",
        "number": "33993399"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      {
        "type": "home",
        "number": "00110011"
      },
      {
        "type": "mobile",
        "number": "0453341223"
      },
      {
        "type": "work",
        "number": "3393234444"
      }
    ]
  }
]
```

## test 2: test some phones missing

before test create register object from PhoneRegister class with

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "22112211"
      },
      {
        "type": "work",
        "number": "33993399"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
register.getAllNumbers();
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "22112211"
      },
      {
        "type": "work",
        "number": "33993399"
      }
    ]
  }
]
```

### test3: all the phones are missing or phone fields are not existing

before test create register object from PhoneRegister class with

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

```js
register.getAllNumbers();
```

returns

```json
[]
```

### test 4: all persons are missing

before test create register object from PhoneRegister class with empty []

```js
register.getAllNumbers();
```

returns

```json
[]
```
