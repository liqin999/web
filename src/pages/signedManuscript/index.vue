<template>
    <el-container>
        <el-header height="85px">
            <div class="search-wrap">
                <search-input :searchForm="searchForm"
                              :allTypes="allTypes"
                              dateName="刊发日期"
                              @sendFormData="getFormData">
                    <el-col :span="6"
                            slot="media">
                        <el-form-item label="稿件状态:">
                            <el-select v-model="searchForm.media"
                                       class="w100"
                                       size="small"
                                       placeholder="稿件状态">
                                <el-option label="全部"
                                           value="1"></el-option>
                                <el-option label="待审"
                                           value="2"></el-option>
                                <el-option label="待处理"
                                           value="3"></el-option>
                                <el-option label="已处理"
                                           value="4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </search-input>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <div class="tabTree">
                    <el-tabs v-model="activeTreeName"
                             :stretch='true'
                             @tab-click="switchTreeMemu">
                        <el-tab-pane label="版面成品稿库"
                                     name="first">
                            <left-menu :treeData="data2"
                                       :defaultProps="defaultProps"
                                       @sendTreeObj="getTreeObj"></left-menu>
                        </el-tab-pane>
                        <el-tab-pane label="栏目成品稿库"
                                     name="second">
                            <left-menu :treeData="data3"
                                       :defaultProps="defaultProps"
                                       @sendTreeObj="getTreeObj"></left-menu>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-aside>
            <el-container>
                <el-header height="40px">
                    <div class="main-header-group">
                        <!-- 引入按钮的组的插件 -->
                        <send-draft>
                            <span slot="iconName">撤稿</span>
                        </send-draft>
                        <issuance>
                            <span slot="iconName">改签</span>
                        </issuance>
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">查错</span>
                            </span>
                        </div>

                        <version :data="versionData">
                            <span slot="iconName">版本</span>
                        </version>

                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">处理</span>
                            </span>
                        </div>

                    </div>
                </el-header>
                <el-main ref="mainTable">
                    <el-table ref="multipleTable"
                              :data="tableData3"
                              :height="mainTableHeight"
                              tooltip-effect="dark"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column prop="zugao"
                                         label="组稿"
                                         width="100px">
                        </el-table-column>
                        <el-table-column prop="number"
                                         width="150px"
                                         label="稿号">
                        </el-table-column>
                        <el-table-column prop="title"
                                         width="180px"
                                         show-overflow-tooltip
                                         label="标题">
                        </el-table-column>
                        <el-table-column prop="repDrawing"
                                         header-align="center"
                                         align="center"
                                         width="130px"
                                         label="代表图">
                            <template slot-scope="scope">
                                <el-popover placement="right"
                                            title=""
                                            trigger="hover">
                                    <img v-bind:src="scope.row.picture"
                                         style="max-height: 300px;max-width: 1000px">
                                    <img slot="reference"
                                         :src="scope.row.picture"
                                         :alt="scope.row.picture"
                                         style="max-height: 30px;max-width: 120px">
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column prop="state"
                                         label="状态">
                        </el-table-column>
                        <el-table-column prop="banmian"
                                         show-overflow-tooltip
                                         label="版面名称">
                        </el-table-column>
                        <el-table-column prop="size"
                                         label="字数">
                        </el-table-column>
                        <el-table-column prop="dealingPeople"
                                         label="处理人">
                        </el-table-column>
                        <el-table-column prop="data"
                                         label="刊发日期"
                                         width="100px">
                        </el-table-column>
                        <el-table-column prop="medio"
                                         label="媒体"
                                         show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="firstAuthor"
                                         label="作者">
                        </el-table-column>
                        <el-table-column prop="type"
                                         label="类型">
                        </el-table-column>
                    </el-table>
                </el-main>
                <el-footer height="70px">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   class="ac"
                                   :current-page="currentPage"
                                   :page-size="20"
                                   layout="total, prev, pager, next"
                                   :total="2">
                    </el-pagination>
                    <div class="btn-bottom">
                        <draft-look>
                            <i slot="icon"
                               class="iconfont icon-liulan"></i>
                            <span slot="iconName">浏览</span>
                        </draft-look>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <down-load>
                            <i slot="icon"
                               class="el-icon-download"></i>
                            <span slot="iconName">下载</span>
                        </down-load>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <printing>
                            <i slot="icon"
                               class="iconfont icon-ico_print"></i>
                            <span slot="iconName">打印</span>
                        </printing>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <draft-label>
                            <i slot="icon"
                               class="iconfont icon-wenben1"></i>
                            <span slot="iconName">稿签</span>
                        </draft-label>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <history>
                            <i slot="icon"
                               class="iconfont icon-ic_history"></i>
                            <span slot="iconName">历史</span>
                        </history>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <div class="btn-nav">
                            <i class="iconfont icon-guanbi"></i>
                            <span>关闭</span>
                        </div>
                    </div>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import issuance from '@/components/buttons/issuance/issuance'
