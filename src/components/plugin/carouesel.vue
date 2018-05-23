<!--轮播图 组件 -->
<template>
  <div class="ng-plugin-carouesel">
    <div class="wrapper">
      <div>
        <img src="/static/image/veer-141031161.jpg">
        <img src="/static/image/veer-145548331.jpg">
        <img src="/static/image/veer-145848499.jpg">
        <img src="/static/image/veer-169394215.jpg">
      </div>
    </div>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
