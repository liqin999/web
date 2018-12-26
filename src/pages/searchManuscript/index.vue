<template>
    <div class="send-manuscript">
        <el-row :gutter="20"
                class="clearfix">
            <!-- 左侧 -->
            <el-col :span="8">
                <div class="right-content">
                    <el-row :gutter="20">
                        <div class="pl10"><b class="font18">检索方式</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <template v-for="label in radioLabel1">
                                <el-col :span="8"
                                        class="text-overflow"
                                        :key="label">
                                    <el-radio v-model="radioName1"
                                              :label="label"
                                              @change="labelChange">{{ label }}</el-radio>
                                </el-col>
                            </template>
                        </el-row>
                        <div class="pl10"><b class="font18">搜索内容</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="24">
                                <el-input placeholder="请输入内容"
                                          v-model="input">
                                </el-input>
                            </el-col>
                        </el-row>
                        <div class="pl10"><b class="font18">资源类型</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <template v-for="label in radioLabel1">
                                <el-col :span="24"
                                        class="text-overflow"
                                        :key="label">
                                    <el-radio v-model="radioName1"
                                              :label="label"
                                              @change="labelChange">{{ label }}</el-radio>
                                </el-col>
                            </template>
                        </el-row>
                        <div class="pl10"><b class="font18">日期</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="24">
                                <el-date-picker type="daterange"
                                                align="right"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions2">
                                </el-date-picker>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10">
                            <div class="pl10"><b class="font18">精确搜索</b></div>
                            <el-row :gutter="20"
                                    class="pl10 pr10 mb15">
                                <el-col :span="24">
                                    <template>
                                        <el-checkbox-group v-model="checkList">
                                            <el-checkbox label="稿源库"></el-checkbox>
                                            <el-checkbox label="电讯稿库"></el-checkbox>
                                        </el-checkbox-group>
                                    </template>
                                </el-col>
                            </el-row>
                        </el-row>
                        <div class="pl10"><b class="font18">稿号</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="24">
                                <el-input placeholder="请输入稿号"
                                          v-model="input">
                                </el-input>
                            </el-col>
                        </el-row>
                        <div class="btn-group ac mt15 pt10">
                            <el-button class="primary-btn">投送</el-button>
                            <el-button class="reset-btn">关闭</el-button>
                        </div>
                    </el-row>
                </div>
            </el-col>
            <!-- 右侧 -->
            <el-col :span="16"
                    class="tab-padding">
                <div class="left-content">
                    <el-row :gutter="20"
                            class="mb15">
                        <el-col :span="3"><b class="font18">工作稿库</b></el-col>
                        <el-col :span="21">
                            <div class="btn-group text-right">
                                <el-button class="primary-btn">恢复</el-button>
                                <el-button class="primary-btn">内容</el-button>
                                <el-button class="primary-btn">历史</el-button>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <el-table ref="multipleTable"
                                      class="mt15"
                                      height="150"
                                      :data="tableData3"
                                      tooltip-effect="dark"
                                      @selection-change="handleSelectionChange">
                                <el-table-column type="selection">
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
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"
                            class="mb15">
                        <el-col :span="24"><b class="font18">部门公共库（稿源库）</b></el-col>
                        <el-col :span="24">
                            <el-table ref="multipleTable"
                                      class="mt15"
                                      height="150"
                                      :data="tableData3"
                                      tooltip-effect="dark"
                                      @selection-change="handleSelectionChange">
                                <el-table-column type="selection">
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
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            kanfaData: [1, 2, 3, 4, 5],
            kanfaValue: 1,
            input: null,
            textarea: null,
            radioName1: '内容匹配',
            radioLabel1: [
                '内容匹配',
                '中文分词'
            ],
            // 栏目选择
            radioName: '栏目库',
            radioLabel: [
                '栏目库',
                '版面库',
                '媒体公共库',
                '其他稿库'
            ],
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

    }
}
</script>
<style lang="scss" scoped>
.send-manuscript {
    width: 100%;
    min-height: 100%;
    background: nth($bg-color, 2);
    padding: 10px;
    line-height: 30px;
    .left-content {
        padding: 25px;
        height: 620px;
        background: $wcolor;
        .select-type .el-select {
            width: 78%;
        }
        .select-default {
            .el-select {
                float: left;
                width: 60%;
            }
        }
        .ipt-title {
            .el-input {
                width: 90%;
            }
        }
        .title-btn {
            text-align: right;
        }
        .btn-group {
            .reset-btn {
                margin-right: 0px;
            }
        }
    }
    .right-content {
        @extend .left-content;
        .btn-group {
            .primary-btn {
                margin: 0px;
                &:last-child {
                    margin-top: 2px;
                    float: right;
                }
            }
        }
        .choose-btn {
            text-align: right;
            .primary-btn {
                margin: 0px;
            }
        }
    }
}
</style>
