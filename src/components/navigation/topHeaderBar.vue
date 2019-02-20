<template>
    <div class="top-header-bar header-nav el-menu-demo">
        <img src="../../assets/img/topHead.png">
        <div class="title">
            <span >全媒体采标系统</span>
        </div>
        <div>
            <el-menu default-active="1"
                     mode="horizontal">
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
                                          :index="item.id"
                                          :key="i">
                                {{ subItem.name }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :key="item.id"
                                      :index="item.id">
                            <template><span>
                                    <i class="menu_icon"
                                       :class="item.icon"></i>{{ item.name }}
                                </span>
                            </template>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
            <!-- <el-menu
                class="menu2"
                :default-active="activeIndex"
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
        </div>
        <div style="position:absolute;right:0px;">
         <el-menu class="menu2">
                <el-button size="mini" round>+快讯</el-button>
                <el-button size="mini" round>+</el-button>
                <img src="../../assets/img/messageN2.png"/>
            <el-menu-item index="13" style="padding-left:0px;padding-right: 0px">
                <img src="../../assets/img/screenAllN2.png"/>
            </el-menu-item>
            <el-menu-item index="14" style="padding-left:0px;padding-right: 0px">
                <img src="../../assets/img/broadcast2.png"/>
            </el-menu-item>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        测试部门-测试组-测试<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="dropDownWidth" style="width: 180px">
                        <el-dropdown-item>切换身份/角色</el-dropdown-item>
                        <div class="userEdit"><span >测试部门-测试组-测试</span></div>
                        <el-dropdown-item><i class="el-icon-setting"></i> 验校</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-setting"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item ><i class="el-icon-question"></i> 版本(0.9.1)</el-dropdown-item>
                        <el-dropdown-item ><i class="el-icon-question"></i> 帮助</el-dropdown-item>
                        <div style="text-align:center">
                            <el-button  size="mini" style="padding: 7px 40px">退出</el-button>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
            <el-menu-item index="16" style="padding-left:0px;padding-right: 0px">
                <img src="../../assets/img/chatN2.png"/>
            </el-menu-item>
        </el-menu>

        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '',
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
                    // path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '新闻热点',
                            id: '3-1'
                            // path: ''
                        },
                        {
                            name: '新闻线索',
                            id: '3-2'
                            // path: ''
                        },
                        {
                            name: '影响力',
                            id: '3-3'
                            // path: ''
                        },
                        {
                            name: '采用统计',
                            id: '3-4'
                            // path: ''
                        },
                        {
                            name: '专题分析',
                            id: '3-5'
                            // path: ''
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
                            id: '4-1'
                            // path: ''
                        },
                        {
                            name: '成品稿',
                            id: '4-2'
                            // path: ''
                        },
                        {
                            name: '社外电讯',
                            id: '4-3'
                            // path: ''
                        },
                        {
                            name: '订阅',
                            id: '4-4'
                            // path: ''
                        },
                        {
                            name: '内部网站',
                            id: '4-5'
                            // path: ''
                        },
                        {
                            name: '高清视频资料',
                            id: '4-6'
                            // path: ''
                        },
                        {
                            name: '现场云',
                            id: '4-7'
                            // path: ''
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
                },
                {
                    name: '实验室',
                    icon: 'el-icon-index',
                    id: '6',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '写稿机器人',
                            id: '6-1',
                            path: ''
                        },
                        {
                            name: '突发事件预警',
                            id: '6-2',
                            path: ''
                        },
                        {
                            name: '协同工作台',
                            id: '6-3',
                            path: ''
                        },
                        {
                            name: '人脸识别',
                            id: '6-4',
                            path: ''
                        },
                        {
                            name: '语音识别工具',
                            id: '6-5',
                            path: ''
                        },
                        {
                            name: '自动翻译',
                            id: '6-6',
                            path: ''
                        }
                    ]
                },
                {
                    name: '工具箱',
                    icon: 'el-icon-index',
                    id: '7'
                    // path: ''
                },
                {
                    name: '协同办公',
                    icon: 'el-icon-index',
                    id: '8'
                    // path: ''
                },
                {
                    name: '网盘',
                    icon: 'el-icon-index',
                    id: '9'
                    // path: ''
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.top-header-bar {
    background-image: linear-gradient(
        146deg,
        #0095d7 0%,
        #0098d2 18%,
        #0099ce 30%,
        #009cc8 49%,
        #009acc 50%,
        #00b0a0 100%
    );
    height: 40px;
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
    margin-right: 10px;
}
.top-header-bar .el-menu-item {
    padding: 0 6px;
}
.top-header-bar .el-submenu__title {
    padding: 0 6px;
}
.top-header-bar .el-submenu__title i {
    color: #fff;
}
.top-header-bar .el-menu--horizontal .el-menu-item.is-active {
    background: #0ba9ef !important;
    color: #fff;
}
.top-header-bar .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    background: #0ba9ef !important;
}
.top-header-bar .el-menu--horizontal > .el-menu-item {
    border: none !important;
    color: #fff
}
.top-header-bar .el-menu--horizontal > .el-submenu .el-submenu__title {
    color: #fff;
}
.top-header-bar .pull-right {
    float: right;
}
.top-header-bar .menu2 .el-menu-item {
    height: 40px;
    display: flex;
    align-items: center;
}
.top-header-bar .menu2 .el-button {
    background: transparent;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
}
.top-header-bar .menu2 .el-button--mini, .el-button--mini.is-round {
    padding: 4px 15px;
}
.top-header-bar .menu2-item .el-menu-item{
    padding: 0px 0px;
}
.userEdit {
    background: #e5f7f5;
    height: 40px;
    width:150px;
    text-align:center;
    margin: 0 auto;
    line-height:40px
}
.top-header-bar .el-dropdown {
    color: #fff;
    font-size: 14px;
}
</style>
