<template>
  <div id="app">
    <xHeader></xHeader>
    <div id="ng_main_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import xHeader from '@/components/Header'
import xSideBar from '@/components/SideBar'
export default {
  name: 'App',
  components: {xHeader, xSideBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100%;
}
#ng_main_container{
  height: calc(100% - var(--header-height));
}
</style>
