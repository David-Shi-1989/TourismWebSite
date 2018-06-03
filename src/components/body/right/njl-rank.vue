<!--农家乐排名 实时展示 -->
<template>
  <div class="rank-wrap">
    <p class="ng-module-title clear">
      <span class="ng-list-title-main">农家乐排名</span>
      <router-link class="ng-list-more" to="/llo">更多</router-link>
    </p>
    <ul class="ng-ul-list-none ng-njl-rank-wrap">
      <li v-for="(item,index) in data" :key="index" class="clear">
        <i class="icon iconfont icon-crmxitongy-2" :style="{color: index==0?'#ffd700':(index==1?'#999':(index==2?'#ba6e40':'#ccc'))}"></i>
        <router-link to="/njl/2">{{item.name}}</router-link>
        <div class="ng-f-r">
          <xScoreStar v-model="item.score"></xScoreStar>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import xScoreStar from '../../scoreStar'
export default {
  data () {
    return {
      data: [
        {name: '健康农家乐', score: 4.8},
        {name: '农历农家乐', score: 4.5},
        {name: '王氏山庄', score: 4.2},
        {name: '田园小憩', score: 3.8},
        {name: '大院农家乐', score: 3.5}
      ]
    }
  },
  components: {xScoreStar}
}
</script>

<style scoped>
.rank-wrap{
  padding: 20px 0;
}
.ng-njl-rank-wrap i{
  font-size: 18px;
}
.ng-njl-rank-wrap a{
  color: #444;
  font-size: 14px;
}
</style>
