<template>
    <el-dialog title="建稿"
               @close="messageBoxClose()"
               :visible.sync="draftData.contentShow"
               top="15vh"
               width="400px"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">

            <!-- 选项内容区 -->
            <el-row :gutter="20"
                    class="message-content clearfix">
                <!-- 送往 -->
                <el-col :span="24">
                    <el-row :gutter="20">

                        <el-col :span="24">

                            <el-row>
                                <el-col :span="3">
                                    <span class="message-title">目标：</span>
                                </el-col>
                                <template v-for="label in radioLabel">
                                    <el-col :span="7"
                                            class="text-overflow"
                                            :key="label">
                                        <el-radio v-model="radioName"
                                                  :label="label"
                                                  @change="labelChange">{{ label }}</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                        <el-col :span="24">
                            <el-row :gutter="0">
                                <el-col :span="24"
                                        class="padding-top10">
                                    <template>
                                        <el-col :span="3">
                                            <span class="message-title">媒体：</span>
                                        </el-col>

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
                                    <el-tree :data="dataList1"
                                             ref="tree1"
                                             @check-change="handleCheckChange1"
                                             :default-expand-all="true"
                                             show-checkbox
                                             node-key="id"
                                             :props="defaultProps">
                                    </el-tree>
                                </el-col>
                                <el-col :span="12"
                                        class="message-checkbox">
                                    <el-tree :data="dataList2"
                                             ref="tree2"
                                             @check-change="handleCheckChange2"
                                             :default-expand-all="true"
                                             show-checkbox
                                             node-key="id"
                                             :props="defaultProps">
                                    </el-tree>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-row>

                        <el-col :span="24">

                            <el-row>
                                <el-col :span="3">
                                    <span class="message-title">下次：</span>
                                </el-col>
                                <template>
                                    <el-col :span="7"
                                            class="text-overflow"
                                            :key="label">
                                        <el-radio v-model="radioName1"
                                                  label="1">入库前提示 </el-radio>
                                        <el-radio v-model="radioName1"
                                                  label="2">直接入库</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>

                    </el-row>
                </el-col>
                <!-- 专题 -->

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
            // radioData: '1',
            submitData: null,
            radioName1: '1',
            textarea: '请输入文字',
            // 栏目选择
            radioName: '栏目稿库',
            radioLabel: [
                '栏目稿库',
                '版面稿库',
                '我的稿库'
            ],
            topValue: '新华每日电讯',
            dataList1: [
                {
                    id: '1',
                    label: '栏目',
                    children: [{
                        id: '1-1',
                        label: '头版'
                    },
                    {
                        id: '1-2',
                        label: '要闻'
                    }, {
                        id: '1-3',
                        label: '国内新闻'
                    },
                    {
                        id: '1-4',
                        label: '新闻焦点'
                    }

                    ]
                }

            ],
            dataList2: [
                {
                    id: 2,
                    label: 'A叠',
                    children: [
                        {
                            id: '2-1',
                            label: '一版'
                        },
                        {
                            id: '2-2',
                            label: '二版'
                        },
                        {
                            id: '2-3',
                            label: '三版'
                        },
                        {
                            id: '2-4',
                            label: '四版'
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
            // 路由的跳转
            this.$router.push({
                path: '/columnsLayout'
            })
        },
        handleCheckChange1 (data) {
            let arr = ['1', '1-1', '1-2', '1-3', '1-4']
            let getCheckedKeys = this.$refs.tree1.getCheckedKeys()
            getCheckedKeys.forEach(item => {
                if (arr.indexOf(item) > -1) {
                    this.radioName = '栏目稿库'
                }
            })
            this.$refs.tree2.setCheckedKeys([])
        },
        handleCheckChange2 (data) {
            let arr = ['2', '2-1', '2-2', '2-3', '2-4']
            let getCheckedKeys = this.$refs.tree2.getCheckedKeys()
            getCheckedKeys.forEach(item => {
                if (arr.indexOf(item) > -1) {
                    this.radioName = '版面稿库'
                }
            })
            this.$refs.tree1.setCheckedKeys([])
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
.message-box {
    padding: 0px 10px;
    .message-lists {
        padding-bottom: 10px;
        @include border;
        .message-list {
            .el-col {
                @extend .text-overflow;
                line-height: 30px;
            }
        }
    }
    .message-content {
        padding-top: 15px;
        line-height: 30px;
        .message-checkbox {
            height: 200px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
}
</style>
