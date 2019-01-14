<template>
    <el-container class="input-manuscript search-manuscript">
        <el-container>
            <el-aside class="aside-content"
                      width="300px">
                <div class="pl10"><b class="font18">检索方式</b></div>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <template v-for="label in radioLabel1">
                        <el-col :span="12"
                                class="text-radio"
                                :key="label">
                            <el-radio v-model="radioName1"
                                      :label="label"
                                      @change="labelChange">{{ label }}</el-radio>
                        </el-col>
                    </template>
                </el-row>
                <div class="pl10"><b class="font18">搜索内容</b></div>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="24">
                        <el-input placeholder="请输入内容"
                                  v-model="input">
                        </el-input>
                    </el-col>
                </el-row>
                <div class="pl10"><b class="font18">资源类型</b></div>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <template v-for="label in radioLabel1">
                        <el-col :span="12"
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
                        class="pl10 pr10 mb10">
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
                            class="pl10 pr10 mb10">
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
                        class="pl10 pr10 mb10">
                    <el-col :span="24">
                        <el-input placeholder="请输入稿号"
                                  v-model="input">
                        </el-input>
                    </el-col>
                </el-row>
                <div class="btn-group mt15">
                    <el-button class="primary-btn">投送</el-button>
                    <el-button class="reset-btn">关闭</el-button>
                </div>
                <!-- </el-row> -->
            </el-aside>
            <el-main class="main-content">
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="3"><b class="font18">工作稿库</b></el-col>
                    <el-col :span="21">
                        <div class="btn-group">
                            <el-button class="primary-btn">恢复</el-button>
                            <el-button class="primary-btn">内容</el-button>
                            <el-button class="primary-btn">历史</el-button>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <el-table ref="multipleTable"
                                  class="mt10"
                                  height="160"
                                  :data="tableData3"
                                  tooltip-effect="dark"
                                  @selection-change="handleSelectionChange">
                            <el-table-column type="selection">
                            </el-table-column>
                            <el-table-column label="稿号"
                                             width="100">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="name"
                                             label="标题">
                            </el-table-column>
                            <el-table-column prop="media"
                                             label="所属媒体"
                                             show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="status"
                                             label="状态">
                            </el-table-column>
                            <el-table-column prop="time"
                                             label="处理时间"
                                             width="100">
                            </el-table-column>
                            <el-table-column prop="author"
                                             label="第一作者">
                            </el-table-column>
                            <el-table-column prop="source"
                                             label="来源">
                            </el-table-column>
                            <el-table-column prop="type"
                                             label="类型">
                            </el-table-column>
                            <el-table-column prop="map"
                                             label="代表图">
                            </el-table-column>
                            <el-table-column prop="format"
                                             label="文件格式">
                            </el-table-column>
                            <el-table-column prop="wordNumber"
                                             label="字数">
                            </el-table-column>
                            <el-table-column prop="articleNumber"
                                             label="稿数">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10">
                    <el-col :span="24"><b class="font18">部门公共库（稿源库）</b></el-col>
                    <el-col :span="24">
                        <el-table ref="multipleTable"
                                  class="mt10"
                                  height="160"
                                  :data="tableData3"
                                  tooltip-effect="dark"
                                  @selection-change="handleSelectionChange">
                            <el-table-column type="selection">
                            </el-table-column>
                            <el-table-column label="稿号"
                                             width="100">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="name"
                                             label="标题">
                            </el-table-column>
                            <el-table-column prop="media"
                                             label="所属媒体"
                                             show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="status"
                                             label="状态">
                            </el-table-column>
                            <el-table-column prop="time"
                                             label="处理时间"
                                             width="100">
                            </el-table-column>
                            <el-table-column prop="author"
                                             label="第一作者">
                            </el-table-column>
                            <el-table-column prop="source"
                                             label="来源">
                            </el-table-column>
                            <el-table-column prop="type"
                                             label="类型">
                            </el-table-column>
                            <el-table-column prop="map"
                                             label="代表图">
                            </el-table-column>
                            <el-table-column prop="format"
                                             label="文件格式">
                            </el-table-column>
                            <el-table-column prop="wordNumber"
                                             label="字数">
                            </el-table-column>
                            <el-table-column prop="articleNumber"
                                             label="稿数">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <el-footer height="60px">
            <el-button class="primary-btn">确定</el-button>
            <el-button class="reset-btn">取消</el-button>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            tableData3: [
                {
                    id: '2018103100',
                    name: '测试稿件1',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-10-31',
                    author: '强晓玲',
                    source: '自写稿',
                    type: '文本',
                    map: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'

                },
                {
                    id: '2018103101',
                    name: '测试稿件2',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-10-31',
                    author: '强晓玲',
                    source: '自写稿',
                    type: '文本',
                    map: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                },
                {
                    id: '2018103102',
                    name: '测试稿件3',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-10-31',
                    author: '强晓玲',
                    source: '自写稿',
                    type: '文本',
                    map: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                },
                {
                    id: '2018103103',
                    name: '测试稿件',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-10-31',
                    author: '强晓玲',
                    source: '自写稿',
                    type: '文本',
                    map: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                }
            ],
            checkList: ['稿源库'],
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
        labelChange () {

        },
        handleSelectionChange () {

        }
    }
}
</script>
<style lang="scss" scoped>
.search-manuscript {
    .el-container {
        .aside-content {
            margin-right: 10px;
            .btn-group {
                @extend .ac;
                .reset-btn {
                    margin-right: 0px;
                }
            }
        }
        .main-content {
            .btn-group {
                line-height: 35px;
                @extend .text-right;
                .primary-btn {
                    margin: 0px;
                }
            }
        }
    }
}
</style>
