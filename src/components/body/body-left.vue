<!--活动 -->
<template>
  <div style="width:100%;">
    <TcList></TcList>
    <ArticleList></ArticleList>
    <NjlList></NjlList>
    <xBus></xBus>
  </div>
</template>

<script>
import NjlList from './left/njl-list' // 农家乐列表
import TcList from './left/tc-list' // 套餐列表
import ArticleList from './left/article-list' // 攻略列表
import xBus from './left/bus' // 攻略列表
export default {
  data () {
    return {
      data: []
    }
  },
  components: {ArticleList, TcList, NjlList, xBus}
}
</script>

<style scoped>

</style>
