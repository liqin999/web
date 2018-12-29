<template>
    <el-container>
        <el-aside width="260px"
                  class="system-aside">
            <el-menu :default-active="$route.path"
                     :router="true"
                     unique-opened="true"
                     @open="handleOpen"
                     @close="handleClose">
                <el-submenu :index="item.id"
                            v-for="item in menuData"
                            :key="item.id">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="subItem in item.chiled"
                                  :key="subItem.id"
                                  :index="subItem.path"
                                  :route='{ path: subItem.path }'>
                        {{ subItem.name }}
                    </el-menu-item>
                </el-submenu>

            </el-menu>
        </el-aside>
        <router-view></router-view>
    </el-container>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            menuData: [
                {
                    name: '媒体相关设置',
                    icon: 'el-icon-setting',
                    id: '1',
                    path: '',
                    chiled: [// 展示二级路由]
                        {
                            name: '媒体设置',
                            id: '1-1',
                            path: '/mediaSet'
                        },
                        {
                            name: '媒体拓展',
                            id: '1-2',
                            path: '/mediaExpand'
                        },
                        {
                            name: '版面设置',
                            id: '1-3',
                            path: '/pageSet'
                        },
                        {
                            name: '叠次设置',
                            id: '1-4',
                            path: '/stackSet'
                        },
                        {
                            name: '栏目设置',
                            id: '1-5',
                            path: '/columnSet'
                        },
                        {
                            name: '专题设置',
                            id: '1-6',
                            path: '/specialSet'
                        }

                    ]
                },
                {
                    name: '系统设置',
                    icon: 'el-icon-setting',
                    id: '2',
                    path: '',
                    chiled: [// 展示二级路由]
                        {
                            name: '角色管理',
                            icon: 'el-icon-index',
                            id: '2-1',
                            path: '/role'
                        },
                        {
                            name: '权限管理',
                            icon: 'el-icon-index',
                            id: '2-2',
                            path: '/authority'
                        },
                        {
                            name: '用户管理',
                            icon: 'el-icon-index',
                            id: '2-3',
                            path: '/userManage'
                        },
                        {
                            name: '菜单设置',
                            icon: 'el-icon-index',
                            id: '2-4',
                            path: '/menu'
                        },
                        {
                            name: '界面管理',
                            icon: 'el-icon-index',
                            id: '2-5',
                            path: '/interfaces'
                        },
                        {
                            name: '部门管理',
                            icon: 'el-icon-index',
                            id: '2-6',
                            path: '/department'
                        }

                    ]
                },
                {
                    name: '基本信息设置',
                    icon: 'el-icon-setting',
                    id: '3',
                    path: '',
                    chiled: [// 展示二级路由]
                        {
                            name: '公共线索来源设置',
                            icon: 'el-icon-index',
                            id: '3-1',
                            path: '/clueSource'
                        },
                        {
                            name: '公共参数设置',
                            icon: 'el-icon-index',
                            id: '3-2',
                            path: '/commonParam'
                        },
                        {
                            name: '稿件类型设置',
                            icon: 'el-icon-index',
                            id: '3-3',
                            path: '/manuscriptType'
                        },
                        {
                            name: '作者类型设置',
                            icon: 'el-icon-index',
                            id: '3-4',
                            path: '/authorType'
                        },
                        {
                            name: '电讯稿产品设置',
                            icon: 'el-icon-index',
                            id: '3-5',
                            path: '/telecProducts'
                        },
                        {
                            name: '稿件题材设置',
                            icon: 'el-icon-index',
                            id: '3-6',
                            path: '/manuscriptTheme'
                        },
                        {
                            name: '稿件来源设置',
                            icon: 'el-icon-index',
                            id: '3-7',
                            path: '/manuscriptSource'
                        },
                        {
                            name: '稿件分类设置',
                            icon: 'el-icon-index',
                            id: '3-8',
                            path: '/manuscriptClassify'
                        }

                    ]
                }
            ]
        }
    },
    mounted () {

    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose () {

        }
    }
}
</script>
<style lang="scss">
.system-aside {
    padding: 10px 0;
    .el-menu {
        background: none !important;
        border: none !important;
        .el-menu-item,
        .el-submenu__title {
            height: 30px;
            line-height: 30px;
        }
    }
}
.el-menu-item.is-active {
    color: nth($primary-color, 1);
    background-color: #fff;
    border-left: 4px solid nth($primary-color, 1);
}
.el-menu-item:focus,
.el-menu-item:hover {
    color: nth($primary-color, 1);
    background-color: #fff;
}
</style>
