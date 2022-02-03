# Test cases

## **constractor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, this constractor throws an exception `phone data missing`

### Test 1: Object created with given data

```js
new PhoneRegister(jsonData);
```

test if the objects inner field has the same value as given as parameter. Parameter `jsondata` is the json array from the default file `phones.json`.

Note: Not good because we need to know something from the inner working of the implementation. Ypu could test this indirectly later with other tests. If this is not working most of the other tests are not working either.
If we change the implementation and name the name the field differently, our test will fail. This is against the idea that we can change imlementation how ever we like if we don't change the API.

If we have the field name described (fixed) in the API, then it is ok to test also

### Test 2: missing parameter throws an exception

```js
new PhoneRegister();
```

this will throw an exception `'phone data missing'`
