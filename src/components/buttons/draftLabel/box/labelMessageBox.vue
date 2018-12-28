<template>
    <el-dialog class=""
               title="稿签信息"
               @close="messageBoxClose()"
               :visible.sync="labelData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="20"
                    class="message-content clearfix">
                <!-- 左侧 -->
                <el-col :span="18">
                    <el-row>
                        <el-col :span="24"
                                class="label-border">
                            <el-row :gutter="20"
                                    class="mb15">
                                <el-col :span="3"
                                        class="tab-padding">
                                    <span>原稿标题</span>
                                </el-col>
                                <el-col :span="21">
                                    <el-input v-model="input"
                                              placeholder="原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题"></el-input>
                                    <!-- <span class="font18">原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题</span> -->
                                </el-col>
                            </el-row>
                            <el-row :gutter="20"
                                    class="mb15">
                                <!-- 作者 -->
                                <el-col :span="3"
                                        class="tab-padding">
                                    <span>第一作者</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="作者"></el-input>
                                    <!-- <span>作者</span> -->
                                </el-col>
                                <!-- 来源 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <span>来源</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="自写稿"></el-input>
                                    <!-- <span>自写稿</span> -->
                                </el-col>
                                <!-- 体裁 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <span>体裁</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="消息"></el-input>
                                    <!-- <span>消息</span> -->
                                </el-col>
                            </el-row>
                            <!-- 分类 -->
                            <el-row :gutter="20"
                                    class="mb15">
                                <el-col :span="3"
                                        class="tab-padding">
                                    <span>分类</span>
                                </el-col>
                                <el-col :span="13">
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                    <!-- <span class="font18">原稿标题原稿标题原稿标题原稿标题原稿标题原稿标题</span> -->
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="24"
                                class="mt15">
                            <!-- 详细作者信息table -->
                            <span>详细作者信息</span>
                            <template>
                                <el-table :data="tableData"
                                          border
                                          style="width: 100%"
                                          class="mb15">
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
                            <!-- 联系人 -->
                            <span>联系人</span>
                            <el-row :gutter="20"
                                    class="mb15">
                                <!-- 姓名 -->
                                <el-col :span="3"
                                        class="tab-padding">
                                    <span>姓名</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                    <!-- <span>作者</span> -->
                                </el-col>
                                <!-- 电话 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <span>电话</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                    <!-- <span>自写稿</span> -->
                                </el-col>
                                <!-- E-mail -->
                                <el-col :span="3"
                                        class="text-right">
                                    <span>E-mail</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="E-mail"></el-input>
                                    <!-- <span>E-mail</span> -->
                                </el-col>
                            </el-row>
                            <!-- 地址 -->
                            <el-row :gutter="20"
                                    class="mb15">
                                <el-col :span="3"
                                        class="tab-padding">
                                    <span>地址</span>
                                </el-col>
                                <el-col :span="13">
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                    <!-- <span class="font18">地址</span> -->
                                </el-col>
                                <!-- 邮编 -->
                                <el-col :span="3"
                                        class="tab-padding text-right">
                                    <span>邮编</span>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                    <!-- <span class="font18">邮编</span> -->
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="6">
                    <span>附件</span>
                    <el-input type="textarea"
                              :rows="22"
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
.label-border {
    @include border(bottom, 1px, solid, $border-area-color);
}
</style>
