<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '页面路由权限控制'
  }
}
</route>

<template>
  <button @click="goToPage1">['vip']</button>
  <button @click="goToPage2">['vip', 'admin']</button>
  <button @click="goToPage3">['logined']</button>
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
