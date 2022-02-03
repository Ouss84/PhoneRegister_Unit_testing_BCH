# Phone API

## data

Data will be in a json file

### phones.json

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

## Class PhoneRegister

Persons are uniquely identified by firstname and lastname. There can't be two persons with the same name.

## **constractor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, this constractor throws an exception `phone data missing`

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once.
If there are no phones or no persons, an empty array is returned.

For exemple:

```json
["home", "work", "mobile"]
```

## **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with given `firstname` and `lastname`.

if no person with given name is found, an empty array [] is returned.
if no number with given type is found, an empty array [] is returned.
If at least one parameter is missing an exception `'missing parameter'` is thrown.

For exemple Leila Hökki and work:

```json
["22112211", "33993399"]
```

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
If all phones are missing, an empty array [] is returned.
If all persons are missing, an empty array is returned.

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns an json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the methos returns `null`
If the parameter is missing `null` is also returned.

### Example who has number "87654321"

The returned value will be:

```json
{ "firstname": "Leila", "lastname": "Hökki" }
```
