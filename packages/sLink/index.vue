<template>
  <a :href="href" :class="[`s-link-${type}`]">Link</a>
</template>

<script>
export default {
  name: 'SLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
  // 定义链接字体颜色
  .s-link-default {
      color: #606266;
  }
  .s-link-primary {
      color: #409eff;
  }
</style>
