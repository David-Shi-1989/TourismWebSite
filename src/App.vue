<template>
  <div id="app">
    <xHeader></xHeader>
    <div id="ng_main_container">
      <router-view></router-view>
    </div>
    <xFoot></xFoot>
    <div style="position:fixed;top:30rem;left:0;"><QQService></QQService></div>
  </div>
</template>

<script>
import xHeader from '@/components/Header'
import xSideBar from '@/components/SideBar'
import xFoot from '@/components/footer/foot'
import QQService from '@/components/body/qq-service'
export default {
  name: 'App',
  components: {xHeader, xSideBar, xFoot, QQService}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  min-height: 100%;
}
#ng_main_container{
  height: calc(100% - var(--header-height));
}
</style>
