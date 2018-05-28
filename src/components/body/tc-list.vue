<!--旅行社 列表 -->
<template>
  <div style="padding:0 15px;">
    <div class="ng-list-title">
      <p class="ng-list-title-main">套餐推荐</p>
      <p class="ng-list-title-sub">带上相机和心情，其他的交给我们。</p>
    </div>
    <ul class="ng-ul-list">
      <li v-for="(item,index) in data" :key="index">
        <img :src="item.img">
        <div class="ng-njl-list-info">
          <div class="ng-njl-list-info-title">
            <h3>
              {{item.name}}
              <span class="ng-njl-list-info-title-location">
                <i class="fa fa-map-marker"></i>
                <span v-for="(locationItem,index) in item.location" :key="'location_' + index">
                  {{locationItem}}<span v-if="index < item.location.length - 1">·</span>
                </span>
              </span>
            </h3>
            <span :title="item.score + '分'">
              <Icon type="ios-star" v-for="fullStar in parseInt(item.score)" :key="'fullStar' + fullStar"></Icon>
              <Icon v-if="(item.score - (parseInt(item.score))) > 0" type="ios-star-half"></Icon>
              <Icon v-for="blankStar in (5 - Math.ceil(item.score))" :key="'blankStar' + blankStar" type="ios-star-outline"></Icon>
              <span class="color-disabled">{{item.commentCount}}条评价</span>
            </span>
            <div class="clr"></div>
          </div>
          <p class="ng-njl-list-info-desc">{{item.desc}}</p>
          <div class="ng-njl-list-info-tag">
            <span title="Wifi"><i class="fa fa-wifi enable"></i></span>
            <span title="住宿"><i class="fa fa-hotel enable"></i></span>
            <span title="停车"><i class="fa fa-car enable"></i></span>
            <span title="洗澡"><i class="fa fa-bathtub disable"></i></span>
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
      data: [
        
      ]
    }
  }
}
</script>

<style scoped>
div.ng-list-title{
  text-align: left;
  margin-bottom: 10px;
}
div.ng-list-title p.ng-list-title-main{
  font-size: 25px;
  color:#484848;
  font-weight: 700;
}
div.ng-list-title p.ng-list-title-sub{
  font-size: 16px;
  color:#484848;
  font-weight: 300;
}
ul.ng-ul-list{
  list-style: none;
}
ul.ng-ul-list > li{
  width: 19.2%;
  height: 310px;
  box-sizing: border-box;
  float: left;
  box-shadow:#777 0px 0px 2px;
  padding: 6px 8px;
  border-radius: 1px;
  margin-right: 1%;
}
ul.ng-ul-list > li:last-child{
  margin-right: 0 !important;
}
ul.ng-ul-list > li img{
  width: 100%;
  border-radius: 2px;
  border:1px solid #EEE;
}
ul.ng-ul-list > li .ng-njl-list-info{
  text-align: left;
}
ul.ng-ul-list > li .ng-njl-list-info h3{
  color:#555;
  text-align: center;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title > h3{
  float: left;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-location{
  color: #bbbec4;
  font-weight: 200;
  font-size: 12px;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-location i{
  width:10px;
  margin:0 5px 0 10px;
}
/* ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-location::before{
  content: "(";
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-location::after{
  content:")";
} */
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title > span{
  float: right;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-desc{
  color:#666;
  height: 40px;
}
i.ivu-icon-ios-star,
i.ivu-icon-ios-star-half,
i.ivu-icon-ios-star-outline{
  color: rgb(231, 199, 13);
}
ul.ng-ul-list > li .ng-njl-list-info-tag i{
  width: 15px;
  cursor: pointer;
}
ul.ng-ul-list > li .ng-njl-list-info-tag i.enable{
  color:#2fbabe;
}
ul.ng-ul-list > li .ng-njl-list-info-tag i.disable{
  color: #DDD;
}
</style>
