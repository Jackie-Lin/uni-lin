<route type="home" lang="json5">
{
  layout: 'head', // 使用默认布局，替换成 foot 试试
  style: {
    navigationBarTitleText: '布局 Demo'
  }
}
</route>
<template>
  <div class="flex-col-center font-size-14">
    <div class="flex flex-col">
      <text class="title">{{ title }}</text>
      <wd-button type="success">成功按钮</wd-button>
      <wd-button type="info">默认按钮</wd-button>
      <wd-slider v-model="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref<string>('Hello')
const value = ref<number>(30)
</script>
