# Test cases

## **constractor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, this constractor throws an exception `phone data missing`

### Test 1: Object created with given data

```js
new PhoneRegister(jsonData);
```

test if the objects inner field has the same value as given as parameter. Parameter `jsondata` is the json array from the default file `phones.json`.

### Test 2: missing parameter throws an exception

```js
new PhoneRegister();
```

this will throw an exception `'phone data missing'`
