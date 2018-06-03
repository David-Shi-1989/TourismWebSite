<!--主页左侧 -->
<template>
  <div class="activity-wrap">
    <p class="ng-module-title">
      <span class="ng-list-title-main">最新活动</span>
      <router-link class="ng-list-more" to="/llo">更多</router-link>
    </p>
    <div>
      <div class="activity-imgWrap">
        <img src="/static/image/huodong/czx.jpg">
        <div class="activity-img-des">
          <h5>{{data.title}}</h5>
          <p>{{data.subTitle}}</p>
        </div>
      </div>
      <div class="activity-desWrap">
        <p class="text-indent-2">{{data.content}}</p>
        <table class="activity-info-tb">
          <tr>
            <td style="width:90px;"><span class="ng-colon-after">所剩名额</span></td>
            <td><span class="activity-highlight">{{data.leftCount}}</span></td>
          </tr>
          <tr>
            <td><span class="ng-colon-after">活动倒计时</span></td>
            <td><span class="activity-highlight">{{getCutdownTime}}</span></td>
          </tr>
        </table>
        <div style="text-align:center;margin-top:20px;">
          <Button size="small" style="margin-right:30px;">了解详情</Button>
          <Button type="primary" size="small">我要报名</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var now = (new Date()).valueOf()
    return {
      data: {
        id: '120sa2-21;',
        title: '108位冒险者，皖南川藏线等你来',
        subTitle: '皖南川藏线又称“江南天路，位于皖南318”。该公路线东起宁国市的青龙乡，西至泾县的蔡村镇，其最神秘精华路段全长120公里。',
        content: '在这个夏天，我们召集108位热爱户外的驴友，一起来到风景绝美的皖南川藏线，一起自驾度过这个难忘的夏日。',
        leftCount: 56,
        endTime: 1533340800000,
        nowTime: now
      }
    }
  },
  computed: {
    getCutdownTime () {
      let result = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      }
      let dis = (this.data.endTime - this.data.nowTime)
      let _s = 1000
      let _m = _s * 60
      let _h = _m * 60
      let _d = _h * 24
      result.day = Math.floor(dis / _d)
      result.hour = Math.floor((dis - result.day * _d) / _h)
      result.minute = Math.floor((dis - result.day * _d - result.hour * _h) / _m)
      result.second = Math.floor((dis - result.day * _d - result.hour * _h - result.minute * _m) / _s)
      return result.day + '天' + result.hour + '小时' + result.minute + '分' + result.second + '秒'
    }
  },
  created () {
    function timeTick () {
      this.data.nowTime += 1000
    }
    setInterval(timeTick.bind(this), 1000)
  }
}
</script>

<style scoped>
div.activity-wrap{
  width:100%;
}
.activity-imgWrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.activity-imgWrap > img{
  width:100%;
  display: block;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.activity-imgWrap .activity-img-des{
  font-size: 12px;
  position: absolute;
  bottom: -53px;
  left: 0;
  background-color: rgba(0,0,0,.4);
  padding: 1px 8px;
  cursor: pointer;
  transition: all .3s;
}
.activity-imgWrap .activity-img-des:hover{
  animation: activity-des-rise .3s;
  animation-fill-mode: forwards;
}
.activity-imgWrap .activity-img-des h5{
  color:#fff;
}
.activity-imgWrap .activity-img-des p{
  color:#ddd;
}
@keyframes activity-des-rise {
  100%{
    bottom: 0
  }
}
.activity-info-tb{
  width:100%;
}
.activity-info-tb tr > td:first-child{
  text-align: right;
  padding-right: 5px;
}
.activity-info-tb span.ng-colon-after{
  color:#888;
}
.activity-highlight{
  color:#c77d7b;
  font-size: 18px;
  font-weight: 700;
}
.activity-desWrap{
  border: 1px solid #ccc;
  padding: 2px 8px;
  border-top-width: 0;
}
</style>
