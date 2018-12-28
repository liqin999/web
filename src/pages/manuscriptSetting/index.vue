<template>
    <el-container class="manuscript-setting">
        <el-header height="85px">
            <div class="search-wrap">
                <el-form :inline="true"
                         :model="searchForm"
                         class="search-form">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="处理时间:"
                                          class="search-time">
                                <el-date-picker v-model="searchForm.dateValue"
                                                type="daterange"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions2">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6"
                                v-if="showKeyWords">
                            <el-form-item label="关键字:"
                                          class="search-key">
                                <el-input v-model="searchForm.keywords"
                                          placeholder="关键字"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="稿件状态:">
                                <el-select v-model="searchForm.state1"
                                           placeholder="稿件状态">
                                    <el-option label="全部"
                                               value="shanghai">
                                    </el-option>
                                    <el-option label="待审"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="待处理"
                                               value="shan22ghai">
                                    </el-option>
                                    <el-option label="已处理"
                                               value="be1ijing">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="稿件来源:">
                                <el-select v-model="searchForm.source"
                                           placeholder="稿件来源">
                                    <el-option label="全部"
                                               value="shanghai">
                                    </el-option>
                                    <el-option label="来源1"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="来源2"
                                               value="shan22ghai">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="第一作者:">
                                <el-input v-model="searchForm.author"
                                          placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6"
                                v-if="showKeyWords">
                            <el-form-item label="稿件号:">
                                <el-input v-model="searchForm.num"
                                          placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="约稿状态:">
                                <el-select v-model="searchForm.state2"
                                           placeholder="稿件状态">
                                    <el-option label="全部"
                                               value="shanghai">
                                    </el-option>
                                    <el-option label="待审"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="待处理"
                                               value="shan22ghai">
                                    </el-option>
                                    <el-option label="已处理"
                                               value="be1ijing">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产品类型:">
                                <el-select v-model="searchForm.source"
                                           placeholder="产品类型">
                                    <el-option label="全部"
                                               value="shangddhai12">
                                    </el-option>
                                    <el-option label="类型1"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="类型2"
                                               value="12的方法">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="类型:"
                                                  class="search-check">
                                        <el-checkbox :indeterminate="searchForm.isIndeterminate"
                                                     v-model="searchForm.checkAll"
                                                     @change="handleCheckAllChange">全选</el-checkbox>
                                        <el-checkbox-group style="display:inline-block"
                                                           @change="handleCheckedTypesChange"
                                                           v-model="searchForm.checkedTypes">
                                            <el-checkbox class="che"
                                                         v-for="type in allTypes"
                                                         :label="type"
                                                         :key="type">{{type}}</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button class="primary-btn"
                                                   @click="onSearch">检索</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </el-aside>
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
                        <split>
                            <span slot="iconName">拆分</span>
                        </split>
                        <concat :data="concatData"
                                @sendConcatData="getConcatData"
                                @sendConcatDataUp="getConcatDataUp"
                                @sendConcatDataDown="getConcatDataDown">
                            <span slot="iconName">合并</span>
                        </concat>

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
    </el-container>
</template>
<script>
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import issuance from '@/components/buttons/issuance/issuance'
import leftMenu from '@/components/treeMenu/leftTree.vue'
import split from '@/components/buttons/split/split'
import concat from '@/components/buttons/concat/concat'
import version from '@/components/buttons/version/version.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        leftMenu,
        sendDraft,
        issuance,
        split,
        concat,
        version,
        draftLabel,
        history
    },
    data () {
        return {
            showKeyWords: true,
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            },
            draft: [],
            currentPage: 1,
            searchForm: {
                sendDate: '',
                state1: '',
                state2: '',
                isIndeterminate: false,
                checkAll: [],
                checkedTypes: [],
                num: '',
                keyWords: '',
                author: '',
                source: '',
                productType: ''

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
            }],
            multipleSelection: [],
            mainTableHeight: null
        }
    },
    mounted () {
        let that = this
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight
            })()
        }
    },
    methods: {
        handleCheckAllChange (val) {
            this.searchForm.checkedTypes = val ? this.allTypes : []
            this.searchForm.isIndeterminate = false
        },
        handleCheckedTypesChange (value) {
            let checkedCount = value.length
            this.searchForm.checkAll = checkedCount === this.allTypes.length
            this.searchForm.isIndeterminate = checkedCount > 0 && checkedCount < this.allTypes.length
        },
        getTreeObj (data) { // 获得树形菜单的对象
            console.log('获得自组件的点击的节点对象', data)
        },
        onSearch () {

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
    }
}
</script>
