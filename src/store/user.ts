import { defineStore } from 'pinia'
import { ref } from 'vue'

type UserInfo = {
  userName?: string
  userId?: string
  avatar?: string
  accessToken?: string
  refreshToken?: string
}

// 初始用户数据，可用户初始化
const initState = {
  userName: 'uni-lin',
  userId: '',
  avatar: '',
  accessToken: '',
  refreshToken: ''
  // ...
}

export const useUserStore = defineStore(
  'user',
  // Setup Store 写法，Vue3 推荐用这个种方法写
  () => {
    const userInfo = ref<UserInfo>({ ...initState })

    // 设置用户信息 可设置部分信息（比如更新 token）
    const setUserInfo = (val: UserInfo): void => {
      userInfo.value = { ...userInfo.value, ...val }
    }

    // 清除用户信息
    const clearUserInfo = (): void => {
      userInfo.value = { ...initState }
    }

    return {
      userInfo,
      setUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true // 是否持久化
  }
)
