# Test cases

## **getTypes()**

returns all phone type in an array. the type is added to the result array only once. If thre are no phones or no persons, an empty array is returned.

- [] when no persons
- []when no phones

Before test, create phoneRegister object from the class PhoneRegister

### Test 1: use default data

get types of the default data

return

```json
["home", "work", "mobile"]
```

### Test 2 : with custom data

get types of the given data where exists only one type of phone

#### testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
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

returns

```json
["work"]
```

### Test 3: no persons in phone register

#### testData

```json
[]
```

returns an empty array

```json
[]
```

### Test 4: persons have no phones (no phone field present)

#### testData

no phone field present

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki"
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

returns an empty array

```json
[]
```

### Test 5: persons have no phones - phone array is empty

#### testData

phone array is empty

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns an empty array

```json
[]
```

### Test 6: Phone object has no type

#### testData

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
        "type": "",
        "number": "12345678"
      },
      {
        "number": "33993399"
      }
    ]
  }
]
```

returns

```json
["home"]
```
