# Test cases

## **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with given `firstname` and `lastname`.

if no person with given name is found, an empty array [] is returned.
if no number with given type is found, an empty array [] is returned.
If at least one parameter is missing an exception `'missing parameter'` is thrown.

For exemple Leila Hökki and work:

```json
["22112211", "33993399"]
```

getPersonsNumbersByType(firstname,lastname) exception `'missing parameter'`
getPersonsNumbersByType(firstname) exception `'missing parameter'`
getPersonsNumbersByType() exception `'missing parameter'`

if no person with given name is found getPersonsNumbersByType("Matt","","home") [] is returned
if no person with given name is found getPersonsNumbersByType("x","River","home") [] is returned

if no number with given type is found [] is returned, getPersonsNumbersByType("Matt","River","z")

Before tests, create register object from PhoneRegister with the default data

## Test 1: get with parameters Leila, Hökki, work

```js
register.getPersonsNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["22112211", "33993399"]
```

## Test 2: get with parameters Matt, River, mobile

```js
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

returns

```json
["0453341223"]
```

## Test 3: using wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Matt", "River", "x");
register.getPersonsNumbersByType("Matt", "x", "mobile");
register.getPersonsNumbersByType("x", "River", "mobile");
register.getPersonsNumbersByType("x", "y", "z");
```

returns

```json
[]
```
