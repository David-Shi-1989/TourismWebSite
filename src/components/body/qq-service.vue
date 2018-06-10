<!--活动 -->
<template>
  <div class="service-wrap">
    <p><i class="fa fa-qq"></i><span>在线客服</span></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  }
}
</script>
<style scoped>
.service-wrap{
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  background-color: #449efa;
  padding: 0 .3rem;
  border-top-right-radius: .1rem;
  border-bottom-right-radius: .1rem;
  box-shadow: #ccc .05rem .05rem .1rem;
  cursor: pointer;
}
.service-wrap:hover >>> i{
  color: #59f5a7;
  box-shadow: #19be6b 0 0 .1rem;
}
.service-wrap:hover >>> span{
  color: #59f5a7;
}
.service-wrap >>> i{
  font-size: 1rem;
  color:#f3f3f3;
  margin-right: .4rem;
  transition: all .5s;
}
.service-wrap >>> span{
  color:#eee;
  font-size: .7rem;
  transition: all .5s;
}
</style>
