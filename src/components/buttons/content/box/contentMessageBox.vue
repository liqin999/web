<template>
    <el-dialog class="content-message-box"
               title="内容"
               @close="messageBoxClose()"
               :visible.sync="contentData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-form ref="form" :model="contentData.contentList" label-width="80px">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="标题">
                            <el-input></el-input>
                        </el-form-item>
                        <el-row :gutter="20" style="height: 47px">
                            <el-col :span="12">
                                <el-form-item label="创建人">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="媒体">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="原内容" style="height:92px">
                            <el-input class="input-height"></el-input>
                        </el-form-item>
                        <el-form-item label="补充内容" style="height:92px">
                            <el-input class="input-height"></el-input>
                        </el-form-item>
                        <el-form-item label="原备注" style="height:92px">
                            <el-input class="input-height"></el-input>
                        </el-form-item>
                        <el-form-item label="补充备注" style="height:92px">
                            <el-input class="input-height"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-row :gutter="20">
                            <el-col :span="15">
                                <el-form-item label="创建时间">
                                    <el-date-picker v-model="data" type="datetime" placeholder="选择日期时间"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="成员" style="height:228px">
                            <el-button class="primary-btn">选择</el-button>
                            <el-button class="primary-btn">删除</el-button>
                            <el-input class="input-height2"></el-input>
                        </el-form-item>
                        <el-form-item label="历史" style="height:132px">
                            <el-input class="input-height2" v-model="contentData.contentList.history"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="draftConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="contentData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        contentData: {
            type: Object
        }
    },
    data () {
        return {
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
            this.draftData.contentShow = false
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
    .message-lists {
        padding-bottom: 10px;
        @include border;
        .message-list {
            .el-col {
                line-height: 30px;
                @extend .text-overflow;
            }
        }
    }
    .message-content {
        .message-checkbox {
            height: 250px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
}
</style>
<style>
.input-height .el-input__inner {
    height: 80px;
    line-height: 30px;
    border-radius: 3px;
    border-color: #cbcbcb;
}
.input-height2 .el-input__inner {
    height: 174px;
    line-height: 30px;
    border-radius: 3px;
    border-color: #cbcbcb;
}
</style>
