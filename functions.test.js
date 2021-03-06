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

// Object.fromEntries()
test("receives a list of two key-value pairs and returns an object with the two properties based on the list entries", () => {
  expect(
    functions.objFromEntries([
      ["sound1", "wind"],
      ["sound2", "leaves falling"],
    ])
  ).toStrictEqual({ sound1: "wind", sound2: "leaves falling" })
})

// Object.getOwnPropertyDescriptor()
test("receives an object and a property key and returns the value for .configurable and for .value", () => {
  expect(
    functions.objGetOwnPropertyDescriptor(
      { day: "Saturday", adventure: true },
      "day"
    )
  ).toMatch(
    /The value for the day key is Saturday, and its configurable value is true/
  )
})

// Object.getOwnPropertyDescriptors
test("receives an object with more than one property and returns a string confirming the property value and writable value for one property on the object", () => {
  expect(
    functions.objGetOwnPropertyDescriptors({
      needSleep: false,
      needNap: true,
    })
  ).toMatch(
    /The value of the property needNap is true, and yes it is indeed writable/
  )
})

//Object.getOwnPropertyNames
