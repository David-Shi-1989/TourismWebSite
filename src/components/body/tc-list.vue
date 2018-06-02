<!--旅行社 列表 -->
<template>
  <div style="padding:0 15px;">
    <div class="ng-list-title">
      <p class="ng-list-title-main">套餐推荐</p>
      <p class="ng-list-title-sub">带上相机和心情，其他的交给我们。</p>
    </div>
    <ul class="ng-ul-list clear">
      <li v-for="(item,index) in data" :key="index" :data-id="item.id">
        <div class="ng-tc-wrap ng-shadow">
          <div class="ng-tc-album">
            <img v-for="(imgItem,imgIndex) in item.img" :key="imgIndex" :src="imgItem" :style="{display:(imgIndex==0?'block':'none')}">
          </div>
          <span class="ng-tc-tag">{{item.title}}</span>
          <div class="ng-tc-info">
            <table class="tc-info-tb">
              <tr>
                <th style="width:65px;text-align:right;"></th>
                <th></th>
              </tr>
              <tr>
                <td><span class="ng-colon-after">路线</span></td>
                <td>
                  <span v-for="(pathItem, pathIndex) in item.path" :key="pathIndex" class="path-item-tag">{{pathItem}}</span>
                </td>
              </tr>
              <tr>
                <td><span class="ng-colon-after">套餐内容</span></td>
                <td><span>{{item.content}}</span></td>
              </tr>
              <tr>
                <td style="vertical-align:middle;"><span class="ng-colon-after">价格</span></td>
                <td><span class="ng-rmb-before money-item">{{item.price}}</span></td>
              </tr>
            </table>
            <div class="ng-tc-btn">
              <p>
                <span><i class="fa fa-paw" :title="'有'+item.visitcount+'人去过'"></i>{{item.visitcount}}</span>
                <span><i class="fa fa-heart-o" :title="'有'+item.likecount+'想去'"></i>{{item.likecount}}</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          id: '002a213',
          img: ['/static/image/tc/xl_1.jpg', '/static/image/tc/xl_2.jpg'],
          title: '网红红杉林',
          path: ['红杉林', '天池景区', '天天农家乐'],
          content: '宁国市区集合，包含一天内大巴车费，以及中午农家乐一顿农家饭。',
          price: 399,
          likecount: 1321,
          visitcount:188
        },
        {
          id: '002a21a2',
          img: ['/static/image/tc/mw_1.jpg', '/static/image/tc/mw_2.jpg', '/static/image/tc/mw_3.jpg', '/static/image/tc/mw_4.jpg'],
          title: '恩龙世界木屋村',
          path: ['恩龙世界木屋村'],
          content: '宁国市区集合，包含一天内大巴车费，以及中午农家乐一顿农家饭。',
          price: 199,
          likecount: 698,
          visitcount:123
        },
        {
          id: '002a213',
          img: ['/static/image/tc/bq1.jpg', '/static/image/tc/bq2.jpg', '/static/image/tc/bq3.jpg', '/static/image/tc/bq4.jpg'],
          title: '板桥原始森林',
          path: ['板桥原始森林', '爱国农家乐'],
          content: '宁国市区集合，包含一天内大巴车费，以及中午农家乐一顿农家饭。',
          price: 399,
          likecount: 478,
          visitcount:79
        }
      ]
    }
  }
}
</script>

<style scoped>
div.ng-tc-wrap{
}
div.ng-tc-album{
  position: relative;
  cursor: pointer;
}
div.ng-tc-album > img{
  display: block;
}
div.ng-tc-album > img:nth-child(n+2){
  position: absolute;
  top:0;
  left: 0;
}
div.ng-list-title {
  text-align: left;
  margin-bottom: 10px;
}
div.ng-list-title p.ng-list-title-main {
  font-size: 25px;
  color: #484848;
  font-weight: 700;
}
div.ng-list-title p.ng-list-title-sub {
  font-size: 16px;
  color: #484848;
  font-weight: 300;
}
ul.ng-ul-list {
  list-style: none;
}
ul.ng-ul-list > li{
  width: 31%;
  box-sizing: border-box;
  float: left;
  position: relative;
  border-radius: 1px;
  margin-right: 2%;
}
ul.ng-ul-list > li:last-child {
  margin-right: 0 !important;
}
ul.ng-ul-list > li img {
  width: 100%;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
ul.ng-ul-list > li .ng-tc-tag {
  position: absolute;
  top: 0;
  right: 10px;
  background-color: rgba(199, 125, 123, 0.9);
  color: #ffffff;
  padding: 2px 6px;
}
ul.ng-ul-list > li .ng-tc-info {
  width: 100%;
  padding:5px 0;
  background-color: #fcfcfc;
  border:1px solid #e0e0e0;
}
table.tc-info-tb td{
  vertical-align: top;
  padding-bottom: 4px;
}
table.tc-info-tb tr > td:first-child{
  text-align: right;
  padding-right: 5px;
}
table.tc-info-tb span.ng-colon-after{
  color: #bbb;
}
span.path-item-tag {
  border: 1px solid #aaa;
  padding: 1px 2px;
  color: #6a6a6a;
  border-radius: 2px;
  font-size: 12px;
  margin-right: 4px;
}
span.money-item {
  font-size: 19px;
  color: #ff9d00;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn{
  font-size: 12px;
  color:#888;
  padding:2px 0 0 0;
  border-top: 1px solid #efefef;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn > p{
  text-align:right;
  padding:0 6px;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn > p > span{
  margin-right: 15px;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn > p > span:last-child{
  margin-right: 0;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn i{
  cursor: pointer;
  margin-right: 5px;
}
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn i.fa-heart,
ul.ng-ul-list > li .ng-tc-info .ng-tc-btn i.fa-heart-o{
  color:#FFC0CB;
}
</style>
