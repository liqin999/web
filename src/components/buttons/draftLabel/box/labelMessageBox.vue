<template>
    <el-dialog class="label-message"
               title="稿签信息"
               @close="messageBoxClose()"
               :visible.sync="labelData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="50"
                    class="clearfix">
                <!-- 左侧 -->
                <el-col :span="18">
                    <el-row :gutter="20">
                        <el-col :span="24"
                                class="label-border">
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>原稿标题：</b>
                                </el-col>
                                <el-col :span="20">
                                    <!-- <el-input v-model="input"
                                              placeholder="原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题"></el-input> -->
                                    <span>脱贫攻坚</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <!-- 作者 -->
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>第一作者：</b>
                                </el-col>
                                <el-col :span="4">
                                    <!-- <el-input v-model="input"
                                              placeholder="作者"></el-input> -->
                                    <span>刘晶瑶</span>
                                </el-col>
                                <!-- 来源 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <b>来源：</b>
                                </el-col>
                                <el-col :span="5">
                                    <span>自写稿</span>
                                </el-col>
                                <!-- 体裁 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <b>体裁：</b>
                                </el-col>
                                <el-col :span="5">
                                    <!-- <el-input v-model="input"
                                              placeholder="消息"></el-input> -->
                                    <span>消息</span>
                                </el-col>
                            </el-row>
                            <!-- 分类 -->
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>分类：</b>
                                </el-col>
                                <el-col :span="20">
                                    <!-- <el-input v-model="input"
                                              placeholder=""></el-input> -->
                                    <span>文本</span>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="24">
                            <!-- 详细作者信息table -->
                            <el-row :gutter="20"
                                    class="mb10">
                                <b>详细作者信息</b>
                                <template>
                                    <el-table :data="tableData"
                                              style="width: 100%">
                                        <el-table-column prop="id"
                                                         label="序号"
                                                         width="180">
                                        </el-table-column>
                                        <el-table-column prop="name"
                                                         label="姓名"
                                                         width="180">
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
                            </el-row>
                            <!-- 联系人 -->
                            <el-row :gutter="20">
                                <b style="display:block">联系人</b>
                                <!-- 姓名 -->
                                <el-col :span="4"
                                        class="tab-padding">
                                    <span>姓名：</span>
                                </el-col>
                                <el-col :span="6">
                                    <span>郝玉</span>
                                </el-col>
                                <!-- 电话 -->
                                <el-col :span="4"
                                        class="text-right tab-padding">
                                    <span>电话：</span>
                                </el-col>
                                <el-col :span="6">
                                    <!-- <el-input v-model="input"
                                              placeholder=""></el-input> -->
                                    <span>12345543222</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <!-- E-mail -->
                                <el-col :span="4"
                                        class="tab-padding">
                                    <span>E-mail：</span>
                                </el-col>
                                <el-col :span="6">
                                    <!-- <el-input v-model="input"
                                              placeholder="E-mail"></el-input> -->
                                    <span>12345@163.com</span>
                                </el-col>
                                <!-- 邮编 -->
                                <el-col :span="4"
                                        class="tab-padding text-right">
                                    <span>邮编：</span>
                                </el-col>
                                <el-col :span="5">
                                    <!-- <el-input v-model="input"
                                              placeholder=""></el-input> -->
                                    <span>0989000</span>
                                </el-col>
                            </el-row>
                            <!-- 地址 -->
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <span>地址：</span>
                                </el-col>
                                <el-col :span="13">
                                    <!-- <el-input v-model="input"
                                              placeholder=""></el-input> -->
                                    <span>北京市新华社</span>
                                </el-col>

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
                                          @click="fileClick">(脱贫攻坚)羊信发"羊财"</span>
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
            <el-button class="reset-btn"
                       @click="labelData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        labelData: {
            type: Object
        }
    },
    data () {
        return {
            textarea: null,
            input: null,
            tableData: [
                {
                    id: '1',
                    name: '刘晶瑶',
                    penName: '',
                    authorType: '',
                    editUser: '是'
                }
            ]
        }
    },
    methods: {
        fileClick () {
            this.$router.push({ path: '/review' })
        },
        messageBoxClose () {

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
.label-message .message-box {
    line-height: 35px;
    .label-border {
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
</style>
