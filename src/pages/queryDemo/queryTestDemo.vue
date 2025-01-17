<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "请求测试页面",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <div>
    <button @click="getTest">GET 请求</button>
    <button @click="postTest">POST 请求</button>
    <button @click="cancelRequest">取消 请求</button>
  </div>
</template>

<script setup lang="ts">
import { getTestApi, postTestApi } from '@/api/testApi'

// GET 请求
const getTest = async () => {
  const res = await getTestApi({ name: 'uni-lin' })
  console.log(res)
}

// POST 请求
let requestTask = null
const postTest = async () => {
  requestTask = postTestApi({ name: 'uni-lin' }, { id: '123456' })
}

// 取消 请求
const cancelRequest = () => {
  // 取消请求
  requestTask.abort()
}
</script>
