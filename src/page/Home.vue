<template>
  <div style="padding:10px 200px;width:100%;" class="clear">
    <div style="float:left;width:75%;">
      <LeftBody></LeftBody>
    </div>
    <div style="overflow:auto;border-left:1px solid #ccc;">
      <RightBody></RightBody>
    </div>
  </div>
</template>

<script>
import LeftBody from '../components/body/body-left'
import RightBody from '../components/body/body-right'
export default {
  data () {
    return {
    }
  },
  components: {LeftBody, RightBody}
}
</script>

<style scoped>

</style>
