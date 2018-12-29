<template>
    <el-dialog class=""
               title="稿签信息"
               @close="messageBoxClose()"
               :visible.sync="labelData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="20"
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
                                    <span>原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题</span>
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
                                    <span>作者</span>
                                </el-col>
                                <!-- 来源 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <b>来源：</b>
                                </el-col>
                                <el-col :span="5">
                                    <!-- <el-input v-model="input"
                                              placeholder="自写稿"></el-input> -->
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
                                    <span>原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题</span>
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
                                        <el-table-column prop="date"
                                                         label="日期"
                                                         width="180">
                                        </el-table-column>
                                        <el-table-column prop="name"
                                                         label="姓名"
                                                         width="180">
                                        </el-table-column>
                                        <el-table-column prop="address"
                                                         label="地址">
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
                                    <!-- <el-input v-model="input"
                                              placeholder=""></el-input> -->
                                    <span>admin</span>
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
                    <el-input type="textarea"
                              :rows="16"
                              placeholder="请输入内容"
                              v-model="textarea">
                    </el-input>
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
            tableData: []
        }
    },
    methods: {
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
.message-box {
    line-height: 35px;
    .label-border {
        @include border(bottom, 1px, solid, $tint-border-color);
    }
}
</style>
