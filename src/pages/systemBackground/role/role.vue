<template>
    <el-container>
        <el-header height="40">
            <el-form :inline="true"
                     :model="mediaForm"
                     class="demo-form-inline">
                <el-form-item label="角色名称">
                    <el-input v-model="mediaForm.name"
                              size="small"
                              placeholder="角色名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                               size="small"
                               @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-header>
        <el-container>
            <el-header height="40">
                <div class="btn-group">

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">新增</span>
                        </span>
                    </div>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">修改</span>
                        </span>
                    </div>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">删除</span>
                        </span>
                    </div>
                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">权限</span>
                        </span>
                    </div>
                </div>
            </el-header>
            <el-main class="main-padding"
                     ref="mainTable">
                <template>
                    <el-table ref="multipleTable"
                              :height="mainTableHeight"
                              :data="tableData3"
                              tooltip-effect="dark"
                              style="width: 100%"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection"
                                         width="55">
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
                </template>
            </el-main>
            <el-footer height="80">
                <div class="page mt10">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   class="ac"
                                   :current-page="currentPage"
                                   :page-size="20"
                                   layout="total, prev, pager, next"
                                   :total="100">
                    </el-pagination>
                </div>
            </el-footer>
        </el-container>

    </el-container>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            currentPage: 1,
            mediaForm: {
                name: ''
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
        onSubmit () {
            console.log('submit!')
        },
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`)
        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        }
    }
}
</script>
<style lang="scss" scoped>
.main-padding {
    padding: 0px;
}
.el-form-item {
    margin-bottom: 0;
}
.btn-group {
    padding: 10px;
    background-color: #f5f5f5;
}
.mt10 {
    margin-top: 10px;
}
.el-table {
    overflow-y: hidden;
}
</style>
