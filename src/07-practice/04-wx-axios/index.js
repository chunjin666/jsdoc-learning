import request from './request'

// -------------------------------------------------------------- Warning
// axios 本身的 get 方法是没有 data 参数的，我们修改的 wx-axios 库给 get 方法添加了 data 参数。
// 如果传递 data 参数，会把 data 参数转换成 query 参数
// -------------------------------------------------------------- 

// 只传一个参数
request({
  url: '/api/api1',
  method: 'get',
  data: {
    name: 'wx',
  },
}).then((res) => {
  console.log(res)
})

// 传2个参数
request('/api/api1', {
  method: 'get',
  data: {
    name: 'wx',
  },
}).then((res) => {
  console.log(res)
})

// 调用具体请求方法
request.post('/api/api1', { name: 'wx' }).then((res) => {
  console.log(res.data)
})

// 添加自定义config，自定义config是有代码提示和补全的
request.get('/api/api1', {}, { showLoading: true }).then((res) => {
  console.log(res.data)
})

// --------------------------------------------------------------
// 封装API请求，把 method 和 url 封装一下，返回一个请求函数
const getUser = request.getWrap(
  '/api/api1',
  { name: 'wx' },
  { showLoading: true }
)
// 在业务中调用API请求，依然是有完整的代码提示和补全的
getUser({ id: 1 }, { loadingMsg: '获取用户中...' }).then((res) => {
  console.log(res.data)
})

const editUser = request.postWrap('/api/api2', { id: 1 }, { showLoading: true })
editUser({ name: 'wx' }, { loadingMsg: '修改用户中...' }).then((res) => {
  console.log(res.data)
})

const deleteUser = request.deleteWrap('/api/api2/1', { showLoading: true })
deleteUser({ loadingMsg: '删除用户中...' }).then((res) => {
  console.log(res.data)
})
