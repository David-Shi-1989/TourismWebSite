<!--旅行社 列表 -->
<template>
  <div class="ng-foot-wrap">
    <Row>
      <iCol span="6">
        <div class="ng-foot-item-wrap">
          <h3>关注我们动态</h3>
          <ul class="ng-ul-list-none">
            <li><a><i class="fa fa-weibo"></i><span>在宁国</span></a></li>
            <li><a><i class="fa fa-wechat"></i><span>微信公众号</span></a></li>
          </ul>       
        </div>
      </iCol>
      <iCol span="6">
        <div class="ng-foot-item-wrap">
          <h3>联系我们</h3>
          <ul class="ng-ul-list-none">
            <li><i class="fa fa-phone"></i><span>0551-2596354</span></li>
            <li><i class="fa fa-envelope"></i><span>service@zainingguo.com</span></li>
          </ul>
        </div>
      </iCol>
      <iCol span="6">
        <div class="ng-foot-item-wrap" style="width: 90%;">
          <h3>关于我们</h3>
          <p>关于我们的信息</p>
        </div>
      </iCol>
      <iCol span="6">
        <div class="ng-foot-item-wrap" style="width: 90%;">
          <h3>版权信息</h3>
          <p>版权所有，保留一切权利！©2018 在宁国 【皖ICP备14022368号-2】</p>
        </div>
      </iCol>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.ng-foot-wrap{
  width:100%;
  padding: .5rem 0;
  height: 5rem;
  background-color: rgba(221,221,107,.4);
  box-shadow: #bbb .05rem 0px .1rem;
}
.ng-foot-item-wrap {
  width: 60%;
  margin: 0 auto;
}
.ng-foot-wrap >>> a {
  color: #232323;
  text-decoration: none;
}
.ng-foot-wrap >>> i{
  font-size: .7rem;
  width:1.2rem;
  text-align: center;
}
</style>
