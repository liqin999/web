<template>
    <el-dialog class="" title="签发" @close="messageBoxClose()" :visible.sync="issuanceData.contentShow" width="80%" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 签发信息 -->
            <el-row :gutter="20" class="clearfix">
                <el-col :span="3"><b class="font-h1">签发信息</b></el-col>
                <el-col :span="21">
                    <template v-for="item in radioLabel">
                        <el-radio v-model="radioName" :label="item" :key="item">{{ item }}</el-radio>
                    </template>
                    <el-row>
                        <!-- 处理时间 -->
                        <el-col :span="8">
                            <template>
                                <div class="block">
                                    <span class="demonstration">处理时间</span>
                                    <el-date-picker
                                        v-model="pickerTime"
                                        type="date"
                                        placeholder="选择日期"
                                        @change="pickerChange">
                                    </el-date-picker>
                                </div>
                            </template>
                        </el-col>
                        <!-- 刊发位次 -->
                        <el-col :span="6">
                            <template>
                                <span>刊发位次</span>
                                <el-select v-model="kanfaValue" class="select-float">
                                    <el-option
                                        v-for="item in kanfaData"
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
                                        <el-checkbox :label="item" :key="item"></el-checkbox>
                                    </template>
                                </el-checkbox-group>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 字体和字号 -->
            <el-row :gutter="20" class="clearfix">
                <el-col :span="3"><b class="font-h1">字体和字号</b></el-col>
                <el-col :span="21">
                    <el-row>
                        <el-col :span="21" :offset="3">
                            <el-col :span="8"><span>字体和字号</span></el-col>
                            <el-col :span="8"><span>字体和字号</span></el-col>
                            <el-col :span="8"><span>字体和字号</span></el-col>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3">
                            <template>
                                <el-checkbox v-model="checked">备选项</el-checkbox>
                            </template>
                        </el-col>
                        <el-col :span="7">
                            <template>
                                <el-select v-model="fontValue">
                                    <el-option
                                        v-for="item in fontData"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                        <el-col :span="7">
                            <template>
                                <el-select v-model="fontValue">
                                    <el-option
                                        v-for="item in fontData"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                        <el-col :span="7">
                            <template>
                                <el-select v-model="fontValue">
                                    <el-option
                                        v-for="item in fontData"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 签发目标 -->
            <el-row :gutter="20">
                <el-col :span="3"><b class="font-h1">签发目标</b></el-col>
                <el-col :span="21">
                    <el-col :span="8">
                        <el-input
                            type="textarea"
                            :rows="12"
                            placeholder="请输入内容"
                            v-model="textarea"
                            @change="textareaChange">
                        </el-input>
                    </el-col>
                    <el-col :span="16">
                        <el-col :span="5"><b class="font-h1">签发意见</b></el-col>
                        <el-col :span="19">
                            <el-input
                                type="textarea2"
                                :rows="8"
                                placeholder="请输入内容"
                                v-model="textarea2"
                                @change="textareaChange2">
                            </el-input>
                        </el-col>
                    </el-col>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer" class="dialog-footer">
            <el-button type="success" size="medium" @click="issuanceConfirm()">确认</el-button>
            <el-button size="medium" @click="issuanceData.contentShow = false">取 消</el-button>
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
            checked:'',
            textarea: "请输入文字",
            textarea2: "请输入文字",
            radioName: '版面库',
            radioLabel: [
                '版面库',
                '栏目库'
            ],
            kanfaData: [1,2,3,4,5],
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
      };
    },
    methods: {
        //点击关闭回调函数
        messageBoxClose(){
        },
        // 日期改变
        pickerChange(val){
            this.pickerTime = val;
        },
        // 文本框值改变
        textareaChange(val){
            this.textarea = val;
        },
        // 文本框值改变
        textareaChange2(val){
            this.textarea2 = val;
        }
    }
}
</script>

<style>
.message-box{
    padding:0 10px;
}
.el-row{
    padding-bottom: 20px;
}
.title-bottom{
    display: block;
    padding-bottom: 10px;
}
.el-row .el-col:first-child{
    padding-left: 0px!important;
}
.el-range-editor.el-input__inner{
    width: 100%;
}
.el-row .el-col:last-child{
    padding-right: 0px!important;
}
.message-list .el-col{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.message-list h2{
    display: inline-block;
}
.btn-search{
    width: 100%;
}
.font-h1{
    font-size: 16px;
}
.radio-label{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 10px;
}
.message-checkbox{
    border: 1px solid #ccc;
    padding: 20px;
}
.select-float{
    width: 60%;
}
.block{
    width: 100%;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 70%;
}
</style>
