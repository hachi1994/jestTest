import Player from './player'
import NewPlayer from './newPlayer'
const player = new Player()
const newPlayer = new NewPlayer()
// beforeAll(()=>{
//     console.log('刚来')
// })
// afterAll(()=>{
//     console.log('完事')
// })
// beforeEach(()=>{
//     console.log('每个')
// })
// afterEach(()=>{
//     console.log('每个1')
// })
describe('父级', () => {
    beforeAll(() => {
        console.log('父级执行了！')
    })
    expect(1).toEqual(1)
    describe('测试老运动员', () => {
        beforeAll(() => {
            console.log("子级执行了")
        })
        test('测试新建运动员', () => {
            player.name('wade')
            player.yearsOld(20)
            player.operate('attack')
            expect(player.info).toEqual('wade20attack')
        })
    })
    describe('测试新运动员', () => {
        beforeAll(() => {
            console.log("子级执行了1")
        })
        test('测试新的运动员', () => {
            newPlayer.name('lhc')
            expect(newPlayer.name).toEqual('lhc')
        })
    })
})

