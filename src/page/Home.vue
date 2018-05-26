<template>
  <div>
    <ul class="ng-ul-list">
      <li>
        <img src="/static/image/njg_1.jpg">
        <div class="ng-njl-list-des">
          <div class="ng-njl-list-des-title">
            <h3>大院农家乐</h3>
            <span>
              <Icon type="ios-star"></Icon>
              <Icon type="ios-star"></Icon>
              <Icon type="ios-star"></Icon>
              <Icon type="ios-star"></Icon>
              <Icon type="ios-star-half"></Icon>
              <Icon type="ios-star-outline"></Icon>
              <span class="color-disabled">87条评价</span>
            </span>
            <div class="clr"></div>
          </div>
          <h2>体验采摘乐趣</h2>
        </div>
      </li>
      <li>
        <img src="/static/image//njg_2.jpg">
        <div class="ng-njl-list-des">
          <h3>乡土农家乐</h3>
          <h2>还原最乡土的农家生活</h2>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
ul.ng-ul-list{
  list-style: none;
}
ul.ng-ul-list > li{
  width: 400px;
  float: left;
  margin:0 10px;
}
ul.ng-ul-list > li img{
  width: 100%;
  border-radius: 3px;
  box-shadow:#555 0px 0px 2px;
}
ul.ng-ul-list > li .ng-njl-list-des{
  text-align: left;
}
ul.ng-ul-list > li .ng-njl-list-des h3{
  color:#555;
  text-align: center;
}
ul.ng-ul-list > li .ng-njl-list-des .ng-njl-list-des-title > h3{
  float: left;
}
ul.ng-ul-list > li .ng-njl-list-des .ng-njl-list-des-title > span{
  float: right;
}
i.ivu-icon-ios-star,
i.ivu-icon-ios-star-half,
i.ivu-icon-ios-star-outline{
  color: rgb(231, 199, 13);
}
</style>
