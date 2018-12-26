<template>
    <div class="clearfix">
        <div class="search-wrap">
            <el-form :inline="true"
                     :model="searchForm"
                     class="search-form">
                <el-form-item label="投送日期">
                    <el-date-picker v-model="searchForm.sendDate"
                                    style="width:226px"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="稿件状态">
                    <el-select v-model="searchForm.state1"
                               class="w100"
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

                <el-form-item label="约稿状态">
                    <el-select v-model="searchForm.state2"
                               class="w100"
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

                <el-form-item label="稿件号">
                    <el-input v-model="searchForm.num"
                              placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="关键字">
                    <el-input v-model="searchForm.keyWords"
                              class="w100"
                              placeholder=""></el-input>
                </el-form-item>

                <el-form-item label="第一作者">
                    <el-input v-model="searchForm.author"
                              class="w100"
                              placeholder=""></el-input>
                </el-form-item>

                <el-form-item label="稿件来源">
                    <el-select v-model="searchForm.source"
                               class="w100"
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

                <el-form-item label="产品类型">
                    <el-select v-model="searchForm.source"
                               class="w100"
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

                <el-form-item label="类型:">
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
                    <el-button type="primary"
                               size="small"
                               @click="onSearch">检索</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="con-wrap">
            <div class="left-con">
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </div>

            <div class="right-con">
                <div class="btn-group">
                    <!-- 引入按钮的组的插件 -->
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">刷新</span>
                        </span>
                    </div>
                    <send-draft>
                        <span slot="iconName">传稿</span>
                    </send-draft>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">阅稿</span>
                        </span>
                    </div>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">留稿</span>
                        </span>
                    </div>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">稿签</span>
                        </span>
                    </div>

                </div>
                <el-table ref="multipleTable"
                          :data="tableData3"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange">
                    <el-table-column type="selection"
                                     width="55">
                    </el-table-column>
                    <el-table-column label="日期"
                                     width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name"
                                     label="姓名"
                                     width="120">
                    </el-table-column>
                    <el-table-column prop="address"
                                     label="地址"
                                     show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div class="mt10">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page="currentPage"
                                   :page-sizes="[10, 20, 30, 40]"
                                   :page-size="10"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="100">
                    </el-pagination>
                </div>
                <el-row>
                    <el-col :span="24">
                        <div class="btn-bottom">
                            <div class="btn-hover">
                                <span>浏览</span>
                            </div>
                            <div class="btn-hover">
                                <span>|</span>
                            </div>

                            <div class="btn-hover">
                                <span>打印</span>
                            </div>
                            <div class="btn-hover">
                                <span>|</span>
                            </div>
                            <div class="btn-hover">
                                <span>关闭</span>
                            </div>
                            <div class="btn-hover">
                                <span>|</span>
                            </div>
                            <draft-label>
                                <span slot="iconName">稿签</span>
                            </draft-label>
                            <div class="btn-hover">
                                <span>|</span>
                            </div>
                            <history>
                                <span slot="iconName">历史</span>
                            </history>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import leftMenu from '@/components/treeMenu/leftTree.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        leftMenu,
        sendDraft,
        draftLabel,
        history
    },
    data () {
        return {
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
            multipleSelection: []
        }
    },
    mounted () {

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
<style lang="scss" scoped>
.search-form {
    padding-left: 10px;
}
.el-form-item {
    margin-bottom: 0;
}
.btn-hover {
    cursor: pointer;
    float: left;
    padding: 0px 10px;
}
.btn-bottom {
    padding: 10px 0;
    position: absolute;
    right: 15px;
    bottom: 0px;
    .btn-line {
        float: left;
        padding: 0px 10px;
    }
    .btn-nav {
        @extend .btn-line;
        cursor: pointer;
        &:hover {
            color: nth($primary-color, 1);
        }
    }
}
.search-wrap {
    padding-top: 10px;
    background-color: #f5f5f5;
}
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
.btn-group {
    height: 68px;
    padding-top: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.mt10 {
    margin-top: 10px;
    padding-left: 10px;
}
.w100 {
    width: 100px;
}
.che {
    margin-left: 7px;
}
</style>
<style>
</style>