import searchInput from '@/components/searchConditions/searchInput.vue'
import leftMenu from '@/components/treeMenu/leftTree.vue'
import version from '@/components/buttons/version/version.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
// 打印弹框按钮
import printing from '@/components/buttons/printing/printing.vue'
// 浏览弹框按钮
import draftLook from '@/components/buttons/draftLook/draftLook'
// 下载弹框按钮
import downLoad from '@/components/buttons/downLoad/downLoad'
export default {
    components: {
        searchInput,
        leftMenu,
        sendDraft,
        issuance,
        version,
        draftLabel,
        history,
        printing,
        draftLook,
        downLoad
    },
    data () {
        return {
            activeTreeName: 'first',
            draft: [],
            currentPage: 1,
            searchForm: {
                dateValue: '',
                keywords: '',
                checkAll: false,
                media: '',
                checkedTypes: ['文本', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文字', '图片', '动图', '图集', '视频', '音频', '多媒体'],
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 45,
                            label: 'A叠',
                            icon: 'iconfont icon-file-b- ft-ffd658',
                            children: [
                                {
                                    id: 5,
                                    label: '一版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 6,
                                    label: '二版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 7,
                                    label: '三版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 8,
                                    label: '四版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 811,
                                    label: '五版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 812,
                                    label: '六版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 814,
                                    label: '七版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 8123,
                                    label: '八版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 823,
                                    label: '九版',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 9,
                                    label: '测试版面',
                                    icon: 'iconfont icon-file1'
                                }
                            ]
                        }

                    ]
                },
                {
                    id: 2,
                    label: '每日电讯微博',
                    children: [
                        {
                            id: 46,
                            label: '头版',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }, {
                            id: 12,
                            label: '国内新闻',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 1222,
                            label: '脱贫攻坚',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '新闻焦点',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 15,
                            label: '图片',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 16,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 17,
                            label: '新闻纵深',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 18,
                            label: '世界报道',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 20,
                            label: '原创',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                }

            ],

            versionData: {
                contentShow: false,
                tableData: [{
                    num: 1,
                    title: '12',
                    date: '2016-05-03',
                    dealPerson: '1王小虎',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 2,
                    title: '333',
                    date: '2015-05-03',
                    dealPerson: '2王小虎',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 3,
                    title: '8888',
                    date: '2016-05-03',
                    dealPerson: '3王小虎',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }]
            },
            concatData: {
                contentShow: false,
                tableData: [{
                    num: '1',
                    title: '王小虎1'

                }, {
                    num: '2',
                    title: '王小虎2'

                }, {
                    num: '3',
                    title: '王小虎3'

                },
                {
                    num: '4',
                    title: '王小虎4'

                }, {
                    num: '5',
                    title: '王小虎5'

                },
                {
                    num: '6',
                    title: '王小虎6'

                }]
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            data3: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 46,
                            label: '头版',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 1222,
                            label: '脱贫攻坚',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 12,
                            label: '国内新闻',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '新闻焦点',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 15,
                            label: '图片',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 16,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 17,
                            label: '新闻纵深',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 18,
                            label: '世界报道',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 20,
                            label: '原创',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 21,
                            label: '经济·民生',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '每日电讯微博',
                    children: [
                        // {
                        //     id: 5,
                        //     label: '一版',
                        //     icon: 'iconfont icon-file1'
                        // },
                        // {
                        //     id: 6,
                        //     label: '二版',
                        //     icon: 'iconfont icon-file1'
                        // }
                    ]
                }

            ],
            tableData3: [{
                zugao: '',
                number: '20181030000032',
                title: '（新华全媒头条）西藏阿里楚松村四代房：中国边境的...',
                picture: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=778549431,2241230358&fm=85&s=57B337C54AE3E8D41811C12603006051',
                repDrawing: '',
                state: '待处理',
                banmian: '一版',
                size: '378',
                dealingPeople: '刘学奎',
                data: '2018-10-31',
                medio: '新华每日资讯',
                firstAuthor: '于文静，强晓玲',
                type: '图片'
            }, {
                zugao: '',
                number: '20181030000057',
                title: '巾帼心向党  奋进新时代',
                // picture: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4070437,3402210601&fm=85&app=57&f=JPEG?w=121&h=75&s=A482F9B7C4809BE918B06CB603007011',
                repDrawing: '',
                state: '已处理',
                banmian: '一版',
                size: '328',
                dealingPeople: '唐牛',
                data: '2018-12-25',
                medio: '新华每日资讯',
                firstAuthor: '杨维汉',
                type: '文本'
            }],
            multipleSelection: [],
            mainTableHeight: null
        }
    },
    mounted () {
        let that = this
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight - 20
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight - 20
            })()
        }
    },
    methods: {
        getTreeObj (data) { // 获得树形菜单的对象
            console.log('获得自组件的点击的节点对象', data)
        },
        getFormData (data) { // 搜索表单的选项
            console.log('获得自组件的搜索框数据', data)
        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleSizeChange (val) {

        },
        handleCurrentChange (val) {

        },
        getConcatData (data) { // 获得合并的元素的参数信息
            console.log('获得子组件的合并的元素数据', data)
        },
        getConcatDataUp (data) { // 获得合并弹框的上移操作
            console.log('获得合并子组件弹框的上移操作元素数据', data)
        },
        getConcatDataDown (data) { // 获得合并弹框的下移操作
            console.log('获得合并子组件弹框的下移操作元素数据', data)
        },
        switchTreeMemu () {
        }
    },
    computed: {
    }
}
</script>
<style lang="scss" scoped>
.tree-wrap {
    padding: 0;
}
</style>
<style lang="scss">
.el-tabs__header {
    margin: 0px 10px 15px 10px;
}
</style>
