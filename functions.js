const functions = {
  objAssign: sourceObj => Object.assign({ name: 'Dale Cooper' }, sourceObj),
  objCreate: prototypeObj => {
    const newObj = Object.create(prototypeObj)
    return Object.getPrototypeOf(newObj) === prototypeObj
  },
  objDefineProperties: inputObj => {
    const modifedObj = Object.defineProperties(inputObj, {
      name: { value: 'Dale Cooper', writable: true },
    })
    return modifedObj.name
  },
  objDefineProperties2: inputObj => 
    Object.defineProperties(inputObj, {
      choiceOfPie: {
        value: 'Cherry',
        writable: true,
      },
    }),
  objDefineProperty: inputObj => {
    const newObj = Object.defineProperty(inputObj, 'colour', {
    value: 'orange', writable: true})
    return newObj.colour
}
}

module.exports = functions
