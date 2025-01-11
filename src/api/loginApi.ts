import http from '@/http/httpClient'
import { useUserStore } from '@/store'

/* 登录 获取 accessToken */
export const loginApi = async data => {
  const res: any = await http.post('http://localhost:3000/login', {
    data,
    isBaseUrl: false
  })
  const store = useUserStore()
  store.setUserInfo({
    refreshToken: res.data.refreshToken,
    accessToken: res.data.accessToken
  })
}

/* 拿 refreshToken 换取 accessToken 与 新 refreshToken */
/* 即刷新 accessToken */
export const refreshTokenApi = async () => {
  const store = useUserStore()
  const { refreshToken } = store.userInfo || {}
  const res: any = await http.get('http://localhost:3000/refresh', {
    data: {
      refreshToken: refreshToken
    },
    isBaseUrl: false
  })
  store.setUserInfo({
    refreshToken: res.data.refreshToken,
    accessToken: res.data.accessToken
  })
  return res
}

/* 获取用户信息 */
export const getListApi = async () => {
  return http.get('http://localhost:3000/list', {
    isBaseUrl: false
  })
}
