<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '页面路由权限控制'
  }
}
</route>

<template>
  <div>--------页面权限----------</div>
  <button @click="goToPage1">['vip']</button>
  <button @click="goToPage2">['vip', 'admin']</button>
  <button @click="goToPage3">['logined']</button>
  <div>--------按钮权限----------</div>
  <button v-perms="['operation:user:delete']">按钮权限: operation:user:delete</button>
</template>

<script setup lang="ts">
// 跳转到页面1
const goToPage1 = () => {
  uni.navigateTo({
    url: '/pages/routerDemo/page1'
  })
}

// 跳转到页面2
const goToPage2 = () => {
  uni.navigateTo({
    url: '/pages/routerDemo/page2'
  })
}

// 跳转到页面3
const goToPage3 = () => {
  uni.navigateTo({
    url: '/pages/routerDemo/page3'
  })
}
</script>
