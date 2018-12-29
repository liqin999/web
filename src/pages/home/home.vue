<template>
    <el-container>
        <div style="height:40px">
            <img :src="imgUrl"
                 alt=""
                 style="width:100%;height:100%">
        </div>

        <el-header height="40px"
                   v-show="showNavBar">
            <header-bar></header-bar>
        </el-header>
        <router-view />
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
    methods: {},
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
</style>
