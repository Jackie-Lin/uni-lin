import http from '@/http/httpClient'

/** GET 请求测试 */
export const getTestApi = query => {
  return http.get('/getTest', { query })
}

/** POST 请求测试 */
export const postTestApi = (data, query) => {
  return http.post('/postTest', { data, query })
}

/** 分页 请求测试 */
export const getUserListApi = (query, { isBaseUrl }) => {
  return http.get('https://jsonplaceholder.typicode.com/posts', { query, isBaseUrl })
}
