<template>
    <div>
        <div style="height:40px">
            <img :src="imgUrl"
                 alt=""
                 style="width:100%;height:100%">
        </div>
        <div class="top">
            <header-bar></header-bar>
        </div>
        <div class="main">
            <router-view />
        </div>
    </div>
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
            imgUrl: require('@/assets/img/fadeHead.png')
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
    methods: {}
}
</script>
<style>
/* .top {
    width: 100%;
} */
</style>
