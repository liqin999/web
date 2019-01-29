<template>
  <div class="main_border">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo my_menu"
             mode="horizontal"
             @select="handleSelect">
      <!-- eventBus传值监听 -->
      <el-menu-item index="1"
                    @click="eventBus(1)">首页</el-menu-item>
      <el-menu-item index="2">新闻知识库</el-menu-item>
      <el-menu-item index="3">采集</el-menu-item>
      <el-menu-item index="4">转码</el-menu-item>
      <el-menu-item index="5">即时通讯</el-menu-item>
    </el-menu>
    <span class="allfont">
      <span>图标字使用：</span>
      <span v-moveDirective
            class="icon-uniE901 diyfont"></span>
      <span class="allfilter"> 全局过滤器：{{showDate|DateTime}}</span>
      <span>自定义指令-可拖动：</span>
    </span>
    <img v-moveDirective
         src="../../assets/img/bm_logo.jpg"
         class="logoimage">
    <!-- <img v-moveDirective :src="imageUrl" class="logoimage"> -->
    <!-- <div v-moveDirective  :style="{width:'100px', height:'100px', background:'red', position:'absolute', left:0, top:0}"></div> -->
  </div>
</template>

<script>
export default {
    data () {
        return {
            Bus: '',
            showDate: new Date().getTime(),
            imageUrl: '../static/img/bm_logo.jpg',
            activeIndex: '1'
        }
    },
    methods: {
    // eventBus传值
        eventBus (choose) {
            // Bus.$emit('getTarget', choose)
        },
        handleSelect (data) {
            console.log('选中得是', data)
        }
    }
}
</script>

<style scoped>
.main_border {
  border-bottom: 1px solid #e6e6e6;
}
.logoimage {
  right: 10px;
  z-index: 9999;
  position: absolute;
}
.my_menu {
  width: 500px;
  float: left;
}
.allfont {
  line-height: 60px;
}
.allfilter {
  margin-left: 30px;
  margin-right: 30px;
}
.diyfont {
  font-size: 20px;
  color: lightskyblue;
}
</style>
