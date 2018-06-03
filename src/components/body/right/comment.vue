<!--网友评论 实时展示 -->
<template>
  <div class="commnet-wrap">
    <p class="ng-module-title clear">
      <span class="ng-list-title-main">用户评价</span>
      <router-link class="ng-list-more" to="/llo">更多</router-link>
    </p>
    <ul class="ng-ul-list-none comment-list-wrap">
      <li class="clear">
        <Avatar src="/static/image/avatar/3.jpg" size="small" class="ng-f-l"></Avatar>
        <div class="ng-comment-content-wrap clear">
          <div class="ng-f-r">
            <p>大半年过去了，终于想要写一写 日本 的游记了，其实游记我已经记不得了，那就说哪是哪吧，说一说行程中有趣的事情。 功略放在最后 游记视频 人生的意义对于我来说，永远是爱。</p>
          </div>
        </div>
        <p class="text-align-r ng-comment-content-info">—— <span>春天花会开</span> 评价 <linkSite title="红杉林" to="/ll"></linkSite></p>
      </li>
      <li class="clear">
        <Avatar src="/static/image/avatar/4.jpg" size="small" class="ng-f-l"></Avatar>
        <div class="ng-comment-content-wrap clear">
          <div class="ng-f-r">
            <p>身为一个地地道道的 湖南 人，对芒果台放了不下十遍的《还珠格格》倒背如流，因为从小就有了对 大理 的向往。长大以后，对 云南 的了解渐渐增多， 丽江 、 腾冲 、 香格里拉 、 西双版纳 ，都成了我的期待。</p>
          </div>
        </div>
        <p class="text-align-r ng-comment-content-info">—— <span>GL_open</span> 评价 <linkSite title="红杉林" to="/ll"></linkSite></p>
      </li>
    </ul>
  </div>
</template>

<script>
import linkSite from '../../link/site'
export default {
  data () {
    return {
      data: {
      }
    }
  },
  components: {linkSite}
}
</script>

<style scoped>
.ng-comment-content-wrap{
}
.ng-comment-content-wrap > div{
  position: relative;
  width: calc(100% - 35px);
  background-color: #555;
  color:#f2f2f2;
  padding: 5px;
  border:1px solid #ececec;
  border-radius: 3px;
}
.ng-comment-content-wrap > div::before{
  content: '';
  width:0;
  height: 0;
  border-width: 5px 5px 5px 0;
  border-style: solid;
  border-color: transparent #555 transparent transparent;
  position: absolute;
  left: -5px;
  top:7px;
}
ul.comment-list-wrap > li{
  padding:0 0 10px 0;
}
.ng-comment-content-info{
  margin-top: 4px;
  font-style: italic;
  color: #666;
}
</style>
