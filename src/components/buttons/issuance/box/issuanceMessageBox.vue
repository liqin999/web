<template>
    <el-dialog class=""
               title="签发"
               @close="messageBoxClose()"
               :visible.sync="issuanceData.contentShow"
               width="80%"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 签发信息 -->
            <el-row :gutter="20"
                    class="clearfix">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">签发信息</b></el-col>
                <el-col :span="21">
                    <el-row class="clearfix">
                        <template v-for="item in radioLabel">
                            <el-radio v-model="radioName"
                                      :label="item"
                                      :key="item">{{ item }}</el-radio>
                        </template>
                    </el-row>
                    <el-row class="clearfix pt10 pb10">
                        <!-- 处理时间 -->
                        <el-col :span="8"
                                class="times-select">
                            <template>
                                <span>处理时间</span>
                                <el-date-picker v-model="pickerTime"
                                                type="date"
                                                placeholder="选择日期"
                                                @change="pickerChange">
                                </el-date-picker>
                            </template>
                        </el-col>
                        <!-- 刊发位次 -->
                        <el-col :span="6"
                                class="text-right">
                            <template>
                                <span>刊发位次</span>
                                <el-select v-model="kanfaValue"
                                           class="sort-select">
                                    <el-option v-for="item in kanfaData"
                                               :key="item"
                                               :label="item"
                                               :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                        <!-- checkbox -->
                        <el-col :span="10">
                            <template>
                                <el-checkbox-group v-model="checkList">
                                    <template v-for="item in checkLabel">
                                        <el-checkbox :label="item"
                                                     :key="item"></el-checkbox>
                                    </template>
                                </el-checkbox-group>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 字体和字号 -->
            <el-row :gutter="20"
                    class="clearfix">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">字体和字号</b></el-col>
                <el-col :span="21">
                    <el-row :gutter="20"
                            class="font16">
                        <div>
                            <el-col :span="18"
                                    :offset="3">
                                <el-col :span="8"
                                        class="text-center"><span>标题字体</span></el-col>
                                <el-col :span="8"
                                        class="text-center"><span>横向字号</span></el-col>
                                <el-col :span="8"
                                        class="text-center"><span>纵向字号</span></el-col>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="checked">备选项</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="checked">备选项</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="checked">备选项</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fontValue">
                                        <el-option v-for="item in fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 签发目标 -->
            <el-row :gutter="20"
                    class="mt10">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">签发目标</b></el-col>
                <el-col :span="21">
                    <el-row>
                        <el-col :span="8">
                            <el-input type="textarea"
                                      :rows="12"
                                      placeholder="请输入内容"
                                      v-model="textarea"
                                      @change="textareaChange">
                            </el-input>
                        </el-col>
                        <el-col :span="16">
                            <el-col :span="5"
                                    class="text-right"><b class="message-title">签发意见</b></el-col>
                            <el-col :span="19"
                                    class="pl10">
                                <el-input type="textarea"
                                          :rows="8"
                                          placeholder="请输入内容"
                                          v-model="textarea2"
                                          @change="textareaChange2">
                                </el-input>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="issuanceConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="issuanceData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        issuanceData: {
            type: Object
        }
    },
    data () {
        return {
            checked: '',
            textarea: '请输入文字',
            textarea2: '请输入文字',
            radioName: '版面库',
            radioLabel: [
                '版面库',
                '栏目库'
            ],
            kanfaData: [1, 2, 3, 4, 5],
            fontValue: '宋体',
            fontData: [
                '宋体',
                '微软雅黑'
            ],
            kanfaValue: 1,
            pickerTime: '',
            checkLabel: [
                '预刊登日期优先',
                '重稿检查'
            ],
            checkList: ['预刊登日期优先']
        }
    },
    methods: {
        // 点击关闭回调函数
        messageBoxClose () {
        },
        // 日期改变
        pickerChange (val) {
            this.pickerTime = val
        },
        // 文本框值改变
        textareaChange (val) {
            this.textarea = val
        },
        // 文本框值改变
        textareaChange2 (val) {
            this.textarea2 = val
        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    line-height: 30px;
    // 时间插件修改样式
    .times-select {
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
            width: 70%;
            padding: 0;
        }
    }
    .sort-select {
        float: right;
        width: 40%;
        margin: 0 10px;
    }
    .el-checkbox-group {
        text-align: right;
    }
    .font-select {
        margin: 10px 0;
    }
}
</style>
