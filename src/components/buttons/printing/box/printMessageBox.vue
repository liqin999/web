<template>
    <el-dialog class="print-message"
               title="打印设置"
               @close="messageBoxClose()"
               :visible.sync="printData.contentShow"
               width="40%"
               top="0vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <el-row :gutter="0"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>设置每行打印字数：</span>
            </el-col>
            <el-col :span="7">
                <el-input clearable></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="0"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>设置打印栏数：</span>
            </el-col>
            <el-col :span="7">
                <el-input clearable></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="0"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>设置打印字数大小：</span>
            </el-col>
            <el-col :span="7">
                <el-input clearable></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="0"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>行间距大小：</span>
            </el-col>
            <el-col :span="7">
                <el-input clearable></el-input>
            </el-col>
        </el-row>
        <div class="line"></div>
        <!-- <hr> -->
        <el-row :gutter="20">
            <el-col :span="9"
                    class="text-right">
                <el-checkbox>左右居中打印</el-checkbox>
            </el-col>
        </el-row>
        <el-row :gutter="4"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>左空：</span>
            </el-col>
            <el-col :span="3">
                <el-input type="number"
                          min="0"
                          placeholder="0"></el-input>
            </el-col>
            <el-col :span="7">
                <span>毫米</span>
            </el-col>
        </el-row>
        <el-row :gutter="4"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>上空：</span>
            </el-col>
            <el-col :span="3">
                <el-input type="number"
                          min="0"
                          placeholder="0"></el-input>
            </el-col>
            <el-col :span="7">
                <span>毫米</span>
            </el-col>
        </el-row>
        <el-row :gutter="4"
                class="clearfix mb15">
            <el-col :span="9"
                    class="text-right">
                <span>下空：</span>
            </el-col>
            <el-col :span="3">
                <el-input type="number"
                          min="0"
                          placeholder="0"></el-input>
            </el-col>
            <el-col :span="7">
                <span>毫米</span>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="9"
                    class="text-right">
                <el-checkbox>自动添加页码</el-checkbox>
            </el-col>
        </el-row>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer ac">
            <el-button class="primary-btn"
                       @click="createConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       size="medium"
                       @click="printData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props: {
        printData: {
            type: Object
        }
    },
    data () {
        return {
            check: ''
            // topValue: '新华每日电讯'

        }
    },
    methods: {
        messageBoxClose () {

        },
        createConfirm () {

        },
        topChange (value) {
            // this.topValue = value;
        }
    }
}
</script>

<style lang="scss" scoped>
.print-message .icon-ico_print {
    line-height: 30px;
}
.print-message .label-border {
    @include border(bottom, 1px, solid, $tint-border-color);
}
.print-message .el-select {
    float: right;
}
.print-message .left-space {
    position: absolute;
    text-align: center;
}
.print-message .left-space ~ .left-space {
    right: 15px;
    top: 0;
    text-align: center;
}
</style>
<style>
.print-message .el-dialog {
    min-width: 76px;
}
</style>
