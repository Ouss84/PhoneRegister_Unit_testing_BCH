## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, returns an empty array [].
If a person have multiple numbers of the same type, each of them will be in it's own object.

If a parameter `type` is missing, an exception `'missing parameter'` is thrown.
The format of the returned array of object is:

```json
[
  {
    "firstname": "",
    "lastname": "",
    "number": {
      "type": "",
      "tel": ""
    }
  },
  {
    "firstname": "",
    "lastname": "",
    "number": {
      "type": "",
      "tel": ""
    }
  }
]
```

### Example type work:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32145678" }
  }
]
```

### test 1:getAllNumbersByType with types: home, mobile, work and x

#### type home returns first phones of the phones array

```js
register.getAllNumbersByType("home");
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": {
      "type": "home",
      "tel": "12345678"
    }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "home",
      "tel": "00110011"
    }
  }
]
```

#### type:mobile returns only object in the array

```js
register.getAllNumbersByType("mobile");
```

returns

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "mobile",
      "tel": "0453341223"
    }
  }
]
```

#### type: work

```js
register.getAllNumbersByType("work");
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32145678" }
  }
]
```

#### if type doesn't exist

```js
register.getAllNumbersByType("x");
```

returns

```json
[]
```

### test 2 :if type is missing throws an exception:

```js
register.getAllNumbersByType();
```

throw an exception `'missing parameter'`
