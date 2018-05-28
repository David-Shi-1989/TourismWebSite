<template>
  <div style="padding-top:10px;">
    <NjlList></NjlList>
    <TcList></TcList>
  </div>
</template>

<script>
import NjlList from '../components/body/njl-list'
import TcList from '../components/body/tc-list'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {NjlList, TcList}
}
</script>

<style scoped>

</style>
