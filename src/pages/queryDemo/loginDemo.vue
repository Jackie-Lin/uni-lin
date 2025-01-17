<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "登录请求示例",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <button @click="login">登录请求</button>
  <button @click="getList">获取列表数据</button>
</template>

<script setup lang="ts">
import { loginApi, getListApi } from '@/api/loginApi'

// 登录请求
const login = () => {
  loginApi({
    username: 'guang',
    password: '111111'
  })
}

// 获取 列表数据
const getList = () => {
  getListApi()
  // getListApi()
  // getListApi()
}
</script>
