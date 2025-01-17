<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "useRequest使用示例",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
}
</route>

<template>
  <div v-if="loading">加载中...</div>
  <div v-else>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
  <div v-if="error">请求失败: {{ error }}</div>
  <button @click="prevPage">上一页</button>
  <button @click="nextPage">下一页</button>
  <button @click="getList">重新获取列表</button>
</template>

<script setup lang="ts">
import { getUserListApi } from '@/api/testApi'
import useRequest from '@/hooks/useRequest'

// useRequest 的使用
const page = ref(1)
const { loading, error, data, run } = useRequest({
  queryKey: [page],
  queryFn: () => getUserListApi({ _page: page.value, _limit: 10 }),
  options: { immediate: true }
})

// 上一页
const prevPage = () => {
  page.value = Math.max(page.value - 1, 1)
}

// 下一页
const nextPage = () => {
  page.value = page.value + 1
}

// 重新获取列表数据
const getList = () => {
  run()
}
</script>
