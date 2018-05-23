<template>
  <div id="ng_header">
    <div class="ng-header-logo">
      <i class="el-icon-picture" style="font-size:1.3rem;color:#FFF;" title="logo"></i>
      <!-- <img src="static/image/logo.png"> -->
    </div>
    <div class="ng-header-menuContainer">
      <ul class="ng-header-menus">
        <li v-for="(item,index) in menuArr" :key="index" :data-index="index">
          <!-- 一级菜单 -->
          <el-dropdown v-if="item.children" trigger="click">
            <span class="el-dropdown-link">{{item.title}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item2,index2) in item.children" :key="index2">
                <router-link :to="item2.link ? item2.link : '/404'" :title="item2.title" class="ng-header-menu-2" active-class="active">{{item2.title}}</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
            <!-- 二级菜单 -->
          </el-dropdown>
          <router-link v-else :to="item.link" :title="item.title">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuArr: [
        {title: '主页', icon: 'el-icon-upload', link: '/'},
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
  methods: {
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
  height: var(--header-height);
  line-height: var(--header-height);
  vertical-align: middle;
  background-color: #53cc64ef;
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
  float: right;
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
</style>
