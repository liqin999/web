<template>
    <el-dialog class="translate-message"
               title="翻译"
               @close="messageBoxClose()"
               :visible.sync="translateData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
       <div class="message-box">
                <el-row :gutter="10">
                    <!-- 原文 -->
                    <el-col :span="2">
                        <b>原文：</b>
                    </el-col>
                    <!-- 选框 -->
                    <el-col :span="18">
                            <template v-for="label in radioLabel">
                                <el-col :span="6"
                                        :key="label">
                                    <el-radio v-model="radioName"
                                             :label="label"
                                            @change="labelChange">{{ label }}</el-radio>
                                             <!-- <el-radio v-model="radioName1"
                                                  label="1">入库前提示 </el-radio>
                                        <el-radio v-model="radioName1"
                                                  label="2">直接入库</el-radio> -->
                                </el-col>
                            </template>
                    </el-col>
                <!--文本框  -->
                    <el-row>
                    <el-col :span="20">
                            <el-input type="textarea"
                                      :rows="7"
                                      placeholder="请输入内容"
                                      v-model="area"
                                      @change="textChange">
                            </el-input>
                        </el-col>
                    </el-row>
                <!--译文 -->
                    <el-row>
                    <el-col :span="2">
                        <b>译文：</b>
                    </el-col>
                    </el-row>
                <!-- 文本框 -->
                    <el-col :span="20">
                            <el-input type="textarea"
                                      :rows="7"
                                      placeholder="请输入内容"
                                      v-model="textarea"
                                      @change="textareaChange">
                            </el-input>
                    </el-col>
                </el-row>
                <!-- 底部按钮 -->
                <div class="text-right">
                    <el-button class="primary-btn"
                            @click="sendDetailFn()">提交</el-button>
                    <el-button class="primary-btn"
                            @click="imagePreviewFn()">灌文</el-button>
                    <el-button class="primary-btn"
                            @click="save()">保存</el-button>
                    <el-button class="primary-btn"
                            @click="translateData.contentShow = false">关闭</el-button>
                </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        translateData: {
            type: Object
        }
    },
    data () {
        return {
            label: '',
            radioName1: '1',
            textarea: null,
            area: null,
            radioName: '原左译右',
            radioLabel: [
                '原左译右',
                '译左原右',
                '原上译下',
                '译上原下'
            ]
        }
    },
    methods: {
        // 提交
        sendDetailFn () {

        },
        // 灌文
        imagePreviewFn () {

        },
        // 保存
        save () {

        },
        // 栏目选择变化（单选）
        labelChange (value) {
            // this.radioName = value;

        },
        textareaChange (val) {

        },
        textChange (val) {

        },
        messageBoxClose () {

        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    line-height: 35px;
}
</style>
<style>
.el-dialog {
    width: 50%;
    min-width: 500px;
}
</style>
