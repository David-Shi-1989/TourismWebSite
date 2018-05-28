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
  min-height: 100%;
  padding-bottom: 20px;
}
#ng_main_container{
  height: calc(100% - var(--header-height));
}
</style>
