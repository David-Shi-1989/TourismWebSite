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
                  {{item2.title}}
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
      active: false
    }
  },
  components: {UserLoginInfo},
  methods: {
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
  top:0;
  height: var(--header-height);
  line-height: var(--header-height);
  vertical-align: middle;
  background: rgba(0,0,0,.3);
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
  /* height: 25rem;
  background-color: rgba(0,0,0,.3);
  background-image: url("/static/image/veer-169394215.jpg");
  background-size: 100% auto;
  background-position: 0 -15rem; */
}
</style>
