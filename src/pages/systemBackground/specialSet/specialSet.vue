<template>
    <el-container>
        <el-header height="90px">

            <el-form :inline="true"
                     :model="searchForm"
                     class="main-header-group">
                <el-form-item label="创建日期">
                    <el-date-picker v-model="searchForm.createDate"
                                    type="daterange"
                                    align="right"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :picker-options="pickerOptions2">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="关键字">
                    <el-input v-model="searchForm.keywords"
                              placeholder="关键字"></el-input>
                </el-form-item>
                <el-form-item label="媒体名称">
                    <el-select v-model="searchForm.name"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="专题状态">
                    <el-select v-model="searchForm.state"
                               placeholder="活动区域">
                        <el-option label="区域一"
                                   value="shanghai"></el-option>
                        <el-option label="区域二"
                                   value="beijing"></el-option>
                    </el-select>
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
                        <span data-v-6eb3df45="">内容</span>
                    </span>
                </div>
                <div data-v-6eb3df45=""
                     class="primary-btn"><span>
                        <span data-v-6eb3df45="">修改</span>
                    </span>
                </div>
                <div data-v-6eb3df45=""
                     class="primary-btn"><span>
                        <span data-v-6eb3df45="">作废</span>
                    </span>
                </div>

                <div data-v-6eb3df45=""
                     class="primary-btn"><span>
                        <span data-v-6eb3df45="">恢复</span>
                    </span>
                </div>
                <div data-v-6eb3df45=""
                     class="primary-btn"><span>
                        <span data-v-6eb3df45="">终结</span>
                    </span>
                </div>
            </div>
        </el-header>
        <el-main>
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
            searchForm: {
                name: '',
                state: '',
                createDate: '',
                keywords: ''
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
            value7: ''
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
