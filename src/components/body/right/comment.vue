<!--网友评论 实时展示 -->
<template>
  <div class="commnet-wrap">
    <p class="ng-module-title clear">
      <span class="ng-list-title-main">用户评价</span>
      <router-link class="ng-list-more" to="/llo">更多</router-link>
    </p>
    <div class="comment-container">
      <ul class="ng-ul-list-none comment-list-wrap" :style="{top}">
        <li class="clear" v-for="(item,index) in data" :key="index" :style="{visibility:item.isShow?'visiable':'hidden'}">
          <Avatar :src="item.avatar" size="small" class="ng-f-l"></Avatar>
          <div class="ng-comment-content-wrap clear">
            <div class="ng-f-r">
              <p class="ng-comment-content">{{item.content}}</p>
            </div>
          </div>
          <p class="text-align-r ng-comment-content-info">—— <span>{{item.username}}</span> 评价 <linkSite :title="item.placename" to="/ll"></linkSite></p>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
import linkSite from '../../link/site'
export default {
  data () {
    return {
      activeIndex: 0,
      interval: null,
      data: [
        {
          username: '春天花会开',
          placename: '红杉林',
          avatar: 'static/image/avatar/3.jpg',
          content: '大半年过去了，终于想要写一写 日本 的游记了，其实游记我已经记不得了，那就说哪是哪吧，说一说行程中有趣的事情。 功略放在最后 游记视频 人生的意义对于我来说，永远是爱。',
          isShow: true
        },
        {
          username: 'GL_open',
          placename: '红杉林',
          avatar: 'static/image/avatar/4.jpg',
          content: '身为一个地地道道的 湖南 人，对芒果台放了不下十遍的《还珠格格》倒背如流，因为从小就有了对 大理 的向往。长大以后，对 云南 的了解渐渐增多， 丽江 、 腾冲 、 香格里拉 、 西双版纳 ，都成了我的期待。',
          isShow: true
        },
        {
          username: '开心每一天',
          placename: '吴越古道',
          avatar: 'static/image/avatar/2.jpg',
          content: '吴越古道真的很好玩。',
          isShow: true
        },
        {
          username: '海归的海龟',
          placename: '天池',
          avatar: 'static/image/avatar/5.jpg',
          content: '下一次还回来。这次去了玩家，南极乡，还有天池。',
          isShow: true
        },
        {
          username: 'tiandia',
          placename: '天池',
          avatar: 'static/image/avatar/6.jpg',
          content: '这次是自驾游，很愉快的旅行。',
          isShow: true
        },
        {
          username: '海归的海龟',
          placename: '阿勇农家饭',
          avatar: 'static/image/avatar/7.jpg',
          content: '农家饭很好吃',
          isShow: true
        },
        {
          username: '海归的海龟',
          placename: '阿勇农家饭',
          avatar: 'static/image/avatar/7.jpg',
          content: '农家饭很好吃',
          isShow: true
        },
        {
          username: '开心每一天',
          placename: '吴越古道',
          avatar: 'static/image/avatar/2.jpg',
          content: '吴越古道真的很好玩。',
          isShow: true
        },
        {
          username: 'GL_open',
          placename: '红杉林',
          avatar: 'static/image/avatar/4.jpg',
          content: '身为一个地地道道的 湖南 人，对芒果台放了不下十遍的《还珠格格》倒背如流，因为从小就有了对 大理 的向往。长大以后，对 云南 的了解渐渐增多， 丽江 、 腾冲 、 香格里拉 、 西双版纳 ，都成了我的期待。',
          isShow: true
        }
      ]
    }
  },
  components: {linkSite},
  mounted () {
    this.interval = setInterval(() => {
      let val = this.activeIndex + 1
      if (val + 4 <= this.data.length) {
        this.activeIndex = val
      } else {
        clearInterval(this.interval)
      }
    }, 2000)
  },
  methods: {
  },
  computed: {
    top () {
      return this.activeIndex * 3.9 * -1 + 'rem'
    }
  }
}
</script>

<style scoped>
.commnet-wrap{
  height: 21.5rem;
}
p.ng-module-title{
  height: 1.5rem;
}
.comment-container{
  height: 15.6rem;
  width:100%;
  position: relative;
  overflow: hidden;
}
.ng-comment-content-wrap > div{
  position: relative;
  width: calc(100% - 35px);
  background-color: #555;
  color:#f2f2f2;
  padding: .25rem;
  border:.05rem solid #ececec;
  border-radius: .15rem;
}
.ng-comment-content-wrap > div::before{
  content: '';
  width:0;
  height: 0;
  border-width: .15rem .15rem .15rem 0;
  border-style: solid;
  border-color: transparent #555 transparent transparent;
  position: absolute;
  left: -.15rem;
  top:.35rem;
}
ul.comment-list-wrap{
  position: absolute;
  transition: top .3s;
}
ul.comment-list-wrap > li{
  padding:0 0 .5rem 0;
}
.ng-comment-content-info{
  height: 1rem;
  padding-top: .2rem;
  font-style: italic;
  color: #666;
}
p.ng-comment-content{
  height: 1.8rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  text-overflow: ellipsis;
}
</style>
