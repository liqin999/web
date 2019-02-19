<template>
    <div class="top-header-bar header-nav el-menu-demo">
        <img src="../../assets/img/topHead.png" >
        <span class="title">全媒体采标系统</span>
        <div>
            <!-- <el-menu
                :default-active="activeIndex2"
                mode="horizontal"
                @select="handleSelect"
                background-color="#0099ce 30%"
                text-color="#fff"
                active-text-color="#fff">
                <el-menu-item index="1">我的首页</el-menu-item>
                <el-menu-item index="2">工作台</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>

            </el-menu> -->
            <el-menu default-active="2"
                 mode="horizontal"
                 active-text-color="#fff"
                 >
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
                                     >
                            {{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.id"
                                 >
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
    </div>
</template>

<script>
export default {
    data () {
        return {
            navBar: [
                {
                    name: '我的首页', // 导航的名字
                    icon: 'el-icon-index', // 导航对应的icon
                    id: '1' // 唯一标示
                    // path: '/columnsLayout'// 路由标示
                },
                {
                    name: '工作台',
                    icon: 'el-icon-index',
                    id: '2'
                    // path: ''
                },
                {
                    name: '大数据',
                    icon: 'el-icon-index',
                    id: '3',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '新闻热点',
                            id: '3-1',
                            path: ''
                        },
                        {
                            name: '新闻线索',
                            id: '3-2',
                            path: ''
                        },
                        {
                            name: '影响力',
                            id: '3-3',
                            path: ''
                        }
                    ]
                },
                {
                    name: '资源库',
                    icon: 'el-icon-index',
                    id: '4',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '未定稿',
                            id: '4-1',
                            path: ''
                        },
                        {
                            name: '成品稿',
                            id: '4-2',
                            path: ''
                        },
                        {
                            name: '社外电讯',
                            id: '4-3',
                            path: ''
                        },
                        {
                            name: '订阅',
                            id: '4-4',
                            path: ''
                        }
                    ]
                },
                {
                    name: '指挥台',
                    icon: 'el-icon-index',
                    id: '5',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '报道指挥',
                            id: '5-1',
                            path: ''
                        },
                        {
                            name: '业务管理',
                            id: '5-2',
                            path: ''
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.top-header-bar{
    background-image: linear-gradient(146deg, #0095d7 0%, #0098d2 18%, #0099ce 30%, #009cc8 49%, #009acc 50%, #00b0a0 100%);
    height: 40px ;
    display: flex;
    align-items: center;
}
.top-header-bar .el-menu {
    background-color: transparent;
    display: flex;
    align-items: center;
}
.top-header-bar .title {
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    font-weight: normal;
}
.top-header-bar .el-menu-item .is-active {
    background: #0ba9ef;
}
.top-header-bar .el-submenu__title i {
    color: #fff;
}

.top-header-bar .el-menu--horizontal .el-menu-item.is-active {
    background: #0ba9ef !important;

}
</style>
