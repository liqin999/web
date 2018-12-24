<template>
    <!-- <div class="headerNav"> -->
    <!-- <div class="centerNav"> -->
    <el-menu :default-active="$route.path"
             mode="horizontal"
             :router="true"
             active-text-color="#fff"
             @select="handleSelect">
        <template v-for="item in navBar">
            <template v-if="item.chiled">
                <el-submenu :index="item.id"
                            popper-class="childMenu"
                            :key="item.id">
                    <template slot="title">
                        <i class="menu_icon"
                           :class="item.icon"></i>{{ item.name }}
                    </template>
                    <el-menu-item v-for="(subItem,i) in item.chiled"
                                  :key="i"
                                  :index="subItem.path"
                                  :route='{ path: subItem.path }'>
                        {{ subItem.name }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :key="item.id"
                              :index="item.path"
                              :route='{ path: item.path }'>
                    <template><span>
                            <i class="menu_icon"
                               :class="item.icon"></i>{{ item.name }}
                        </span>
                    </template>
                </el-menu-item>

            </template>
        </template>
    </el-menu>
    <!-- </div> -->
    <!-- </div> -->
</template>
<script>
export default {
    data () {
        return {
            navBar: [
                {
                    name: '栏目/版面库', // 导航的名字
                    icon: 'el-icon-index', // 导航对应的icon
                    id: '1', // 唯一标示
                    path: '/columnsLayout'// 路由标示
                },
                {
                    name: '我的稿库',
                    icon: 'el-icon-index',
                    id: '2',
                    path: '/myManuscript'
                },
                {
                    name: '其他人员库',
                    icon: 'el-icon-index',
                    id: '3',
                    path: '/otherManuscript'
                },
                {
                    name: '更多库',
                    icon: 'el-icon-index',
                    id: '4',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '媒体公共库',
                            id: '4-1',
                            path: '/mediaManuscript'
                        },
                        {
                            name: '组室公共库',
                            id: '4-2',
                            path: '/groupManuscript'
                        },
                        {
                            name: '专题库',
                            id: '4-3',
                            path: '/specialManuscript'
                        }
                    ]
                },
                {
                    name: '已签稿库',
                    icon: 'el-icon-index',
                    id: '5',
                    path: '/signedManuscript'
                },
                {
                    name: '大样调阅',
                    icon: 'el-icon-index',
                    id: '6',
                    path: '/reviewDetail'
                },
                {
                    name: '搜索',
                    icon: 'el-icon-index',
                    id: '7',
                    path: '/searchManuscript'
                },
                {
                    name: '稿件流向',
                    icon: 'el-icon-index',
                    id: '8',
                    path: '/manuscriptFlow'
                },
                {
                    name: '稿件管理',
                    icon: 'el-icon-index',
                    id: '9',
                    path: '/manuscriptSetting'
                },

                {
                    name: '写稿',
                    icon: 'el-icon-index',
                    id: '10',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '写稿器',
                            id: '10-1',
                            path: '/writeManuscript'
                        },
                        {
                            name: '投稿',
                            id: '10-2',
                            path: '/sendManuscript'
                        },
                        {
                            name: '新闻日历',
                            id: '10-3',
                            path: '/newsCalendar'
                        }
                    ]
                }

            ]
        }
    },
    mounted () {

    },
    methods: {
        handleSelect (key, keyPath) {
            // console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
// .headerNav {
//     height: 32px;
//     line-height: 32px;
// }
// .el-menu--horizontal > .el-menu-item {
//     height: 32px;
//     line-height: 32px;
// }
// .el-menu--horizontal > .el-menu-item.is-active {
//     border-bottom: 2px solid #0ba9ef !important;
//     color: #0ba9ef !important;
// }
// .el-menu--horizontal > .el-menu-item:hover {
//     border-bottom: 2px solid #0ba9ef !important;
//     color: #0ba9ef !important;
// }
// .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
//     border-bottom: 2px solid #409eff !important;
// }
// .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
//     border-bottom: 2px solid #409eff !important;
// }
// .el-menu--horizontal > .el-menu-item,
// .el-menu--horizontal > .el-submenu {
//     height: 32px;
//     line-height: 32px;
// }
// .el-menu--horizontal.childMenu .el-menu-item:hover {
//     color: #0ba9ef !important;
// }
</style>
<style>
/* .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 32px;
    line-height: 32px;
    border-bottom: 2px solid #0ba9ef;
    color: #0ba9ef;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #0ba9ef !important;
    color: #0ba9ef !important;
} */
</style>
