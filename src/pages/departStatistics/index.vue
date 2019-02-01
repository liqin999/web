<template>
    <el-container>
        <el-header height="85px">
            <div class="search-wrap">
                <el-form :inline="true"
                    :model="searchForm"
                    class="search-form">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-row :gutter="20">
                                <el-col :span="7">
                                    <el-form-item label="日期:"
                                        class="search-time">
                                        <el-date-picker v-model="searchForm.dateValue"
                                                type="daterange"
                                                align="right"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions2">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <!-- <el-col :span="2"> -->
                                    <el-form-item>
                                        <el-checkbox v-model="searchForm.checked">仅统计成品稿</el-checkbox>
                                    </el-form-item>
                                <!-- </el-col> -->
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="类型:"
                                                class="search-check">
                                        <el-checkbox :indeterminate="searchForm.isIndeterminate"
                                                    v-model="searchForm.checkAll"
                                                    @change="handleCheckAllChange">全选</el-checkbox>
                                        <el-checkbox-group v-model="searchForm.checkedTypes"
                                                        @change="handleCheckedTypesChange">
                                            <el-checkbox v-for="type in allTypes"
                                                        :label="type"
                                                        :key="type">{{type}}</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item class="search-btn">
                                        <el-button class="primary-btn"
                                                @click="statistics">统计</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-header>
        <el-container >
            <el-aside width="250px">
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </el-aside>
            <el-container>
                <!-- <el-header height="0px">
                </el-header> -->
                <!-- 统计表 -->
                <el-main ref="mainTable">
                    <el-row :gutter="20"
                            class="mb10 pl10 pr10">
                        <el-col :span="7">
                            <b class="font18">稿件统计（稿数/字数）</b>
                        </el-col>
                    </el-row>
                    <el-table ref="multipleTable"
                              :data="tableData3"
                              border
                              :span-method="objectSpanMethod"
                              :summary-method="getSummaries"
                              show-summary
                              :height="mainTableHeight"
                              tooltip-effect="dark"
                              @selection-change="handleSelectionChange">
                        <el-table-column prop="person"
                                        label="人员">
                        </el-table-column>
                        <el-table-column prop="type"
                                        label="类型">
                        </el-table-column>
                        <el-table-column prop="write"
                                        label="采写">
                        </el-table-column>
                        <el-table-column prop="translate"
                                        label="翻译">
                        </el-table-column>
                        <el-table-column prop="edit"
                                        label="编审">
                        </el-table-column>
                        <el-table-column prop="issue"
                                        label="签发">
                        </el-table-column>
                        <el-table-column prop="total"
                                        label="合计">
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
                                   :total="3">
                    </el-pagination>
                    <div class="btn-bottom">
                        <down-load>
                            <i slot="icon"
                               class="el-icon-download"></i>
                            <span slot="iconName">导出</span>
                        </down-load>
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
import leftMenu from '@/components/treeMenu/leftTree.vue'
// 下载弹框按钮
import downLoad from '@/components/buttons/downLoad/downLoad.vue'

export default {
    components: {
        leftMenu,
        downLoad
    },
    data () {
        return {
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
            concatData: {
                contentShow: false,
                tableData: [{
                    num: '20181029000029',
                    title: '普惠小微企业 减税再出新举措'

                }, {
                    num: '20181029000030',
                    title: '秦岭违建别墅整治始末 一抓到底正风纪'

                }, {
                    num: '20181029000030',
                    title: '唱响新时代的英雄赞歌'

                }, {
                    num: '20181029000032',
                    title: '商务部：中美在京举行经贸问题副部级磋商'

                }]
            },
            draft: [],
            currentPage: 1,
            searchForm: {
                dateValue: '',
                checked: '',
                keywords: '',
                checkAll: false,
                media: '',
                checkedTypes: ['文字', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文字', '图片', '图表', '动图', '视频', '音频', '多媒体'],
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 2,
                            label: '电讯领导',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 3,
                            label: '第一编辑中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '第二编辑中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 5,
                            label: '总编室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 6,
                            label: '创意策划中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 7,
                            label: '文摘室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 8,
                            label: '评论室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 9,
                            label: '办公室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 10,
                            label: '事业发展部',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 11,
                    label: '每日电讯微博',
                    children: [
                        {
                            id: 12,
                            label: '网络部',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }
                    ]
                },
                {
                    id: 13,
                    label: '公共部门',
                    children: [
                        {
                            id: 13,
                            label: '技术部',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }
                    ]
                }

            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData3: [{
                person: '王若辰',
                type: '文字',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '图片',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '图表',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '动图',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '视频',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '音频',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '王若辰',
                type: '多媒体',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '文字',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '图片',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '图表',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '动图',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '视频',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '音频',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }, {
                person: '陈琰泽',
                type: '多媒体',
                write: '0/0',
                translate: '0/0',
                edit: '0/0',
                issue: '0/0',
                total: '0/0'
            }],
            multipleSelection: [],
            mainTableHeight: null
        }
    },
    mounted () {
        let that = this
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight - 60
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight - 60
            })()
        }
        // 测试请求的接口的调用
        this.$api.text1().then(res => {

        })
    },
    methods: {
        // 合并表格
        objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 7 === 0) {
                    return {
                        rowspan: 7,
                        colspan: 1
                    }
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                }
            }
        },
        // 部门合计
        getSummaries (param) {
            const { columns, data } = param
            console.log('纵值', columns)
            console.log('data', data)
            const sums = []
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '部门合计'
                    return
                }
                const values = data.map(item => Number(item[column.property]))
                console.log('column.property', column.property)
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr)
                        if (!isNaN(value)) {
                            return prev + curr
                        } else {
                            return prev
                        }
                    }, 0)
                    sums[index + 1] += ''
                } else {
                    sums[index + 1] = '0/0'
                }
            })
            return sums
        },

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
        statistics () {
            this.$emit('sendFormData', this.searchForm)
        }
    },
    computed: {
    }
}
</script>
