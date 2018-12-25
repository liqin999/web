<template>
    <div class="clearfix">
        <div class="con-wrap">
            <div class="left-con">
                <el-menu :default-active="$route.path"
                         :router="true"
                         class="el-menu-vertical-demo"
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
            </div>
            <div class="right-con">
                <!-- 后台设置的页面 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
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
                            path: ''
                        },
                        {
                            name: '权限管理',
                            icon: 'el-icon-index',
                            id: '2-2',
                            path: ''
                        },
                        {
                            name: '用户管理',
                            icon: 'el-icon-index',
                            id: '2-3',
                            path: ''
                        },
                        {
                            name: '菜单设置',
                            icon: 'el-icon-index',
                            id: '2-4',
                            path: ''
                        },
                        {
                            name: '界面管理',
                            icon: 'el-icon-index',
                            id: '2-5',
                            path: ''
                        },
                        {
                            name: '部门管理',
                            icon: 'el-icon-index',
                            id: '2-6',
                            path: ''
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
<style lang="scss" scoped>
.con-wrap {
    display: flex;
}
.left-con {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    height: calc(100vh - 90px);
    margin-right: 10px;
}
.right-con {
    border: 1px solid #ddd;
    border-bottom: none;
    height: calc(100vh - 90px);
    width: 100%;
}
</style>
<style>
</style>
