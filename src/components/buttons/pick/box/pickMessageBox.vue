<template>
    <el-dialog class="pick-message-box"
               title="选送"
               @close="messageBoxClose()"
               :visible.sync="pickData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 待撤稿/传稿件列表 -->
            <el-row :gutter="20"
                    class="message-lists clearfix">
                <el-table ref="multipleTable"
                                  class="mt10"
                                  height="120"
                                  :data="pickData.pickList"
                                  tooltip-effect="dark">
                            <el-table-column label="稿号"
                                             width="302px">
                                <template slot-scope="scope">{{ scope.row.number }}</template>
                            </el-table-column>
                            <el-table-column prop="title"
                                             label="标题"
                                             width="420px">
                                <template slot-scope="scope">{{ scope.row.title }}</template>
                            </el-table-column>
                            <el-table-column prop="size"
                                             label="字数"
                                             width="180px">
                                <template slot-scope="scope">{{ scope.row.size }}</template>
                            </el-table-column>
                </el-table>
            </el-row>
            <!-- 内容 -->
            <el-row :gutter="20"
                    class="message-content message-lists clearfix">
                <el-col :span="2"
                        class="tab-padding"><b class="message-title padding-bottom10">送往</b></el-col>
                <el-col :span="12">
                    <el-row>
                        <template v-for="label in radioLabel">
                            <el-col :span="8"
                                    class="text-overflow"
                                    :key="label">
                                <el-radio v-model="radioName"
                                        :label="label"
                                     @change="labelChange">{{ label }}</el-radio>
                            </el-col>
                        </template>
                    </el-row>
                </el-col>
                <el-col :span="10">
                    <el-row :gutter="0">
                        <el-col :span="8"
                        class="tab-padding"><b class="message-title padding-bottom10">投送媒体</b></el-col>
                        <el-col :span="9"
                                class="padding-top10">
                            <template>
                                <el-select v-model="topValue"
                                            placeholder="请选择">
                                    <el-option v-for="item in topTitle"
                                               :key="item.label"
                                               :label="item.label"
                                               :value="item.value"
                                               @change="topChange">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 内容 -->
            <el-row :gutter="20"
                    class="message-lists clearfix ac">
                <span  v-bind="pickData.name" style="color: red;text-align:center">我的稿库——[上次选中：{{pickData.name}}]</span>
            </el-row>
            <!-- 内容 -->
            <el-row :gutter="20"
                    class="message-content clearfix">
                <el-col :span="2"
                        class="tab-padding"><b class="message-title padding-bottom10">我的稿库</b></el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="12"
                            class="message-checkbox ac">
                            <el-checkbox>新华每日电讯</el-checkbox>
                        </el-col>
                        <el-col :span="12"
                            class="message-checkbox ac">

                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="10">
                    <el-row :gutter="20" style="height:50px">
                        <el-col :span="4"
                        class="tab-padding"><b class="message-title padding-bottom10">专题</b></el-col>
                        <el-col :span="14">
                            <template>
                                <div class="block">
                                    <el-date-picker v-model="pickerValue"
                                                    type="daterange"
                                                    align="right"
                                                    unlink-panels
                                                    range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期"
                                                    :picker-options="pickerOptions"
                                                    :clearable='false'
                                                    @change="pickerChange">
                                    </el-date-picker>
                                </div>
                            </template>
                        </el-col>
                        <el-col :span="6">
                            <el-button class="primary-btn"
                                @click="onSearch">查询</el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24"
                                class="tab-padding">
                            <b class="message-title" >选送意见：</b>
                            <span class="redColor">（不超过255个字）</span>
                        </el-col>
                        <el-col :span="24">
                            <el-input type="textarea"
                                      :rows="12"
                                      placeholder="请输入内容"
                                      v-model="textarea"
                                      @change="textareaChange">
                            </el-input>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="draftConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="pickData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        pickData: {
            type: Object
        }
    },
    data () {
        return {
            submitData: null,
            textarea: '请输入文字',
            // 栏目选择
            radioName: '版面/栏目稿库',
            radioLabel: [
                '版面/栏目稿库',
                '我的稿库',
                '其他人员库',
                '组室公共库',
                '媒体公共库',
                '专题库'
            ],
            topValue: '新华每日电讯',
            dataList: [
                {
                    id: 2,
                    label: '栏目',
                    children: [{
                        id: 5,
                        label: '头版'
                    },
                    {
                        id: 6,
                        label: '要闻'
                    },
                    {
                        id: 55,
                        label: '国内新闻'
                    },
                    {
                        id: 56,
                        label: '国际新闻'
                    },
                    {
                        id: 546,
                        label: '新闻素材'
                    }]
                }

            ],
            dataList2: [
                {
                    id: 2,
                    label: 'A叠',
                    children: [{
                        id: 5,
                        label: '一版'
                    },
                    {
                        id: 6,
                        label: '二版'
                    },
                    {
                        id: 55,
                        label: '三版'
                    },
                    {
                        id: 56,
                        label: '四版'
                    },
                    {
                        id: 546,
                        label: '五版'
                    }]
                }

            ],
            topTitle: [
                {
                    value: '1',
                    label: '新华每日电讯',
                    list: [
                        {
                            id: 2,
                            label: '新华每日电讯 2',
                            children: [{
                                id: 5,
                                label: '新华每日电讯 2-1'
                            },
                            {
                                id: 6,
                                label: '新华每日电讯 2-2'
                            }]
                        },
                        {
                            id: 3,
                            label: '新华每日电讯 3',
                            children: [
                                {
                                    id: 7,
                                    label: '新华每日电讯 3-1'
                                },
                                {
                                    id: 8,
                                    label: '新华每日电讯 3-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '2',
                    label: '每日电讯微博',
                    list: [
                        {
                            id: 2,
                            label: '每日电讯微博 2',
                            children: [{
                                id: 5,
                                label: '每日电讯微博 2-1'
                            },
                            {
                                id: 6,
                                label: '每日电讯微博 2-2'
                            }]
                        },
                        {
                            id: 3,
                            label: '每日电讯微博 3',
                            children: [
                                {
                                    id: 7,
                                    label: '每日电讯微博 3-1'
                                },
                                {
                                    id: 8,
                                    label: '每日电讯微博 3-2'
                                }
                            ]
                        }
                    ]
                }
            ],
            // 多选框列表
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick (picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '最近一个月',
                        onClick (picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '最近三个月',
                        onClick (picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                            picker.$emit('pick', [start, end])
                        }
                    }
                ]
            },
            pickerValue: ''
        }
    },
    methods: {
        // 栏目选择变化（单选）
        labelChange (value) {
            // this.radioName = value;
        },
        // 一级栏目选择变化（下拉框）
        topChange (value) {
            // this.topValue = value;
        },
        // 点击关闭回调函数
        messageBoxClose () {
        },
        // 日期选择值
        pickerChange (val) {
            // this.pickerValue = val;
        },
        // 选择日期查询
        searchTime () {
        },
        // 传稿意见
        textareaChange (val) {
            // this.textarea = val;
        },
        // 点击确定按钮（提交）
        draftConfirm () {
            this.draftData.contentShow = false
        }
    },
    computed: {
        dataList1 () {
            // let idx = 0;
            // this.topTitle.forEach((item,index) => {
            //     if (this.topValue == item.label){
            //         idx = index;
            //     }
            // });
            // let dataList = this.topTitle[0].list;
            return this.dataList
        }
    }
}
</script>
<style lang="scss" scoped>
.message-box {
    .message-lists {
        padding-bottom: 10px;
        @include border;
        .message-list {
            .el-col {
                line-height: 30px;
                @extend .text-overflow;
            }
        }
    }
    .message-content {
        .message-checkbox {
            height: 200px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
}
</style>
<style>
.pick-message-box .message-title{
    line-height: 25px
}
.pick-message-box .el-dialog__body {
    padding-top: 0px;
}
.pick-message-box .el-table td, .el-table th.is-leaf {
    border-bottom: 0px solid #dbdbdb;
}
.pick-message-box .message-box .message-content .message-checkbox {
    height: 344px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
}
</style>
