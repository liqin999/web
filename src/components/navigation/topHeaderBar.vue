<template>
    <div class="top-header-bar header-nav el-menu-demo">
        <img src="../../assets/img/topHead.png">
        <div class="title">
            <span>全媒体采标系统</span>
        </div>
        <div>
            <el-menu :default-active="activeIndex"
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
                                          @click="openUrl(subItem.path)"
                                          :index="item.id"
                                          :key="i">
                                {{ subItem.name }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :key="item.id"
                                      @click="openUrl(item.path)"
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
                <el-button size="mini"
                           round>+快讯</el-button>
                <el-button size="mini"
                           round>+Flash</el-button>
                <el-button size="mini"
                           round>+</el-button>
                <img src="../../assets/img/messageN2.png" />
                <el-menu-item index="13"
                              style="padding-left:0px;padding-right: 0px">
                    <img src="../../assets/img/screenAllN2.png" />
                </el-menu-item>
                <el-menu-item index="14"
                              style="padding-left:0px;padding-right: 0px">
                    <img src="../../assets/img/broadcast2.png" />
                </el-menu-item>
                <el-dropdown trigger="click">
                    <el-tooltip content="验收测试终审发稿人2 测试部门-测试组-编辑"
                                placement="bottom"
                                effect="light">
                        <span class="el-dropdown-link">
                            验收测试终审发稿人2<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                    </el-tooltip>
                    <el-dropdown-menu slot="dropdown"
                                      class="dropDownWidth"
                                      style="width: 180px">
                        <el-dropdown-item>切换身份/角色</el-dropdown-item>
                        <div class="userEdit"><span>测试部门-测试组-编辑</span></div>
                        <el-dropdown-item>
                            <template>
                                <span @click="openUrl('http://cmp.xinhua-news.cn/checker/deptex')">
                                    <i class="el-icon-setting"></i> 验校
                                </span>
                            </template>
                        </el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-setting"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-question"></i> 版本(0.9.1)</el-dropdown-item>
                        <el-dropdown-item>
                            <template>
                                <span @click="openUrl('http://cmp.xinhua-news.cn/ai-help/guide/tree?sys=1')">
                                    <i class="el-icon-question"></i> 帮助
                                </span>
                            </template>

                        </el-dropdown-item>
                        <div style="text-align:center">
                            <el-button @click="loginOut"
                                       size="mini"
                                       style="padding: 7px 40px">退出</el-button>
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-menu-item index="16"
                              style="padding-left:0px;padding-right: 0px">
                    <img src="../../assets/img/chatN2.png" />
                </el-menu-item>
            </el-menu>

        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '4',
            navBar: [
                {
                    name: '我的首页', // 导航的名字
                    icon: 'el-icon-index', // 导航对应的icon
                    id: '1', // 唯一标示
                    path: 'http://home.cmp.xinhua-news.cn/home#/'// 路由标示
                },
                {
                    name: '工作台',
                    icon: 'el-icon-index',
                    id: '2',
                    path: '/columnsLayout'
                },
                // {
                //     name: '新媒体',
                //     icon: 'el-icon-index',
                //     id: '3',
                //     path: ''
                // },
                {
                    name: '资源库',
                    icon: 'el-icon-index',
                    id: '4',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '未定稿',
                            id: '4-1',
                            path: 'undefinedDraft'
                        },
                        {
                            name: '成品稿',
                            id: '4-2',
                            path: 'finishedDraft'
                        },
                        {
                            name: '社外电讯',
                            id: '4-3',
                            path: 'telecDraft'
                        },
                        {
                            name: '订阅',
                            id: '4-4',
                            path: 'orderDraft'
                        },
                        {
                            name: '内部网站',
                            id: '4-5',
                            path: 'http://static.cms.xinhua-news.cn/'
                        },
                        {
                            name: '高清视频资料',
                            id: '4-6',
                            path: 'http://video.xinhua-news.cn/index.php?user/openPlatform&verifycode=token-c0dc4b8d-a3ca-436c-9d5f-3fe9a0270e2a-E678E0368D4CF07A59F051FEA2104A5E-2a8f0ff4-5688-4e30-a1b7-869b3af776b6&app=zlk'
                        }
                    ]
                },
                {
                    name: '大数据',
                    icon: 'el-icon-index',
                    id: '5',
                    // path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '新闻热点',
                            id: '5-1',
                            path: 'http://hotspot.xinhua-news.cn/dist/main.html#/plan/hotheadline?hotNav=1&amp;menutype=hot'
                        },
                        {
                            name: '新闻线索',
                            id: '5-2',
                            path: 'http://hotspot.xinhua-news.cn/dist/index.html#/plan/timecue/focus?clueNav=11&amp;menutype=news'
                        },
                        {
                            name: '影响力',
                            id: '5-3',
                            path: 'http://hotspot.xinhua-news.cn/dist/index.html#/plan/InfluenceList?infVal=1&amp;menutype=influ'
                        },
                        {
                            name: '采用统计',
                            id: '5-4'
                            // path: ''
                        },
                        {
                            name: '业务管理',
                            id: '5-5',
                            path: 'http://bms.xinhua-news.cn/xhs/html/index.html'
                        },
                        {
                            name: '专题分析',
                            id: '5-6',
                            path: 'http://hotspot.xinhua-news.cn/dist/main.html#/plan/eventanalysis/eventmanagement?menutype=event'
                        }
                    ]
                },
                {
                    name: '指挥',
                    icon: 'el-icon-index',
                    id: '6',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '报道指挥',
                            id: '6-1',
                            path: 'http://report.xinhua-news.cn/report/myPending/MY'
                        }
                    ]
                },
                {
                    name: '实验室',
                    icon: 'el-icon-index',
                    id: '7',
                    path: '',
                    chiled: [// 展示二级路由
                        {
                            name: '写稿机器人',
                            id: '7-1',
                            path: 'http://home.cmp.xinhua-news.cn/storywriterrobot'
                        },
                        {
                            name: '突发事件预警',
                            id: '7-2',
                            path: 'http://home.cmp.xinhua-news.cn/emergencywarning'
                        },
                        {
                            name: '协同工作台',
                            id: '7-3',
                            path: 'http://home.cmp.xinhua-news.cn/collaborativeplatform'
                        },
                        {
                            name: '人脸识别',
                            id: '7-4',
                            path: 'http://edit.xinhua-news.cn/CVDemoPage/'
                        },
                        {
                            name: '语音转写',
                            id: '7-5',
                            path: ''
                        },
                        {
                            name: '语音建稿',
                            id: '7-6',
                            path: 'http://edit.xinhua-news.cn:8888/VoiceToText/#/'
                        },
                        {
                            name: '自动翻译',
                            id: '7-7',
                            path: 'http://edit.xinhua-news.cn:8888/ai/translatePage/'
                        },
                        {
                            name: '语音建稿（新）',
                            id: '7-8',
                            path: 'http://edit.xinhua-news.cn:8888/AudioToText/#/main/home'
                        },
                        {
                            name: '智能校验',
                            id: '7-9',
                            path: 'http://edit.xinhua-news.cn:8888/api/v1/ai/check_web/'
                        }
                    ]
                },
                {
                    name: '工具箱',
                    icon: 'el-icon-index',
                    id: '8',
                    path: 'http://home.cmp.xinhua-news.cn/toolbox#/'
                },
                {
                    name: '协同办公',
                    icon: 'el-icon-index',
                    id: '9',
                    path: 'http://home.cmp.xinhua-news.cn/remind'
                },
                {
                    name: '网盘',
                    icon: 'el-icon-index',
                    id: '10'
                    // path: ''
                },
                {
                    name: '资源库V2',
                    icon: 'el-icon-index',
                    id: '11',
                    path: 'http://edit.xinhua-news.cn:8888/resourcev2/main.html#/resource/halfStory'

                }
            ]
        }
    },
    methods: {
        openUrl (url) {
            let reg = /(http|https):\/\/([\w.]+\/?)\S*/g
            if (url === '/columnsLayout') {
                this.$router.push({
                    path: '/columnsLayout'
                })
            } else
                if (reg.test(url)) {
                    window.open(url)
                } else {
                    this.$router.push({
                        path: '/dataService'
                    })
                    this.$store.commit('changeResourceName', url)
                }
        },
        loginOut () {
            this.$router.push({
                path: '/login'
            })
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
.top-header-bar
    .el-menu--horizontal
    > .el-submenu.is-active
    .el-submenu__title {
    background: #0ba9ef !important;
}
.top-header-bar .el-menu--horizontal > .el-menu-item {
    border: none !important;
    color: #fff;
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
.top-header-bar .menu2 .el-button--mini,
.el-button--mini.is-round {
    padding: 4px 15px;
}
.top-header-bar .menu2-item .el-menu-item {
    padding: 0px 0px;
}
.userEdit {
    background: #e5f7f5;
    height: 40px;
    width: 150px;
    text-align: center;
    margin: 0 auto;
    line-height: 40px;
}
.top-header-bar .el-dropdown {
    color: #fff;
    font-size: 14px;
}
.top-header-bar .menu2 .el-button--mini,
.el-button--mini.is-round {
    padding: 5px 11px;
}
.el-button + .el-button {
    margin-left: 0px;
}
</style>
