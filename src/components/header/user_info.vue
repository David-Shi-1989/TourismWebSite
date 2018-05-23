<!--用户登录信息 组件 -->
<template>
  <div id="ng_user_info">
    <a href="javascript:void(0);">登录</a>
    <span class="separator">/</span>
    <a href="javascript:void(0);">注册</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ng_user_info{
  font-size: .7rem;
  line-height: var(--header-height);
  margin-top: .2rem;
  color:#fff;
}
#ng_user_info a{
  color: #fff;
  font-size: .7rem;
  text-decoration: none;
  cursor: pointer;
  margin: 0 .5rem;
  opacity: .5;
  transition: opacity .5s;
}
#ng_user_info a:hover{
  opacity: 1;
}
#ng_user_info span.separator{
  opacity: .5;
}
</style>
