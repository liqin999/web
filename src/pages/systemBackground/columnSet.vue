<template>
    <div class="media-set-wrap">
        <el-form :inline="true"
                 :model="mediaForm"
                 class="demo-form-inline">
            <el-form-item label="栏目名称">
                <el-input v-model="mediaForm.lmname"
                          size="small"
                          placeholder="栏目名称"></el-input>
            </el-form-item>
            <el-form-item label="媒体名称">
                <el-input v-model="mediaForm.mtname"
                          size="small"
                          placeholder="媒体名称"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary"
                           size="small"
                           @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="btnGroup">

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
        <template>
            <el-table ref="multipleTable"
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

    </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            currentPage: 1,
            mediaForm: {
                lmname: '',
                mtname: ''
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
.el-form-item {
    margin-bottom: 0;
}
.btnGroup {
    padding: 10px;
    background-color: #f5f5f5;
}
</style>
<style>
.mt10 {
    margin-top: 10px;
}
</style>
