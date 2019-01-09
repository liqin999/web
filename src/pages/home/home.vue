<template>
    <el-container>
        <el-header style="height:40px">
            <img :src="imgUrl"
                 alt=""
                 style="width:100%;height:100%">
        </el-header>
        <el-container>
            <transition name="fade">
                <el-aside class="aside-left"
                          width="60px"
                          v-if="show">
                    <div class="left-i"
                         @click="show=false"><i class="iconfont icon-caidan"></i><br />

                    </div>
                    <div class="left-span mt10"><i class="iconfont icon-zuoce-tongxun"></i>
                        <span>通讯</span>
                    </div>
                </el-aside>
            </transition>
            <el-container>
                <el-header height="40px"
                           :class="{'headerA':!show}">
                    <div v-if="!show"
                         @click="show=true"
                         class="left-show"><i class="iconfont icon-caidan"></i>
                    </div>
                    <div v-show="showNavBar">
                        <header-bar></header-bar>
                    </div>
                </el-header>
                <router-view />
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
// import leftMenu from "@/components/leftmenu/leftMenu.vue";
import headerBar from '@/components/navigation/headerBar.vue'
// import navigationBar from "@/components/navigation/navigationBar.vue";
// import loginIn from '@/server/server'
import mixin from '@/components/shared/mixins/powerMixins.js'
export default {
    mixins: [mixin],
    data () {
        return {
            show: true,
            imgUrl: require('@/assets/img/fadeHead.png'),
            showNavBar: true
        }
    },
    beforeMount () {
        if (this.$route.path === '/dataService' || this.$route.path === '/review') {
            this.showNavBar = false
        } else {
            this.showNavBar = true
        }
    },
    components: {
        // leftMenu,
        // navigationBar,
        headerBar

    },
    mounted () {
        // 混入中的方法
        this.pm_toggleShow()
        // this.$store.dispatch('showLoading');
        // setTimeout(() => {
        //     this.$store.dispatch('cloaseLoading');
        // }, 2000);
    },
    methods: {
    },
    watch: {
        '$route' (to, from) {
            if (this.$route.path === '/dataService' || this.$route.path === '/review') {
                this.showNavBar = false
            } else {
                this.showNavBar = true
            }
        }
    }

}
</script>
<style>
.left-show {
    width: 50px;
    position: absolute;
    height: 40px;
    line-height: 40px;
    left: 0px;
    text-align: center;
    cursor: pointer;
    background: #282828 !important;
    border-left: 1px solid #333;
}
.left-span {
    width: 58px;
    /* height: 60px; */
    padding-left: 13px;
    cursor: pointer;
    padding-top: 6px;
    color: #fff;
    background: #4c5158;
}
.left-span i {
    font-size: 28px !important;
}
.left-span span {
    display: block;
    line-height: 25px;
    font-size: 12px;
}
.headerA {
    padding-left: 50px !important;
}
.left-show i {
    font-size: 30px !important;
    color: #fff;
}
.aside-left {
    background: #282828 !important;
    margin-right: -3px;
    border-left: 1px solid #333;
}
.left-i {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 12px;
    /* text-align: center; */
    cursor: pointer;
    color: #fff;
}

.left-i i {
    font-size: 30px !important;
    color: #fff;
}
</style>
