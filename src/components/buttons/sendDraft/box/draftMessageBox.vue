<template>
    <el-dialog class=""
               title="传稿"
               @close="messageBoxClose()"
               :visible.sync="draftData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 待传稿件列表 -->
            <el-row :gutter="20"
                    class="message-lists clearfix">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">待传稿件</b></el-col>
                <el-col :span="21"
                        class="tab-padding">
                    <template v-for="(item,index) in draftData.draftList">
                        <div :key="index"
                             class="message-list clearfix">
                            <el-col :span="9"><i></i>{{ item.title }}</el-col>
                            <el-col :span="9"><b>{{ item.name }}</b></el-col>
                            <el-col :span="6">{{ item.size }}</el-col>
                        </div>
                    </template>
                </el-col>
            </el-row>
            <!-- 选项内容区 -->
            <el-row :gutter="20"
                    class="message-content clearfix">
                <!-- 送往 -->
                <el-col :span="15">
                    <el-row :gutter="20">
                        <el-col :span="3"
                                class="tab-padding"><b class="message-title padding-bottom10">送往</b></el-col>
                        <el-col :span="14">
                            <el-row>
                                <template v-for="label in radioLabel">
                                    <el-col :span="12"
                                            class="text-overflow"
                                            :key="label">
                                        <el-radio v-model="radioName"
                                                  :label="label"
                                                  @change="labelChange">{{ label }}</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                        <el-col :span="7">
                            <el-row :gutter="0">
                                <el-col :span="24"
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
                    <!-- 多选框 -->
                    <el-row class="mt15">
                        <el-col :span="21"
                                :offset="3">
                            <el-row>
                                <el-col :span="12"
                                        class="message-checkbox">
                                    <el-tree :data="dataList"
                                             show-checkbox
                                             node-key="id"
                                             :props="defaultProps">
                                    </el-tree>
                                </el-col>
                                <el-col :span="12"
                                        class="message-checkbox">
                                    <el-tree :data="dataList"
                                             show-checkbox
                                             node-key="id"
                                             :props="defaultProps">
                                    </el-tree>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 专题 -->
                <el-col :span="9">
                    <el-row :gutter="10">
                        <!-- <el-col :span="24"
                                class="clearfix"><b class="message-title padding-bottom10">专题</b></el-col>
                        <el-col :span="17">
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
                        </el-col> -->
                        <!-- <el-col :span="7">
                            <el-button plain
                                       class="btn-inquire"
                                       @click="searchTime">查询</el-button>
                        </el-col> -->
                        <!-- </el-row> -->
                    </el-row>
                    <!-- 传稿意见 -->
                    <el-row :gutter="10"
                            class="">
                        <el-col :span="24"
                                class="clearfix"><b class="message-title padding-bottom10 inline-block">传稿意见</b><span class="redColor">（不超过255个字）</span></el-col>
                        <!-- <el-row> -->
                        <el-col :span="24">
                            <el-input type="textarea"
                                      :rows="12"
                                      placeholder="请输入内容"
                                      v-model="textarea"
                                      @change="textareaChange">
                            </el-input>
                        </el-col>
                        <!-- </el-row> -->
                    </el-row>
                </el-col>
            </el-row>
            <!-- 送往 栏目列表 -->
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="draftConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="draftData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        draftData: {
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
                '媒体公共库',
                '我的稿库',
                '组室公共库',
                '其他人员库',
                '专题库'
            ],
            topValue: '新华每日电讯',
            dataList: [
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
