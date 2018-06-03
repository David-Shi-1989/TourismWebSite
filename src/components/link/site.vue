<!--用户登录信息 组件 -->
<template>
  <router-link :to="to">{{title}}</router-link>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    to: {
      type: String,
      default: '/404'
    }
  }
}
</script>

<style scoped>
a {
  color: #fff;
  background: #ff9d00;
  text-decoration: none;
  padding:4px 6px;
  border-radius: 2px;
  box-shadow: #999 0 0 1px;
}
</style>
