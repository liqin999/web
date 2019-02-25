<template>
    <el-dialog class="draft-message"
               title="稿签信息"
               @close="messageBoxClose()"
               :visible.sync="draftData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="50"
                    class="clearfix">
                <!-- 左侧 -->
                <el-col :span="18">
                    <el-row :gutter="20">
                        <!-- <el-col :span="24"
                                class="draft-border">
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>原稿标题：</b>
                                </el-col>
                                <el-col :span="20">
                                    <span>一个灵魂的旅行</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>作者：</b>
                                </el-col>
                                <el-col :span="4">
                                    <span>强晓玲</span>
                                </el-col>
                                <el-col :span="3"
                                        class="text-right">
                                    <b>来源：</b>
                                </el-col>
                                <el-col :span="5">
                                    <span>自写稿</span>
                                </el-col>
                                <el-col :span="3"
                                        class="text-right">
                                    <b>体裁：</b>
                                </el-col>
                                <el-col :span="5">
                                    <span>新闻报道</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>分类：</b>
                                </el-col>
                                <el-col :span="20">
                                    <span>社会</span>
                                </el-col>
                            </el-row>
                        </el-col> -->
                        <el-col :span="24">
                            <!-- 详细作者信息table -->
                            <el-row :gutter="20"
                                    class="mb10">
                                <b>详细作者信息</b>
                                <template>
                                    <el-table :data="tableData"
                                              style="width: 100%">
                                        <el-table-column prop="id"
                                                         label="序号">
                                        </el-table-column>
                                        <el-table-column prop="name"
                                                         label="姓名">
                                        </el-table-column>
                                        <el-table-column prop="penName"
                                                         label="笔名">
                                        </el-table-column>
                                        <el-table-column prop="authorType"
                                                         label="作者类型">
                                        </el-table-column>
                                        <el-table-column prop="editUser"
                                                         label="采编用户">
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </el-row >
                            <el-row :gutter="20">
                                <el-col :span="21">
                                    <el-form :model="formData" label-width="100px">
                                    <el-row :gutter="24">
                                        <el-col :span="12" >
                                        <el-form-item label="姓名:">
                                        <el-input v-model="formData.name" style="width: 180px"></el-input>
                                    </el-form-item>
                                    <el-form-item label="笔名:">
                                        <el-input v-model="formData.penName" style="width: 180px"></el-input>
                                    </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="作者类型:">
                                            <el-select v-model="formData.authorTypeValue" placeholder="请选择">
                                                <el-option
                                                v-for="item in formData.authorTypeData"
                                                :key="item"
                                                :label="item"
                                                :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="采编用户:">
                                            <el-select v-model="formData.editUserValue" placeholder="请选择">
                                                <el-option
                                                v-for="item in formData.editUserData"
                                                :key="item"
                                                :label="item"
                                                :value="item">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <!-- <el-form-item class="btn-group text-right mt15">
                                        <el-button class="primary-btn">新增</el-button>
                                    <el-button class="reset-btn">删除</el-button>
                                    </el-form-item> -->
                                    </el-row>
                                </el-form>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="draft-border btn-group text-right mt15">
                                <el-button class="primary-btn">新增</el-button>
                                <el-button class="reset-btn">删除</el-button>
                            </el-row>
                            <!-- 联系人 -->
                            <el-row :gutter="20">
                                <b style="display:block">联系人</b>
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
                                        </el-form>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="6">
                    <b>附件</b>
                    <el-row :gutter="20"
                            class='message-content'>
                        <el-col class="message-checkbox"
                                :span="24">
                            <el-row :gutter="2"
                                    style="line-height: 30px">
                                <el-col :span="2">
                                    <i class="el-icon-document"></i>
                                </el-col>
                                <el-col :span="17">
                                    <!-- <a href="/review" style="font-size: 1px">(脱贫攻坚)羊信发"羊财"</a> -->
                                    <span style="font-size: 1px"
                                          @click="fileClick">一个灵魂的旅行</span>
                                </el-col>
                                <el-col :span="5">
                                    <span style="font-size: 1px">9.52MB</span>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
             <el-button class="primary-btn"
                       @click="draftConfirm('contactForm')">确认</el-button>
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
            textarea: null,
            input: null,
            tableData: [
                {
                    id: '1',
                    name: '强晓玲',
                    penName: '',
                    authorType: '',
                    editUser: '是'
                }
            ],
            formData: {
                name: '',
                penName: '',
                authorTypeValue: '',
                authorTypeData: [],
                editUserValue: '是',
                editUserData: ['是', '否']
            },
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
        fileClick () {
            this.$router.push({ path: '/review' })
        },
        messageBoxClose () {

        },
        // 点击确定按钮（提交）
        draftConfirm (contactForm) {
            this.$refs[contactForm].validate((valid) => {
                if (valid) {
                    this.draftData.contentShow = false
                    // this.$router.push({
                    //     path: '/columnsLayout'
                    // })
                } else {
                    return false
                }
            })
        }
    },
    computed: {
        draftList1 () {
            // let idx = 0;
            // this.topTitle.forEach((item,index) => {
            //     if (this.topValue == item.label){
            //         idx = index;
            //     }
            // });
            // let dataList = this.topTitle[0].list;
            return this.draftList
        }
    }
}
</script>

<style lang="scss" scoped>
.draft-message .message-box {
    line-height: 35px;
    .draft-border {
        @include border(bottom, 1px, solid, $tint-border-color);
    }
    .message-content {
        .message-checkbox {
            height: 365px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
    .message-content[data-v-49e2cde9] {
        padding-top: 1px;
        line-height: 15px;
    }
}
.draft-message .is-error{
    height: 57px;
}
</style>
