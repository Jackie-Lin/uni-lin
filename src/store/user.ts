import { defineStore } from 'pinia'
import { ref } from 'vue'

type UserInfo = {
  userName?: string
  userId?: string
  avatar?: string
  accessToken?: string
  refreshToken?: string
  isVip?: boolean
}

// 初始用户数据，可用户初始化
const initState = {
  userName: 'uni-lin',
  userId: '',
  avatar: '',
  accessToken: '',
  refreshToken: '',
  isVip: true
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

    // 获取权限信息
    const getUserPermissionKeys = computed(() => {
      const permissionKeys: string[] = []
      // 是登录
      if (!!userInfo.value.accessToken && !!userInfo.value.refreshToken) {
        permissionKeys.push('logined')
      }
      // 是否为 vip
      if (userInfo.value.isVip) {
        permissionKeys.push('vip')
      }
      // 可以继续加你需要的权限判定 ...
      return permissionKeys
    })

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      getUserPermissionKeys
    }
  },
  {
    persist: true // 是否持久化
  }
)
