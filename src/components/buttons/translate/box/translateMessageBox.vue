<template>
    <el-dialog class="translate-message"
               title="翻译"
               @close="messageBoxClose()"
               :visible.sync="translateData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
       <div class="message-box">
                <el-row :gutter="30">
                    <!-- 原文 -->
                    <el-col :span="5">
                        <b>原文：</b>
                    </el-col>
                    <!-- 选框 -->
                    <el-col :span="18">
                        <el-radio-group v-model="radioName">
                            <template v-for="label in radioLabel">
                                <el-col :span="6"
                                        :key="label">
                                    <el-radio :label="label"
                                              @change="labelChange">{{ label }}
                                    </el-radio>
                                </el-col>
                            </template>
                        </el-radio-group>
                    </el-col>
                </el-row>
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
                <el-row>
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
.translate-message.el-dialog {
    width: 50%;
    /* min-width: 500px; */
}
</style>
