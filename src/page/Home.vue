<template>
  <div style="padding-top:10px;">
    <NjlList></NjlList>
  </div>
</template>

<script>
import NjlList from '../components/body/njl-list'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {NjlList}
}
</script>

<style scoped>

</style>
