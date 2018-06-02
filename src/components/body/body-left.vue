<!--主页左侧 -->
<template>
  <div style="width:100%;">
    <TcList></TcList>
    <ArticleList></ArticleList>
    <NjlList></NjlList>
  </div>
</template>

<script>
import NjlList from './njl-list' // 农家乐列表
import TcList from './tc-list' // 套餐列表
import ArticleList from './article-list' // 攻略列表
export default {
  data () {
    return {
      data: []
    }
  },
  components: {ArticleList, TcList, NjlList}
}
</script>

<style scoped>

</style>
