<template>
    <div class="clearfix">
        <div class="search-wrap">
            <el-form :inline="true"
                     :model="searchForm"
                     class="search-form">
                <el-row :gutter="20">
                    <el-col :span="12"
                            class="search-ipt">
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="处理时间:">
                                    <el-date-picker v-model="searchForm.dateValue"
                                                    type="daterange"
                                                    @change="changeCurDate"
                                                    align="right"
                                                    unlink-panels
                                                    range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期"
                                                    :picker-options="pickerOptions2">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12"
                            class="rtab-padding text-right">
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
                                       @click="onSearch">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="tab-bar">
            <template>
                <el-menu class="el-menu-demo"
                         :router="true"
                         :default-active="$route.path"
                         mode="horizontal"
                         @select="handleSelect">
                    <el-menu-item v-for="item in tabTitleList"
                                  :disabled="item.disabled"
                                  :route='{ path: item.path }'
                                  :key="item.id"
                                  :index="item.path">
                        {{item.name}}</el-menu-item>
                </el-menu>
            </template>
        </div>
        <div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            tabTitleList: [
                {
                    id: '1-1',
                    name: '个人稿件',
                    path: '/manuscriptFlow/person'

                },
                {
                    id: '1-2',
                    name: '媒体公共稿件',
                    path: '/manuscriptFlow/media'

                },
                {
                    id: '1-3',
                    name: '组室公共稿件',
                    path: '/manuscriptFlow/group',
                    disabled: true

                },
                {
                    id: '1-4',
                    name: '其他人员稿件',
                    path: '/manuscriptFlow/other',
                    disabled: true

                },
                {
                    id: '1-5',
                    name: '版面稿件',
                    path: '/manuscriptFlow/page',
                    disabled: true

                },
                {
                    id: '1-6',
                    name: '栏目稿件',
                    path: '/manuscriptFlow/column',
                    disabled: true

                },
                {
                    id: '1-7',
                    name: '专题稿件',
                    path: '/manuscriptFlow/special'

                }
            ],
            searchForm: {
                dateValue: '',
                checkAll: false,
                checkedTypes: ['文本', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文本', '图片', '图表', '视频', '音频', '应用'],
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
            }

        }
    },
    mounted () {
        console.log('mounted', this.$store.state.flow.dateValue)
    },
    computed: {
        getCurDate () { // 获得改变后的时间
            return this.$store.state.flow.dateValue
        },
        getCurTypes () { // 获得选中的类型
            return this.$store.state.flow.checkedTypes
        }
    },
    methods: {
        onSearch () {
            console.log(this.searchForm)
        },
        handleSelect () {
        },
        handleCheckAllChange (val) {
            this.searchForm.checkedTypes = val ? this.allTypes : []
            this.searchForm.isIndeterminate = false
            this.$store.dispatch('checkedCurTypes', this.searchForm.checkedTypes)
        },
        handleCheckedTypesChange (value) {
            let checkedCount = value.length
            this.searchForm.checkAll = checkedCount === this.allTypes.length
            this.searchForm.isIndeterminate = checkedCount > 0 && checkedCount < this.allTypes.length
            this.$store.dispatch('checkedCurTypes', this.searchForm.checkedTypes)
        },
        changeCurDate () {
            console.log('改变之后的日期', this.searchForm.dateValue)
            this.$store.dispatch('changeCurDate', this.searchForm.dateValue)
        }
    }
}
</script>
<style lang="scss" scoped>
.search-wrap {
    padding-top: 10px;
    height: 50px;
    background-color: #f5f5f5;
}
.tab-bar {
    padding: 10px 0 0 10px;
}
.el-menu--horizontal > .el-menu-item {
    height: 30px;
    line-height: 30px;
}
// 处理时间
.search-form .search-ipt .el-form--inline .el-form-item__label {
    width: 40%;
}
.search-form .search-ipt .el-form-item__content {
    float: right;
    width: 68%;
}
// 多选框
.search-form .search-check {
    padding-right: 80px;
    width: 100%;
}
.search-form .search-check .el-form-item__content {
    height: 40px !important;
}
.search-form .el-checkbox-group {
    display: inline-block;
    margin-left: 8px;
}
.search-form .el-checkbox + .el-checkbox {
    margin-left: 8px;
}
.search-form .el-checkbox__label {
    padding-left: 8px;
}
.search-form .search-btn {
    position: absolute;
    top: 0px;
    right: 0;
}
.search-form .el-col.rtab-padding {
    position: relative;
}
</style>
