<!--主页右侧 -->
<template>
  <div class="wrap">
    <xActivity></xActivity>
  </div>
</template>

<script>
import xActivity from './right/activity'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {xActivity}
}
</script>

<style scoped>
div.wrap{
  padding: 0 20px;
  overflow: hidden;
}
</style>
