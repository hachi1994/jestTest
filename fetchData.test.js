import { fetchData, fetchTwoData, fetchError, fetchAsyncWaitData } from './fetchData'
test('测试请求数据', (done) => {
    fetchData((data) => {
        //console.log(data)
        expect(data).toEqual('helloworld')
        done()
    })

})
test('测试直接返回promuse', () => {
    return fetchTwoData().then((response) => {
        //console.log(response.data)
        expect(response.data).toEqual('helloworld')

    })
})
test('测试错误', () => {
    expect.assertions(1)
    return fetchError().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})
test('测试async await形式', async () => {
    let response = await fetchAsyncWaitData()
    expect(response.data).toEqual('helloworld')
})