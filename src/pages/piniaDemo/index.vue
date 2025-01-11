<!--
@description: pinia 使用 dome
-->

<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "pinia 使用 dome",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <div>用户名：{{ userInfo.userName }}</div>
  <button @click="changeUserName">改变用户名</button>
</template>

<script setup lang="ts">
/* ------------------------ 导入 与 引用 ----------------------------------- */
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { userInfo } = storeToRefs(store)

// 改变用户名
const changeUserName = () => {
  store.setUserInfo({ userName: 'uni-lin-pro' })
}

onMounted(() => {
  console.log('userInfo', userInfo.value)
})
</script>

<style scoped lang="scss"></style>
