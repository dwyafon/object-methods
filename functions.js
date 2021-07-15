const functions = {
    objAssign: (sourceObj) => Object.assign({name: 'Dale Cooper'}, sourceObj),
    objCreate: (prototypeObj) => {
        const newObj = Object.create(prototypeObj)
        return Object.getPrototypeOf(newObj) === prototypeObj
    },
}

module.exports = functions