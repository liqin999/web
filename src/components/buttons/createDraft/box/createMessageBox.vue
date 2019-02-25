<template>
    <el-dialog class="create-messageBox"
               title="建稿"
               @close="messageBoxClose()"
               :visible.sync="createData.contentShow"
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
                                             @node-click="handleCheckChange1"
                                             :highlight-current="true"
                                             :default-expand-all="true"
                                             node-key="id"
                                             :props="defaultProps">
                                    </el-tree>
                                </el-col>
                                <el-col :span="12"
                                        class="message-checkbox">
                                    <el-tree :data="dataList2"
                                             ref="tree2"
                                             @node-click="handleCheckChange2"
                                             :highlight-current="true"
                                             :default-expand-all="true"
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
                                            class="text-overflow">
                                        <el-radio v-model="radioName1"
                                                  label="1">入库前提示 </el-radio>
                                        <el-radio v-model="radioName1"
                                                  label="2">直接入库</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-row>
                                <el-col :span="3">
                                    <span class="message-title">联系人：</span>
                                </el-col>
                                <template>
                                    <el-col :span="21"
                                            class="text-overflow">
                                        <el-form :model="contactForm" :rules="rules" ref="contactForm" label-width="100px" >
                                            <el-row :gutter="24">
                                                <el-col :span="12">
                                                    <el-form-item label="姓名:" prop="name">
                                                        <el-input  v-model="contactForm.name" ></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="E-mail:" prop="email">
                                                        <el-input v-model="contactForm.email"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="地址:" prop="address">
                                                        <el-input v-model="contactForm.address"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="电话:" prop="phone">
                                                        <el-input v-model="contactForm.phone" ></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="邮编:" prop="zipCode">
                                                        <el-input v-model="contactForm.zipCode"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <!-- <el-row :gutter="24">
                                                <el-col :span="12">
                                                    <el-form-item label="姓名:" prop="name">
                                                        <el-input  v-model="contactForm.name" ></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="电话:" prop="phone">
                                                        <el-input v-model="contactForm.phone" ></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row :gutter="20">
                                                <el-col :span="12">
                                                    <el-form-item label="邮箱:" prop="email">
                                                        <el-input v-model="contactForm.email"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-form-item label="邮编:" prop="zipCode">
                                                        <el-input v-model="contactForm.zipCode"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-row :gutter="20">
                                                <el-col :span="12">
                                                    <el-form-item label="地址:" prop="address">
                                                        <el-input v-model="contactForm.address"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row> -->
                                        </el-form>
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
                       @click="draftConfirm('contactForm')">确认</el-button>
            <el-button class="reset-btn"
                       @click="createData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        createData: {
            type: Object
        }
    },
    data () {
        var checkPhone = (rule, value, callback) => {
            if (value === '') {
                // callback(new Error('请输入电话'))
                callback()
            }
            if (!(/^1[34578]\d{9}$/.test(value))) {
                callback(new Error('电话格式错误'))
            } else {
                // if (this.contactForm.phone !== '') {
                this.$refs.contactForm.validateField('phone')
                // }
                callback()
            }
        }
        var checkEmail = (rule, value, callback) => {
            if (value === '') {
                // callback(new Error('请输入邮箱'))
                callback()
            }
            if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) {
                callback(new Error('邮箱格式错误'))
            } else {
                // if (this.contactForm.email !== '') {
                this.$refs.contactForm.validateField('email')
                // }
                callback()
            }
        }
        var checkZipCode = (rule, value, callback) => {
            if (value === '') {
                // callback(new Error('请输入邮编'))
                callback()
            }
            if (!(/^[0-9]\d{5}$/.test(value))) {
                callback(new Error('邮编格式错误'))
            } else {
                // if (this.contactForm.zipCode !== '') {
                this.$refs.contactForm.validateField('zipCode')
                // }
                callback()
            }
        }
        return {
            label: '',
            submitData: null,
            radioName1: '1',
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
                    id: '2',
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

            pickerValue: '',
            contactForm: {
                name: '', // 联系人姓名
                phone: '', // 电话
                email: '', // 邮箱
                zipCode: '', // 邮编
                address: '' // 地址
            },
            rules: {
                phone: [
                    {validator: checkPhone, trigger: 'blur'}
                ],
                email: [
                    {validator: checkEmail, trigger: 'blur'},
                    { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
                ],
                zipCode: [
                    {validator: checkZipCode, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        // 栏目选择变化（单选）
        labelChange (value) {
            if (value === '我的稿库') {
                this.$refs.tree1.setCurrentNode([])
                this.$refs.tree2.setCurrentNode([])
            }
        },
        // 一级栏目选择变化（下拉框）
        topChange (value) {
            // this.topValue = value;
        },
        // 点击确定按钮（提交）
        draftConfirm (contactForm) {
            this.$refs[contactForm].validate((valid) => {
                if (valid) {
                    this.$router.push({
                        path: '/columnsLayout'
                    })
                } else {
                    return false
                }
            })
        },
        handleCheckChange1 (data) {
            let arr = ['1', '1-1', '1-2', '1-3', '1-4']
            if (arr.indexOf(data.id) > -1) {
                this.radioName = '栏目稿库'
            }
            this.$refs.tree2.setCurrentNode([])
        },
        handleCheckChange2 (data) {
            let arr = ['2', '2-1', '2-2', '2-3', '2-4']
            if (arr.indexOf(data.id) > -1) {
                this.radioName = '版面稿库'
            }
            this.$refs.tree1.setCurrentNode([])
        },
        messageBoxClose () {

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
.is-error{
    height: 57px;
}

</style>
<style>
.create-messageBox .el-form-item__label {
    text-align: left
}
</style>
