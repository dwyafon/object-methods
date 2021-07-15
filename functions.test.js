const functions = require('./functions')

// Object.assign()
test('returns a new object with passed source object added to target object', () => {
  expect(functions.objAssign({ whereabouts: 'unknown' })).toStrictEqual({
    name: 'Dale Cooper',
    whereabouts: 'unknown',
  })
})

// Object.create() and Object.getPrototypeOf()
test('returns true when the prototype of the object created within the function is checked as strictly equal to the passed prototype object', () => {
  expect(functions.objCreate({})).toStrictEqual(true)
})
