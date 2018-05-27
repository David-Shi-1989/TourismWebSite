<template>
  <div>
    <div id="ng_header">
      <div class="ng-header-logo">
        <i class="el-icon-picture" style="font-size:1.3rem;color:#FFF;" title="logo"></i>
        <!-- <img src="static/image/logo.png"> -->
      </div>
      <div class="ng-header-menuContainer">
        <ul class="ng-header-menus">
          <li v-for="(item,index) in menuArr" :key="index" :data-index="index">
            <!-- 一级菜单 -->
            <Dropdown v-if="item.children" trigger="click" placement="bottom">
              <a href="javascript:void(0)" :title="item.title">
                <span>{{item.title}}</span>
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem v-for="(item2,index2) in item.children" :key="index2">
                  <a href="javascript:void(0)" :title="item2.title">{{item2.title}}</a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <!-- 二级菜单 -->
            <router-link v-else :to="item.link" :title="item.title" :class="'ng-header-menu-1'+(item.active?' active':'')">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div style="float:right;">
        <UserLoginInfo></UserLoginInfo>
      </div>
    </div>
    <div id="ng_imgbg">
      <div class="img-wrap">
        <img src="/static/image/veer-145548331.jpg">
        <img src="/static/image/veer-141031161.jpg">
        <img src="/static/image/veer-145848499.jpg">
        <img src="/static/image/veer-169394215.jpg">
        <div class="clr"></div>
      </div>
      <div class="img-btn">
        <Icon type="chevron-left" class="btn-left" @click="imgWrapMove(-1)"></Icon>
        <Icon type="chevron-right" class="btn-right" @click="imgWrapMove(1)"></Icon>
      </div>
      <div class="img-desc">
        <h2>宁国农家乐</h2>
        <h3>小标题</h3>
        <p>安徽皖南宣城市宁国</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserLoginInfo from './header/user_info'
export default {
  name: 'Header',
  data () {
    return {
      menuArr: [
        {title: '主页', icon: 'el-icon-upload', link: '/', active: true},
        {
          title: '旅游',
          icon: 'el-icon-upload',
          isShowChildren: false,
          children: [
            {title: '旅游11111', icon: 'el-icon-upload', link: '/tourism/1'},
            {title: '旅游2', icon: 'el-icon-upload', link: '/tourism/2'}
          ]
        },
        {
          title: '游记',
          icon: 'el-icon-upload',
          isShowChildren: false,
          children: [
            {title: '游记1', icon: 'el-icon-upload'},
            {title: '游记2', icon: 'el-icon-upload'}
          ]
        },
        {title: '小视频', icon: 'el-icon-upload', link: '/video'}
      ],
      active: false,
      carousel: {
        activeIndex: 0
      }
    }
  },
  components: {UserLoginInfo},
  methods: {
    getImgCount () {
      return $('#ng_imgbg > div.img-wrap').find('img').length
    },
    imgWrapMove (step) {
      if (!isNaN(parseInt(step))) {
        var me = this
        let el = $('#ng_imgbg > div.img-wrap')
        let val = (this.carousel.activeIndex + step) % this.getImgCount()
        if (val < 0) {
          val += this.getImgCount()
        }
        el.animate({
          marginLeft: (-1 * val) + '00%'
        }, 300, function () {
          me.carousel.activeIndex = val
        })
      }
    }
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
  position: absolute;
  top:0;
  height: var(--header-height);
  line-height: var(--header-height);
  vertical-align: middle;
  background: rgba(0,0,0,.3);
  z-index: 10;
}
#ng_header .ng-header-logo {
  box-sizing: border-box;
  width: 4rem;
  height: 100%;
  padding-top: calc((var(--header-height) - 1.3rem) / 2);
  float: left;
}
#ng_header .ng-header-logo img{
  width:100%;
}

#ng_header .ng-header-menuContainer{
  float: left;
  margin-right: 5rem;
  box-sizing: border-box;
  height: var(--header-height);
  line-height: var(--header-height);
}
/**一级菜单**/
#ng_header ul.ng-header-menus{
  list-style: none;
  font-size: .78rem;
  box-sizing: border-box;
  height: var(--header-height);
  line-height: var(--header-height);
}
#ng_header ul.ng-header-menus > li {
  float: left;
  box-sizing: border-box;
  height: calc(var(--header-height) - .7rem);
  line-height: calc(var(--header-height) - .7rem);
  margin-right: 1.5rem;
  color: #dee3e6;
  cursor: pointer;
  margin-top: .5rem;
  position: relative;
}
#ng_header ul.ng-header-menus > li.active{
  border-bottom: .2rem #fff solid;
  color: #f0f9fe;
}
#ng_header ul.ng-header-menus > li:last-child{
  margin-right: 0;
}
.ng-header-menus-arrow{
  transition: all .25s ease-in-out;
}
.ng-header-menus-arrow.ng-header-menus-arrow-open{
  transform: rotate(90deg);
}

#ng_imgbg{
  width:100%;
  position: relative;
  box-shadow: 0px 1px 5px #666;
}
#ng_imgbg > div.img-wrap{
  position: relative;
  width: 400%;
}
#ng_imgbg img{
  width:25%;
  top:0;
  float: left;
}
#ng_imgbg > div.img-btn{
  position: absolute;
  top:50%;
  padding:0 20px;
  width: 100%;
}
#ng_imgbg > div.img-btn i{
  font-size: 25px;
  opacity: .6;
  transition: opacity .5s;
  cursor: pointer;
  background: rgba(0,0,0,.3);
  padding: 5px;
  color:rgba(0,0,0,.5);
}
#ng_imgbg > div.img-btn i:hover{
  opacity: 1;
}
#ng_imgbg > div.img-btn i.btn-left{
  float: left;
}
#ng_imgbg > div.img-btn i.btn-right{
  float: right;
}
#ng_imgbg > div.img-desc{
  background-color: rgba(0,0,0,.3);
  position: absolute;
  width:30%;
  height: calc(100% - var(--header-height));
  top:var(--header-height);
  color:#FBFBFB;
}
</style>
