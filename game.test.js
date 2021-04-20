const { remove, attack } = require('./game')

test('200移动',()=> {
    expect(remove(200)).toBe(200)
})
test('200攻击',()=>{
    expect(attack({name:1})).toEqual({name:1})
})