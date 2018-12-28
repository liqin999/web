<template>
    <el-container>
        <el-header height="85px">
            <div class="search-wrap">
                <search-input :searchForm="searchForm"
                              :allTypes="allTypes"
                              @sendFormData="getFormData">
                    <!-- <el-col :span="6"
                            slot="media">
                        <el-form-item label="媒体:">
                            <el-select v-model="searchForm.media"
                                       placeholder="请选择媒体">
                                <el-option label="媒体一"
                                           value="shanghai"></el-option>
                                <el-option label="媒体二"
                                           value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> -->
                </search-input>
            </div>
        </el-header>
        <el-container>
            <el-header height="40px">
                <div class="main-header-group">
                    <!-- 引入按钮的组的插件 -->
                    <send-draft>
                        <span slot="iconName">传稿</span>
                    </send-draft>
                    <issuance>
                        <span slot="iconName">签发</span>
                    </issuance>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">审稿</span>
                        </span>
                    </div>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">淘汰</span>
                        </span>
                    </div>

                    <version :data="versionData">
                        <span slot="iconName">版本</span>
                    </version>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">编辑</span>
                        </span>
                    </div>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">提交</span>
                        </span>
                    </div>
                    <!-- <split>
                        <span slot="iconName">拆分</span>
                    </split>
                    <concat :data="concatData"
                            @sendConcatData="getConcatData"
                            @sendConcatDataUp="getConcatDataUp"
                            @sendConcatDataDown="getConcatDataDown">
                        <span slot="iconName">合并</span>
                    </concat> -->

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
                    <el-table-column label="日期">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name"
                                     label="姓名">
                    </el-table-column>
                    <el-table-column prop="address"
                                     label="地址"
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
                <div class="btn-bottom">
                    <div class="btn-nav">
                        <i class="iconfont icon-liulan"></i>
                        <span>浏览</span>
                    </div>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <div class="btn-nav">
                        <i class="iconfont icon-wenben1"></i>
                        <span>留稿</span>
                    </div>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <div class="btn-nav">
                        <i class="iconfont icon-ico_print"></i>
                        <span>打印</span>
                    </div>
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
</template>
<script>
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import issuance from '@/components/buttons/issuance/issuance'
import searchInput from '@/components/searchConditions/searchInput.vue'
// import split from '@/components/buttons/split/split'
// import concat from '@/components/buttons/concat/concat'
import version from '@/components/buttons/version/version.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        searchInput,
        sendDraft,
        issuance,
        // split,
        // concat,
        version,
        draftLabel,
        history
    },
    data () {
        return {
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
            allTypes: ['文本', '图片', '图表', '视频', '音频', '应用'],
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 4,
                            label: '头版1',
                            icon: 'el-icon-success'
                        },
                        {
                            id: 12,
                            label: '国内新闻',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '国际焦点',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 12,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: 'A叠【版面】',
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
                            id: 5,
                            label: '三版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 6,
                            label: '四版',
                            icon: 'iconfont icon-file1'
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
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: [],
            mainTableHeight: null
        }
    },
    mounted () {
        // Localstorage
        // this.storage = new this.$Fn.Localstorage();
        // 组件加载后获取 当前浏览器的高度
        // this.mainHeight = document.body.clientHeight
        // console.log(this.mainHeight)
        // this.$store.commit('setContentHeight', this.windowHeight.height);
        // 监听浏览器窗口大小改变 高度
        // this.mainHeight = document.getElementById('main-padding').offsetHeight
        let that = this
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight
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
        }
    },
    computed: {
    }
}
</script>
