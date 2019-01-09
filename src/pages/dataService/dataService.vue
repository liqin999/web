<template>

    <el-container>
        <el-aside width="250px">
            <div class="tabTree">
                <el-tabs v-model="activeTreeName"
                         :stretch="true"
                         @tab-click="switchTreeMemu">
                    <el-tab-pane label="成品稿"
                                 name="first">
                        <left-menu :treeData="data2"
                                   :defaultProps="defaultProps"
                                   @sendTreeObj="getTreeObj"></left-menu>
                    </el-tab-pane>
                    <el-tab-pane label="未定稿"
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
                        <span slot="iconName">建稿</span>
                    </send-draft>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">打印</span>
                        </span>
                    </div>

                    <div data-v-6eb3df45=""
                         class="primary-btn">
                        <span data-v-6eb3df45="">导出</span>
                    </div>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">刷新</span>
                        </span>
                    </div>

                </div>
            </el-header>
            <el-main ref="mainTable">

                <el-tabs v-model="activeTreeName1"
                         :stretch="true"
                         @tab-click="switchTreeMemu1">
                    <el-tab-pane label="全部(12888)"
                                 name="first1">

                    </el-tab-pane>
                    <el-tab-pane label="文字"
                                 name="second1">
                    </el-tab-pane>
                    <el-tab-pane label="图片"
                                 name="second12">
                    </el-tab-pane>
                    <el-tab-pane label="视频"
                                 name="second122">
                    </el-tab-pane>
                    <el-tab-pane label="音频"
                                 name="second655">
                    </el-tab-pane>
                    <el-tab-pane label="多媒体"
                                 name="second231r">
                    </el-tab-pane>
                    <el-tab-pane label="图集"
                                 name="second1242">
                    </el-tab-pane>
                    <el-tab-pane label="图表"
                                 name="second6y55">
                    </el-tab-pane>
                    <el-tab-pane label="动图"
                                 name="second2b31">
                    </el-tab-pane>
                </el-tabs>

                <el-table ref="multipleTable"
                          :data="tableData3"
                          @row-click="tabclick"
                          :height="mainTableHeight"
                          tooltip-effect="dark"
                          @selection-change="handleSelectionChange">
                    <el-table-column type="selection">
                    </el-table-column>
                    <el-table-column label="标题"
                                     show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.a }}</template>
                    </el-table-column>
                    <el-table-column prop="b"
                                     label="字数">
                    </el-table-column>
                    <el-table-column prop="c"
                                     label="作者/翻译"
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="d"
                                     label="签发时间"
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="e"
                                     label="签发组"
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="f"
                                     label="签发人"
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="g"
                                     label="编辑"
                                     show-overflow-tooltip>
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
                               :total="100">
                </el-pagination>

            </el-footer>
        </el-container>
    </el-container>

</template>
<script>
import sendDraft from '@/pages/dataService/sendDraft/sendDraft'
import leftMenu from '@/components/treeMenu/leftTree.vue'

export default {
    components: {
        leftMenu,
        sendDraft

    },
    data () {
        return {
            activeTreeName: 'first',
            activeTreeName1: 'first1',
            draft: [],
            currentPage: 2,
            searchForm: {
                dateValue: '',
                keywords: '',
                checkAll: false,
                media: '',
                checkedTypes: ['文本', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文本', '图片', '图表', '视频', '音频', '应用'],
            data2: [
                {
                    id: 1,
                    label: '2019-1-5'
                },
                {
                    id: 2,
                    label: '2019-1-4'
                },
                {
                    id: 3,
                    label: '2019-1-3'
                },
                {
                    id: 4,
                    label: '2019-1-2'
                },
                {
                    id: 5,
                    label: '2019-1-1'
                },
                {
                    id: 6,
                    label: '2018-12-31'
                },
                {
                    id: 7,
                    label: '2018-12-30'
                },
                {
                    id: 8,
                    label: '2018-12-29'
                },
                {
                    id: 9,
                    label: '2018-12-28'
                },
                {
                    id: 10,
                    label: '2018-12-27'
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
                    label: '2019-1-5'
                },
                {
                    id: 2,
                    label: '2019-1-4'
                },
                {
                    id: 3,
                    label: '2019-1-3'
                },
                {
                    id: 4,
                    label: '2019-1-2'
                },
                {
                    id: 5,
                    label: '2019-1-1'
                },
                {
                    id: 6,
                    label: '2018-12-31'
                },
                {
                    id: 7,
                    label: '2018-12-30'
                },
                {
                    id: 8,
                    label: '2018-12-29'
                },
                {
                    id: 9,
                    label: '2018-12-28'
                },
                {
                    id: 10,
                    label: '2018-12-27'
                }

            ],
            tableData3: [{
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            }, {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            }, {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            }, {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            },
            {
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-12-31 15:00',
                e: '技术局-中心签稿室',
                f: '王建',
                g: '刘畅'
            }

            ],
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
        tabclick () {
            this.$router.push({ path: '/review' })
        },
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
        },
        switchTreeMemu1 () {
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
.el-table {
    cursor: pointer;
}
</style>
<style lang="scss">
.el-tabs__header {
    margin: 0px 10px 15px 10px;
}
</style>
