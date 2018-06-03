<!--旅行社 列表 -->
<template>
  <div class="wrap">
    <div class="ng-list-title">
      <p class="ng-list-title-main">游记攻略</p>
      <p class="ng-list-title-sub">先看看攻略，再出去玩。</p>
    </div>
    <ul class="ng-ul-list-none ng-article-wrap">
      <li class="clear">
        <img class="ng-article-item-img ng-f-l" src="/static/image/article/njpl1.jpg">
        <div class="ng-article-item-info-wrap">
          <router-link to="/article/2" class="ng-article-title">宁国南极漂流</router-link>
          <p class="ng-article-info-wrap">
            <span class="ng-article-location"><i class="fa fa-map-marker"></i><span>宁国·南极乡</span></span>
            <span class="ng-article-user">
              <Avatar src="/static/image/avatar/1.jpg" size="small"></Avatar>
              <span class="ng-article-name">Lucky_小仙女</span>
            </span>

            <span class="ng-article-date">2018-6-3 14:21:11</span>
          </p>
          <p class="ng-article-content"> 漂流属二人皮筏，峡谷落差式漂流，总置身于南极漂流，女人一路尖叫，男人一路欢笑。曲折多变的天然河道，构成60多处S型弯道，大小落差100多处。有惊无险的漂流刺激体验和沿途峡谷七彩壮观的岩石地质景观，让你尽情享受视觉冲击与心灵震撼相结合的双重快感！ </p>
          <div class="ng-article-data-wrap">
            <span><i class="fa fa-eye"></i>397</span>
            <span><i class="fa fa-image"></i>17</span>
            <span><i class="fa fa-thumbs-o-up"></i>120</span>
          </div>
        </div>
      </li>
      <li class="clear">
        <img class="ng-article-item-img ng-f-l" src="/static/image/tc/mw_1.jpg">
        <div class="ng-article-item-info-wrap">
          <router-link to="/article/2" class="ng-article-title">恩龙世界木屋村</router-link>
          <p class="ng-article-info-wrap">
            <span class="ng-article-location"><i class="fa fa-map-marker"></i><span>宁国·港口</span></span>
            <span class="ng-article-user">
              <Avatar src="/static/image/avatar/2.jpg" size="small"></Avatar>
              <span class="ng-article-name">静默大仙</span>
            </span>

            <span class="ng-article-date">2018-6-1 05:04:46</span>
          </p>
          <p class="ng-article-content">恩龙世界木屋村位于宁国市西北8公里处，是由一幢幢绿色植被掩映下的小木屋组成的度假村，这些木屋都可以入住，环境很好。只参观或者入住木屋不需要购买门票，只有参观主要景点恩龙民俗风情园才需要购买门票。恩龙民俗风情园内分布着苗寨、傣寨、佤寨、蒙古包、摩俊人家等多个少数民族特色村寨，有民族表演可看。游玩项目比如高空溜索、骑马等都需要另外付费，参考价每项在10-30元不等。水上乐园里可以坐游艇，垂钓。</p>
          <div class="ng-article-data-wrap">
            <span><i class="fa fa-eye"></i>983</span>
            <span><i class="fa fa-image"></i>21</span>
            <span><i class="fa fa-thumbs-o-up"></i>243</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: []
    }
  }
}
</script>

<style scoped>
div.wrap {
  padding: 15px 20px 15px 0;
}
ul.ng-article-wrap{
  background-color: #fff;
  padding:10px 20px;
  border:1px solid #e6e6e6;
}
ul.ng-article-wrap > li{
  height: 182px;
  box-sizing: content-box;
  padding: 20px 10px;
  border-bottom: 1px solid #eee;
  transition: all .4s;
}
ul.ng-article-wrap > li:last-child{
  padding-bottom: 0;
  border:0;
}
ul.ng-article-wrap > li:hover{
  background-color: #fafafa;
}
ul.ng-article-wrap > li:hover .ng-article-title{
  color: #2d8cf0;
}
ul.ng-article-wrap img.ng-article-item-img{
  width:260px;
  border:1px solid #efefef;
}
.ng-article-item-info-wrap{
  position: relative;
  overflow: auto;
  padding-left: 20px;
  height: 100%;
}
.ng-article-item-info-wrap .ng-article-title{
  color: #444;
  transition: color .3s;
  font-size: 22px;
}
.ng-article-item-info-wrap .ng-article-title:hover{
  color:#57a3f3;
}
.ng-article-item-info-wrap .ng-article-info-wrap{
  margin:5px 0;
}
.ng-article-item-info-wrap .ng-article-name{
  color:#e69233;
  margin-right: 20px;
}
.ng-article-item-info-wrap .ng-article-location{
  color:#AAA;
  margin-right: 20px;
  display: block;
  float: left;
  width:100px;
}
.ng-article-item-info-wrap .ng-article-location i{
  margin-right: 4px;
}
.ng-article-item-info-wrap .ng-article-user{
  float: left;
  display: block;
  width:200px;
}
.ng-article-item-info-wrap .ng-article-date{
  color:#aaa;
}
.ng-article-item-info-wrap .ng-article-date::before{
  content: '发表于';
  margin-right: 10px;
}
.ng-article-item-info-wrap .ng-article-content{
  color: #777;
  font-size: 14px;
  padding: 5px 0;
}
.ng-article-item-info-wrap .ng-article-data-wrap{
  position: absolute;
  bottom: 0;
  color: #999;
  text-align: right;
}
.ng-article-item-info-wrap .ng-article-data-wrap i.fa{
  font-size: 12px;
  margin-right: 3px;
}
.ng-article-item-info-wrap .ng-article-data-wrap > span{
  margin-right: 20px;
  cursor: pointer;
}
</style>
