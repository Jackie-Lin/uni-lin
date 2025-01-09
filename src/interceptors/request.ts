export type CustomRequestOptions = UniApp.RequestOptions & {
  query?: Record<string, any>
  /** 出错时是否隐藏错误提示 */
  hideErrorToast?: boolean
} & IUniUploadFileOptions // 添加uni.uploadFile参数类型

const timeout = 30000 // 请求超时时间

// 拦截器配置
const httpInterceptor = {
  // 请求前的拦截
  invoke(options: CustomRequestOptions) {
    // 1. 请求超时时间设置
    options.timeout = timeout
    // 2. 定义请求返回数据的格式（设为 json，会尝试对返回的数据做一次 JSON.parse）
    options.dataType = 'json'
    // 3. 添加请求头标识，可以告诉后台是小程序端发起的请求
    options.header = {
      ...options.header,
      'Content-Type': 'application/json'
      // platform: 'mini-program', 比如 platform 字段可以告诉后台是小程序端发起的请求
    }
    // 4. 添加 token 请求头标识
    // const { token } = userStore.userInfo as unknown as IUserInfo
    // if (token) {
    //   options.header.Authorization = `Bearer ${token}`
    // }
    return options
  },

  // 请求响应成功拦截
  success(args) {
    const response = args.data
    const { code, msg } = response
    // token 无感刷新
    if (code == 401) {
      uni.showToast({
        title: msg,
        icon: 'none',
        time: 2500
      })
      setTimeout(() => {
        // 清除 用户信息（包括 token）
        // userStore.clearUserInfo()
        // 跳转到登录页
        uni.navigateTo({ url: '/pages/login/login' })
      }, 2500)
    }
    //返回消息
    return response
  }
}

export const requestInterceptor = {
  install() {
    // 拦截 request 请求
    uni.addInterceptor('request', httpInterceptor)
  }
}
