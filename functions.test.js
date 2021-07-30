const functions = require("./functions")

// Object.assign()
test("returns a new object with passed source object added to target object", () => {
  expect(functions.objAssign({ whereabouts: "unknown" })).toStrictEqual({
    name: "Dale Cooper",
    whereabouts: "unknown",
  })
})

// Object.create() and Object.getPrototypeOf()
test("returns true when the prototype of the object created within the function is checked as strictly equal to the passed prototype object", () => {
  expect(functions.objCreate({})).toStrictEqual(true)
})

// Object.defineProperties()
test("receives an empty object and returns an object to which one property has been added", () => {
  expect(functions.objDefineProperties({})).toStrictEqual("Dale Cooper")
})

test("receives an object and returns an object on which one property has been modifed", () => {
  expect(functions.objDefineProperties({ name: "Agent Cooper" })).toStrictEqual(
    "Dale Cooper"
  )
})

test("receives an empty object and returns the same empty object despite modifications to that object", () => {
  expect(functions.objDefineProperties2({})).toEqual({})
})

// Object.defineProperty()
test("receives an object and returns the value of the modified property", () => {
  expect(functions.objDefineProperty({ colour: "blue" })).toEqual("orange")
})

test("receives an empty object, adds one property, and returns value from the modified object", () => {
  expect(functions.objDefineProperty2({})).toEqual("Hawk")
})

// Object.entries()
test("receives an object with properties and returns an array of the object's string-keyed property pairs", () => {
  expect(functions.objEntries({ name: "Dale", agent: true })).toStrictEqual([
    ["name", "Dale"],
    ["agent", true],
  ])
})

// Object.freeze()
test("freezes an object, attempts to mutate the object, and returns the object's single value", () => {
  expect(functions.objFreeze({ DJ: "Cut Chemist" })).toMatch(/Cut Chemist/)
})
