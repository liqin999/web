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
                    <template v-for="label in radioLabel2">
                        <el-col :span="17"
                                class="text-overflow"
                                :key="label">
                            <el-radio v-model="radioName2"
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
                            <el-button class="primary-btn">编辑</el-button>
                            <pick class="primary-btn">
                                <span slot="iconName">选送</span>
                            </pick>
                            <!-- <el-button class="primary-btn">撤稿</el-button> -->
                            <send-draft class="primary-btn">
                                <span slot="iconName">撤稿</span>
                            </send-draft>
                            <!-- <el-button class="primary-btn">内容</el-button> -->
                            <content-box class="primary-btn">
                                <span slot="iconName">内容</span>
                            </content-box>
                            <!-- <el-button class="primary-btn">历史</el-button> -->
                            <history class="primary-btn">
                                <span slot="iconName">历史</span>
                            </history>
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
                            <!-- <el-table-column prop="zugao"
                                             label="组稿">
                            </el-table-column> -->
                            <el-table-column label="稿号"
                                             width="130px">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="name"
                                             label="标题"
                                             width="180px">
                            </el-table-column>
                            <el-table-column prop="media"
                                             label="所属媒体"
                                             show-overflow-tooltip>
                            </el-table-column> -->
                            <el-table-column prop="status"
                                             label="状态">
                            </el-table-column>
                            <el-table-column prop="time"
                                             label="处理时间"
                                             width="150px">
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
                            <el-table-column prop="picture"
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
                            <!-- <el-table-column prop="attachment"
                                             label="附件">
                            </el-table-column>
                            <el-table-column prop="type"
                                             label="类型">
                            </el-table-column> -->
                        </el-table>
                    </el-col>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10">
                    <el-col :span="24"><b class="font18">稿源库</b></el-col>
                    <el-col :span="24">
                        <el-table ref="multipleTable"
                                  class="mt10"
                                  height="160"
                                  :data="tableData4"
                                  tooltip-effect="dark"
                                  @selection-change="handleSelectionChange">
                            <el-table-column type="selection">
                            </el-table-column>
                            <el-table-column label="稿号"
                                             width="130px">
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="title"
                                             label="标题"
                                             width="180px">
                            </el-table-column>

                            <el-table-column prop="time"
                                             label="创建时间"
                                             width="150px">
                            </el-table-column>
                            <el-table-column prop="author"
                                             label="第一作者">
                            </el-table-column>
                            <el-table-column prop="type"
                                             label="类型">
                            </el-table-column>

                            <el-table-column prop="picture"
                                             label="代表图">
                            </el-table-column>

                            <el-table-column prop="format"
                                             label="文件格式">
                            </el-table-column>

                            <el-table-column prop="wordNumber"
                                             label="字数">
                            </el-table-column>
                            <el-table-column prop="source"
                                             label="来源">
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
// 撤稿按钮组件
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import history from '@/components/buttons/history/history.vue'
// 选送按钮
import pick from '@/components/buttons/pick/pick.vue'
// 内容按钮组件
import contentBox from '@/components/buttons/content/content.vue'
export default {
    components: {
        sendDraft,
        history,
        pick,
        contentBox
    },
    data () {
        return {
            tableData3: [
                {
                    zugao: '',
                    id: '20181031000034',
                    name: '一个西红柿的”世界地图“',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2019-1-11 11:09:34',
                    author: '赵倩',
                    source: '自写稿',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                    // attachment: '',
                    // type: ''

                },
                {
                    id: '20181031000045',
                    name: '测试稿件20181031',
                    media: '新华每日电讯',
                    status: '已审',
                    time: '2018-4-31 11:09:34',
                    author: '强晓玲',
                    source: '自写稿',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                },
                {
                    id: '20181031000023',
                    name: '城市垃圾分类“银川模式”',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-10-31 11:09:34',
                    author: '郝玉',
                    source: '自写稿',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                },
                {
                    id: '20181031000012',
                    name: '这是一条测试',
                    media: '新华每日电讯',
                    status: '待审',
                    time: '2018-01-31 11:09:34',
                    author: '刘晶瑶',
                    source: '自写稿',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    articleNumber: '1'
                }
            ],

            tableData4: [
                {
                    id: '20181031000013',
                    title: '城市垃圾分类“银川模式”',
                    time: '2019-1-3 9:09:34',
                    author: '赵倩',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    source: '自写稿'
                },
                {
                    id: '20181031000015',
                    title: '一次建成里程最长高铁',
                    time: '2018-10-31 11:09:34',
                    author: '刘晶瑶',
                    type: '文本',
                    picture: '',
                    format: '.txt',
                    wordNumber: '1345',
                    source: '自写稿'
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
            radioName2: '稿件',
            radioLabel2: [
                '稿件',
                '线索/采访单/专题'
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
                line-height: 17px;
                @extend .text-right;
                .primary-btn {
                    margin: 0px;
                }
            }
        }
    }
}
</style>
