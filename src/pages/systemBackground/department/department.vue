<template>
    <el-container>
        <el-header height="50px">
            <el-form :inline="true"
                     :model="mediaForm"
                     class="main-header-group">
                <el-form-item label="部门名称">
                    <el-input v-model="mediaForm.name"
                              placeholder="菜单名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="primary-btn"
                               @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-header>
        <el-header height="40px">
            <div class="main-header-group">
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
            </div>
        </el-header>
        <el-main ref="mainTable">
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
        <el-footer height="40px">
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
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight - 20
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight - 20
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
