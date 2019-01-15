<!--
 * @Author: 史薇薇
 * @Date: 2018-12-19 09:34:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-01-10 14:46:19
 * @Description: 导航条样式改版
 -->
<template>
    <div class="header-nav">
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
    </div>
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
                    name: '稿源库管理',
                    icon: 'el-icon-index',
                    id: '9',
                    path: '/manuscriptSetting'
                },

                {
                    name: '更多',
                    icon: 'el-icon-index',
                    id: '10',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '投稿',
                            id: '10-4',
                            path: '/sendManuscript'
                        },
                        {
                            name: '废稿库',
                            id: '10-1',
                            path: '/invalidManuscript'
                        },
                        {
                            name: '写稿器',
                            id: '10-2',
                            path: '/writeManuscript'
                        }

                        // {
                        //     name: '新闻日历',
                        //     id: '10-3',
                        //     path: '/newsCalendar'
                        // }
                    ]
                }
                // {
                //     name: '后台管理',
                //     icon: 'el-icon-index',
                //     id: '11',
                //     path: '/systemBackground'
                // }

            ]
        }
    },
    mounted () {

    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss" scoped>
// 若导航条有下拉菜单
.el-menu--horizontal .el-menu-item.is-active {
    @extend %gradient-bgcolor;
}
</style>
