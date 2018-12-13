<template>
	<!-- <div>左侧菜单</div> -->
    
    <div class="box" id="box">
       
        <div class="tip"> 
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item  :index="(index+1)+''" v-for="(item,index) in menuList" :key="index"  @click="clickMenu(index+1)">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-menu>
        </div>   
        <!-- 可拖拽位置 -->
        <div class="dlg_right" id ="dlg_right" ></div>
    </div>
    
</template>

<script>
export default {
    mounted(){
        this.rightMove();
    },
    methods: {
    // 菜单打开
    handleOpen(){

    },
    handleClose(){

    },
    // 点击事件,参数是选择的第几个
    clickMenu(choose) {
      this.$store.commit("changeTab", choose);
    },
    // 向右拖拽
    rightMove() {
        var el_dialog = document.getElementById("box");
        var minHeight = el_dialog.getAttribute("minheight");
        var minWidth = el_dialog.getAttribute("minwidth");
        var maxWidth = el_dialog.getAttribute("maxWidth");
        var right = document.getElementById("dlg_right");
        var mouseStart = {};
        var divStart = {};
        var rightStart = {};
        var bottomStart = {};
        // drag from right
        right.onmousedown = function(ev) {
            var oEvent = ev || event;
            mouseStart.x = oEvent.clientX;
            mouseStart.y = oEvent.clientY;
            rightStart.x = right.offsetLeft;
            if (right.setCapture) {
            right.onmousemove = doDragToRightBottomToRight;
            right.onmouseup = stopDragToRightBottomToRight;
            right.setCapture();
            } else {
            document.addEventListener(
                "mousemove",
                doDragToRightBottomToRight,
                true
            );
            document.addEventListener(
                "mouseup",
                stopDragToRightBottomToRight,
                true
            );
            }
        };
        function doDragToRightBottomToRight(ev) {
            var oEvent = ev || event;
            var l = oEvent.clientX - mouseStart.x + rightStart.x;
            // 53这个数，根据实际情况调整，也可以为 0
            el_dialog.style.width = (l) + "px";
            // if (l>maxWidth){
            //     el_dialog.style.width = maxWidth
            // }
        }
        function stopDragToRightBottomToRight() {
            if (right.releaseCapture) {
            right.onmousemove = null;
            right.onmouseup = null;
            right.releaseCapture();
            } else {
            document.removeEventListener(
                "mousemove",
                doDragToRightBottomToRight,
                true
            );
            document.removeEventListener(
                "mouseup",
                stopDragToRightBottomToRight,
                true
            );
            }
        }
    },
  },
  data() {
    return {
      showDate: "1534838548059",
      menuList: [
        { name: "导航一" },
        { name: "导航二" },
        { name: "导航三" },
        { name: "导航四" },
        { name: "导航五" }
      ]
    };
  }
};
</script>

<style scoped>
.box{
    display: -webkit-box;
    min-width: 250px;
    max-width: 400px;
}
.tip {
  /* margin-left: 20px; */
  float: left;
  width: calc(100% - 15px);;
}
.dlg_right {
  width: 15px;
  float: left;
  cursor: e-resize;
  overflow: hidden;
  opacity: 0;
  z-index: 3;
  margin-left: -15px;
}
</style>
