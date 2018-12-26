<template>
    <el-form :inline="true"
             :model="searchForm"
             class="search-form">
        <el-row :gutter="20">
            <el-col :span="12"
                    class="search-ipt">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="处理时间:">
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
                    <el-col :span="7"
                            v-if="showKeyWords">
                        <el-form-item label="关键字:"
                                      class="search-key">
                            <el-input v-model="searchForm.keywords"
                                      placeholder="关键字"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <slot name="media"></slot>
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
</template>

<script>

export default {
    props: {
        searchForm: {
            type: Object,
            required: true
        },
        allTypes: {
            type: [Array, Function],
            default: function () {
                return ['文本', '图片', '图表', '视频', '音频', '应用']
            }
        },
        showKeyWords: {
            type: [Boolean],
            default: function () {
                return true
            }
        }
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
            }

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
        onSearch () {
            this.$emit('sendFormData', this.searchForm)
        }
    }
}
</script>
<style lang="scss">
.search-form {
    box-sizing: border-box;
}
.search-form .el-form-item {
    margin-bottom: 0px;
    margin-right: 0;
}
// 处理时间
.search-form .search-ipt .el-form--inline .el-form-item__label {
    width: 40%;
}
.search-form .search-ipt .el-form-item__content {
    float: right;
    width: 68%;
}
// 关键字
.search-form .search-ipt .search-key .el-form-item__content {
    float: right;
    width: 60%;
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
