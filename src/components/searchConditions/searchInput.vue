<template>
    <el-form :inline="true"
             :model="searchForm"
             class="search-form">
        <el-row :gutter="20">
            <el-col :span="24">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="处理时间:"
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
                    <el-col :span="6"
                            v-if="showKeyWords">
                        <el-form-item label="关键字:"
                                      class="search-key">
                            <el-input v-model="searchForm.keywords"
                                      placeholder="关键字"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- <el-col :span="14"> -->
                    <slot name="media"></slot>
                    <!-- </el-col> -->
                </el-row>
            </el-col>
            <el-col :span="24">
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
                        <!-- </el-col> -->
                        <!-- <el-col :span="3"> -->
                        <el-form-item class="search-btn">
                            <el-button class="primary-btn"
                                       @click="onSearch">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
                return ['文本', '图片', '图表', '视频', '音频', '多媒体']
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
