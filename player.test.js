import Player from './player'
const player = new Player()
beforeAll(()=>{
    console.log('刚来')
})
afterAll(()=>{
    console.log('完事')
})
beforeEach(()=>{
    console.log('每个')
})
afterEach(()=>{
    console.log('每个1')
})
test('测试新建运动员',()=>{
    player.name('wade')
    player.yearsOld(20)
    player.operate('attack')
    expect(player.info).toEqual('wade20attack')
})