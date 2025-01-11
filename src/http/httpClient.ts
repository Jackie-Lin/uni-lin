import { refreshTokenApi } from '@/api/loginApi'
import { CustomRequestOptions } from '@/interceptors/requestInterceptor'
import { useUserStore } from '@/store'

type CustomRequestOptionsOmit = Omit<CustomRequestOptions, 'url' | 'method'>

let refreshing = false
let taskQueue = []

export default class ApiClient {
  private static http<T>(options: Omit<CustomRequestOptions, 'isBaseUrl'>) {
    return new Promise<ResData<T>>((resolve, reject) => {
      uni.request({
        ...options,
        success: async (res: any) => {
          // 无感刷新token
          const store = useUserStore()
          const { refreshToken } = store.userInfo || {}
          if (res.data.code == 401 || res.statusCode == 401) {
            taskQueue.push(() => {
              this.http(options)
            })
          }
          if ((res.data.code == 401 || res.statusCode == 401) && refreshToken != '' && !refreshing) {
            refreshing = true
            // 发起刷新 token 请求
            const refreshTokenRes: any = await refreshTokenApi()
            console.log('🚀 ~ ApiClient ~ success: ~ refreshTokenRes:', refreshTokenRes)
            refreshing = false
            // 刷新 token 成功，将任务队列的所有任务重新请求
            if (refreshTokenRes?.data.code == 200) {
              taskQueue.forEach(event => {
                event()
              })
              taskQueue = []
            } else {
              // 刷新 token 失败，跳转到登录页
              uni.showToast({
                title: '登录已过期，请重新登录',
                icon: 'none',
                time: 2500
              })
              // setTimeout(() => {
              //   // 清除 用户信息（包括 token）
              //   store.clearUserInfo()
              //   // 跳转到登录页
              //   uni.navigateTo({ url: '/pages/login/login' })
              // }, 2500)
            }
          }

          // 请求成功
          resolve(res.data as ResData<T>)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }
  // GET
  public static get(url: string, options?: CustomRequestOptionsOmit) {
    return this.http({
      url,
      method: 'GET',
      ...options
    })
  }
  // POST
  public static post(url: string, options?: CustomRequestOptionsOmit) {
    return this.http({
      url,
      method: 'POST',
      ...options
    })
  }
  // PUT
  public static put(url: string, options?: CustomRequestOptionsOmit) {
    return this.http({
      url,
      method: 'PUT',
      ...options
    })
  }
  // DELETE
  public static delete(url: string, options?: CustomRequestOptionsOmit) {
    return this.http({
      url,
      method: 'DELETE',
      ...options
    })
  }
}
