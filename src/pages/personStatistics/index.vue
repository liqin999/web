<template>
    <div>
        <el-header>
            <div class="search-wrap">
            <!--检索设定  -->
            <el-row :gutter="20"
                    class="pl10 pr10" style="padding:8px">
                <el-col :span="10">
                    <b class="font18">检索设定</b>
                </el-col>
            </el-row>
            <!-- 日期 -->
            <el-row :gutter="15"
                    class="pl10 pr10">
                <el-col :span="6">
                    <template>
                        <span>日期：</span>
                        <el-select v-model="dateValue">
                                <el-option v-for="item in dateData"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                </el-option>
                        </el-select>
                    </template>
                </el-col>
                <el-col :span="3">
                        <el-checkbox v-model="checked">仅统计成品稿</el-checkbox>
                </el-col>
            </el-row>
            <!-- 类型 -->
            <el-row :gutter="20">
                    <el-col :span="24">
                            <el-form :inline="true"
                                    :model="searchForm">
                                <el-form-item label="类型:">
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
                                            @click="onSearch">统计</el-button>
                                </el-form-item>
                            </el-form>
                    </el-col>
            </el-row>
            </div>
        </el-header>
        <!-- 稿件 -->
        <el-main ref="mainTable">
            <el-row :gutter="15"
                    class="mb15 pl10 pr10">
                <el-col :span="3">
                    <b class="font18">稿件（稿数/字数）</b>
                </el-col>
                <el-col :span="17">
                    <el-button class="primary-btn">详情</el-button>
                </el-col>
            </el-row>
            <!-- 表中内容 -->
                <el-row :gutter="15"
                        class="mb15 pl10 pr10">
                            <el-col :span="24"
                                    class="tab-padding">
                                <template>
                                    <el-table :data="tableData"
                                            style="width: 100%">
                                        <el-table-column type="selection"
                                                        width="100px">
                                        </el-table-column>
                                        <el-table-column prop="type"
                                                        label="类型"
                                                        width="140px">
                                        </el-table-column>
                                        <el-table-column prop="write"
                                                        label="采写">
                                        </el-table-column>
                                        <el-table-column prop="translate"
                                                        label="翻译">
                                        </el-table-column>
                                        <el-table-column prop="editor"
                                                        label="审编"
                                                        show-overflow-tooltip>
                                        </el-table-column>
                                        <el-table-column prop="issuance"
                                                        label="签发">
                                        </el-table-column>
                                        <el-table-column prop="total"
                                                        label="合计">
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </el-col>
                </el-row>
        </el-main>
        <!-- 分页 -->
             <el-footer height="50px">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   class="ac"
                                   :current-page="currentPage"
                                   :page-size="20"
                                   layout="total, prev, pager, next"
                                   :total="6">
                    </el-pagination>
             </el-footer>
    </div>
</template>
<script>

export default {
    data () {
        return {
            checked: true,
            currentPage: 1,
            dateData: ['上季度', '下季度'],
            dateValue: '上季度',
            searchForm: {
                dateValue: '',
                checkAll: false,
                checkedTypes: ['文字', '图片'],
                isIndeterminate: true
            },
            // 类型
            allTypes: ['文字', '图片', '动图', '图集', '视频', '音频', '多媒体'],
            // 表中数据
            tableData: [
                {
                    type: '文本',
                    write: '13/11818',
                    translate: '0/0',
                    editor: '12/10341',
                    issuance: '2/1927',
                    total: '27/24086'
                },
                {
                    type: '图片',
                    write: '14/149',
                    translate: '0/0',
                    editor: '4/171',
                    issuance: '1/24',
                    total: '19/344'
                },
                {
                    type: '图表',
                    write: '0/0',
                    translate: '0/0',
                    editor: '0/0',
                    issuance: '0/0',
                    total: '0/0'
                },
                {
                    type: '视频',
                    write: '0/0',
                    translate: '0/0',
                    editor: '0/0',
                    issuance: '0/0',
                    total: '0/0'
                },
                {
                    type: '音频',
                    write: '0/0',
                    translate: '0/0',
                    editor: '0/0',
                    issuance: '0/0',
                    total: '0/0'
                },
                {
                    type: '应用',
                    write: '7/73',
                    translate: '0/0',
                    editor: '4/54',
                    issuance: '0/0',
                    total: '11/127'
                }

            ]

        }
    },
    methods: {
        getFormData (data) { // 搜索表单的选项
            console.log('获得自组件的搜索框数据', data)
        },
        // 统计按钮
        onSearch () {
            console.log(this.searchForm)
        },
        // 全选
        handleCheckAllChange (val) {
            this.searchForm.checkedTypes = val ? this.allTypes : []
            this.searchForm.isIndeterminate = false
            this.$store.dispatch('checkedCurTypes', this.searchForm.checkedTypes)
        },
        // 类型改变
        handleCheckedTypesChange (value) {
            let checkedCount = value.length
            this.searchForm.checkAll = checkedCount === this.allTypes.length
            this.searchForm.isIndeterminate = checkedCount > 0 && checkedCount < this.allTypes.length
            this.$store.dispatch('checkedCurTypes', this.searchForm.checkedTypes)
        },
        // 分页条数
        handleSizeChange (val) {

        },
        // 当前页
        handleCurrentChange (val) {

        }
    }
}
</script>
<style>
.el-checkbox-group{
    display: inline-block;
}
.el-form-item{
    padding-left: 14px;
}
.el-checkbox+.el-checkbox{
    margin-left: 6px;
}
/* .message-box{
    @include border(all);
    border-radius: $border-radius;
} */

</style>
