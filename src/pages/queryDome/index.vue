<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "请求使用模板",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <div>请求使用模板</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  let baseUrl = import.meta.env
  console.log('🚀 ~ onMounted ~ baseUrl:', baseUrl)
})
</script>
