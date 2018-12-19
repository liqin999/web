<template>
<div>
    <div class="top">
        <!-- <navigation-bar></navigation-bar> -->
        <header-bar></header-bar>
    </div>
    <!-- <div class="left">
        <left-menu></left-menu>
    </div> -->
    <div class="main">
        <router-view />
    </div>
</div>
</template>

 

<script>


// import leftMenu from "@/components/leftmenu/leftMenu.vue";
import headerBar from "@/components/navigation/headerBar.vue";
// import navigationBar from "@/components/navigation/navigationBar.vue";
import loginIn from "@/server/server";

import mixin from "@/components/shared/mixins/powerMixins.js"
export default {
    mixins: [mixin],
    data() {
        return {};
    },
    components: {
        // leftMenu,
        // navigationBar,
        headerBar,
      
    },
    mounted() {
        // 混入中的方法
        this.pm_toggleShow();
        // 显示关闭等待页 
        // this.$store.dispatch('showLoading');
        // setTimeout(() => {
        //     this.$store.dispatch('cloaseLoading');
        // }, 2000);
    },
    methods: {}
};
</script>
 

<style>
.main {
    height: 400px;
    /* width: calc(100% - 300px); */
    min-width: 940px;
    overflow-x: auto;
    float: left;
}

.top {
    height: 70px;
    width: 100%;
    /* padding-top: 1px; */
}

.left {
    /* width: 300px; */
    height: 400px;
    padding-top: 1px;
    /* height: calc(100% - 50px); */
    float: left;

}
</style>
