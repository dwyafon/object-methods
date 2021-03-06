const functions = {
  objAssign: sourceObj => Object.assign({ name: "Dale Cooper" }, sourceObj),
  objCreate: prototypeObj => {
    const newObj = Object.create(prototypeObj)
    return Object.getPrototypeOf(newObj) === prototypeObj
  },
  objDefineProperties: inputObj => {
    const modifedObj = Object.defineProperties(inputObj, {
      name: { value: "Dale Cooper", writable: true },
    })
    return modifedObj.name
  },
  objDefineProperties2: inputObj =>
    Object.defineProperties(inputObj, {
      choiceOfPie: {
        value: "Cherry",
        writable: true,
      },
    }),
  objDefineProperty: inputObj => {
    const newObj = Object.defineProperty(inputObj, "colour", {
      value: "orange",
      writable: true,
    })
    return newObj.colour
  },
  objDefineProperty2: inputObj => {
    const newObj = Object.defineProperty(inputObj, "name", {
      value: "Hawk",
      writable: true,
    })
    return newObj.name
  },
  objEntries: inputObj => Object.entries(inputObj),
  objFreeze: inputObj => {
    Object.freeze(inputObj)
    inputObj.DJ = "DJ Shadow"
    return inputObj.DJ
  },
  objFromEntries: list => Object.fromEntries(list),
  objGetOwnPropertyDescriptor: (inputObj, prop) => {
    const descriptor = Object.getOwnPropertyDescriptor(inputObj, prop)
    return `The value for the ${prop} key is ${descriptor.value}, and its configurable value is ${descriptor.configurable}`
  },
  objGetOwnPropertyDescriptors: inputObj => {
    const descriptors = Object.getOwnPropertyDescriptors(inputObj)
    return `The value of the property needNap is ${descriptors.needNap.value}, and ${descriptors.needNap.writable ? 'yes' : 'no' } it is ${descriptors.needNap.writable ? 'indeed' : 'not'} writable`

  },
}

module.exports = functions
