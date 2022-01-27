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

Persons are uniquely identified by firstname and lastname.

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

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{
  "firstname": "",
  "lastname": "",
  "phones": []
}
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

## **getName(number)**
