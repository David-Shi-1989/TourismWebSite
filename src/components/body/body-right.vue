<!--主页右侧 -->
<template>
  <div class="wrap">
    <xActivity></xActivity>
    <xNjlRank></xNjlRank>
    <xComment></xComment>
  </div>
</template>

<script>
import xActivity from './right/activity'
import xComment from './right/comment'
import xNjlRank from './right/njl-rank'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {xActivity, xNjlRank, xComment}
}
</script>

<style scoped>
div.wrap{
  padding: 0 20px;
  overflow: hidden;
}
</style>
