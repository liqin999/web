<template>
    <el-form :inline="true"
             :model="searchForm"
             class="search-form">
        <el-form-item label="处理时间:">
            <el-date-picker style="width:226px"
                            v-model="searchForm.dateValue"
                            size="small"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions2">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="关键字:">
            <el-input size="small"
                      class="w100"
                      v-model="searchForm.keywords"
                      placeholder="关键字"></el-input>
        </el-form-item>

        <slot name="media"></slot>

        <el-form-item label="类型:">
            <el-checkbox :indeterminate="searchForm.isIndeterminate"
                         v-model="searchForm.checkAll"
                         @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group style="display:inline-block"
                               v-model="searchForm.checkedTypes"
                               @change="handleCheckedTypesChange">
                <el-checkbox class="che"
                             v-for="type in allTypes"
                             :label="type"
                             :key="type">{{type}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary"
                       size="small"
                       @click="onSearch">查询</el-button>
        </el-form-item>
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
<style lang="scss" scoped>
.che {
    margin-left: 7px;
}
.search-form {
    min-width: 1300px;
    padding-left: 10px;
    box-sizing: border-box;
}
</style>
<style>
.w100 {
    width: 100px;
}
</style>
