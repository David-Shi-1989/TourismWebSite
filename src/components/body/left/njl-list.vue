<!--农家乐 列表 -->
<template>
  <div>
    <div class="ng-list-title">
      <p class="ng-list-title-main">农家乐推荐</p>
      <p class="ng-list-title-sub">本地资深玩家体验推荐</p>
    </div>
    <Tabs value="1">
      <TabPane label="农家饭" name="1">
        <div class="ng-ul-list-wrap">
          <ul class="ng-ul-list clear">
            <li v-for="(item,index) in data1" :key="index">
              <img :src="item.img">
              <div class="ng-njl-list-info">
                <div class="ng-njl-list-info-title">
                  <h3>{{item.name}}</h3>
                  <p>
                    <span class="ng-njl-list-info-title-location">
                      <i class="fa fa-map-marker"></i>
                      <span v-for="(locationItem,index) in item.location" :key="'location_' + index">
                        {{locationItem}}<span v-if="index < item.location.length - 1">·</span>
                      </span>
                    </span>
                    <span :title="item.score + '分'" class="ng-njl-list-info-title-score">
                      <Icon type="ios-star" v-for="fullStar in parseInt(item.score)" :key="'fullStar' + fullStar"></Icon>
                      <Icon v-if="(item.score - (parseInt(item.score))) > 0" type="ios-star-half"></Icon>
                      <Icon v-for="blankStar in (5 - Math.ceil(item.score))" :key="'blankStar' + blankStar" type="ios-star-outline"></Icon>
                      <span class="color-disabled">{{item.commentCount}}条评价</span>
                    </span>
                  </p>
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
      </TabPane>
      <TabPane label="采摘" name="2">
        <div class="ng-ul-list-wrap">
          <ul class="ng-ul-list clear">
            <li v-for="(item,index) in data2" :key="index">
              <img :src="item.img">
              <div class="ng-njl-list-info">
                <div class="ng-njl-list-info-title">
                  <h3>{{item.name}}</h3>
                  <p>
                    <span class="ng-njl-list-info-title-location">
                      <i class="fa fa-map-marker"></i>
                      <span v-for="(locationItem,index) in item.location" :key="'location_' + index">
                        {{locationItem}}<span v-if="index < item.location.length - 1">·</span>
                      </span>
                    </span>
                    <span :title="item.score + '分'" class="ng-njl-list-info-title-score">
                      <Icon type="ios-star" v-for="fullStar in parseInt(item.score)" :key="'fullStar' + fullStar"></Icon>
                      <Icon v-if="(item.score - (parseInt(item.score))) > 0" type="ios-star-half"></Icon>
                      <Icon v-for="blankStar in (5 - Math.ceil(item.score))" :key="'blankStar' + blankStar" type="ios-star-outline"></Icon>
                      <span class="color-disabled">{{item.commentCount}}条评价</span>
                    </span>
                  </p>
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
      </TabPane>
      <TabPane label="垂钓" name="3">
        <div class="ng-ul-list-wrap">
          <ul class="ng-ul-list clear">
            <li v-for="(item,index) in data3" :key="index">
              <img :src="item.img">
              <div class="ng-njl-list-info">
                <div class="ng-njl-list-info-title">
                  <h3>{{item.name}}</h3>
                  <p>
                    <span class="ng-njl-list-info-title-location">
                      <i class="fa fa-map-marker"></i>
                      <span v-for="(locationItem,index) in item.location" :key="'location_' + index">
                        {{locationItem}}<span v-if="index < item.location.length - 1">·</span>
                      </span>
                    </span>
                    <span :title="item.score + '分'" class="ng-njl-list-info-title-score">
                      <Icon type="ios-star" v-for="fullStar in parseInt(item.score)" :key="'fullStar' + fullStar"></Icon>
                      <Icon v-if="(item.score - (parseInt(item.score))) > 0" type="ios-star-half"></Icon>
                      <Icon v-for="blankStar in (5 - Math.ceil(item.score))" :key="'blankStar' + blankStar" type="ios-star-outline"></Icon>
                      <span class="color-disabled">{{item.commentCount}}条评价</span>
                    </span>
                  </p>
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
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data1: [
        {
          name: '大院农家乐',
          img: '/static/image/njg_1.jpg',
          score: 4,
          desc: '四季采摘，适合全家出游。位于宁国市郊，距离市区仅20分钟车程，方便停车，有住宿和农家饭。',
          commentCount: 65,
          location: ['安徽', '宁国', '万家']
        },
        {
          name: '乡土农家乐',
          img: '/static/image/njg_2.jpg',
          score: 3.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '田园居农家体验',
          img: '/static/image/njg_3.jpg',
          score: 5,
          desc: '“采菊东篱下,悠然见南山”的体验',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '田园小憩',
          img: '/static/image/njg_4.jpg',
          score: 4.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        }
      ],
      data2: [
        {
          name: '草莓之家',
          img: '/static/image/njg_9.jpg',
          score: 4,
          desc: '四季采摘，适合全家出游。位于宁国市郊，距离市区仅20分钟车程，方便停车，有住宿和农家饭。',
          commentCount: 65,
          location: ['安徽', '宁国', '万家']
        },
        {
          name: '杨桃乐园农家乐',
          img: '/static/image/njg_10.jpg',
          score: 3.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '枇杷洞',
          img: '/static/image/njg_11.jpg',
          score: 5,
          desc: '“采菊东篱下,悠然见南山”的体验',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '樱桃世界',
          img: '/static/image/njg_12.jpg',
          score: 4.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        }
      ],
      data3: [
        {
          name: '老王家垂钓农家',
          img: '/static/image/njg_14.jpg',
          score: 4,
          desc: '四季采摘，适合全家出游。位于宁国市郊，距离市区仅20分钟车程，方便停车，有住宿和农家饭。',
          commentCount: 65,
          location: ['安徽', '宁国', '万家']
        },
        {
          name: '大军农家',
          img: '/static/image/njg_15.jpg',
          score: 3.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '阿勇龙虾垂钓',
          img: '/static/image/njg_16.jpg',
          score: 5,
          desc: '“采菊东篱下,悠然见南山”的体验',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        },
        {
          name: '闲逸农家乐园',
          img: '/static/image/njg_17.jpg',
          score: 4.6,
          desc: '农家灶台饭，体验最简单的生活。',
          commentCount: 24,
          location: ['安徽', '宁国', '南极']
        }
      ]
    }
  }
}
</script>

<style scoped>
div.ng-list-title{
  text-align: left;
}
div.ng-ul-list-wrap{
  padding: 5px;
}
ul.ng-ul-list{
  list-style: none;
}
ul.ng-ul-list > li{
  width: 24%;
  height: 280px;
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
  text-align: left;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-location{
  color: #bbbec4;
  font-weight: 200;
  font-size: 12px;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title .ng-njl-list-info-title-score{
  float: right;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-title > span{
  float: right;
}
ul.ng-ul-list > li .ng-njl-list-info .ng-njl-list-info-desc{
  color:#666;
  height: 60px;
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
