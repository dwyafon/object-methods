const functions = require('./functions')

test('returns a new object with passed source object added to target object', () => {
    expect(functions.objAssign({whereabouts: 'unknown'})).toStrictEqual({name: 'Dale Cooper', whereabouts: 'unknown'})
})