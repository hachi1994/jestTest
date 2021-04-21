//const { remove, attack } = require('./game')
import {remove,attack} from './game'
test('200移动',()=> {
    expect(remove(200)).toBe(200)
})
test('200攻击',()=>{
    expect(attack({name:1})).toEqual({name:1})
})
test('200',()=>{
    expect(0.1+0.2).toBeCloseTo(0.3)//false
    expect('acgddddd').toMatch("gd")//false
    expect([1,2,3]).toContain(1)
    function throwE(){
        throw new Error("错误")
    }
    expect(throwE).toThrow()
    expect([1,2,3,4]).not.toContain(5)
})