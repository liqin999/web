<template>
    <el-dialog class="iconfont icon-ico_print"
               title="打印设置"
               @close="messageBoxClose()"
               :visible.sync="printData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <el-row :gutter="20"
                    class="clearfix mb15">
                <el-col :span="7"
                        class="text-right">
                    <span>设置每行打印字数：</span>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="请输入内容" clearable></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20"
                    class="clearfix mb15">
                <el-col :span="7"
                        class="text-right">
                    <span>设置打印栏数：</span>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="请输入内容" clearable></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20"
                    class="clearfix mb15">
                <el-col :span="7"
                        class="text-right">
                    <span>设置打印字数大小：</span>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="请输入内容" clearable></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20"
                    class="clearfix mb15">
                <el-col :span="7"
                        class="text-right">
                    <span>行间距大小：</span>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="请输入内容" clearable></el-input>
                </el-col>
            </el-row>
            <!-- <hr> -->
            <el-row :gutter="20">
                <el-col :span="7" class="text-right">
                    <el-checkbox>左右居中打印</el-checkbox>
                </el-col>
            </el-row>

            <el-row  :gutter="20"
                      class="clearfix mb15">
                <el-col :span="6"  :offset="6" style="position:relative">
                    <span class="left-space">左空: </span>
                    <el-input class="input-style"></el-input>
                    <span class="left-space">毫米</span>
                </el-col>
            </el-row>
            <el-row  :gutter="20" class="clearfix mb15">
                <el-col :span="6"  :offset="6"
                        style="position:relative">
                    <span class="left-space">上空: </span>
                    <el-input class="input-style"></el-input>
                    <span class="left-space">毫米</span>
                </el-col>
            </el-row>
            <el-row  :gutter="20" class="clearfix mb15">
                <el-col :span="6"  :offset="6"
                        style="position:relative">
                    <span class="left-space">下空: </span>
                    <el-input class="input-style"></el-input>
                    <span class="left-space">毫米</span>
                </el-col>
            </el-row>

            <el-row :gutter="40">
                <el-col :span="7" class="text-right">
                    <el-checkbox>自动添加页码</el-checkbox>
                </el-col>
            </el-row>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
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
.icon-ico_print{
    line-height: 30px;
}
.label-border {
    @include border(bottom, 1px, solid, $tint-border-color);
}
.el-select {
    float: right;
}
.input-style{
    padding: 0px 50px;
}
.left-space{
    position: absolute;
    text-align: center

}
.left-space~.left-space{
    right:15px;
    top:0;
    text-align: center
}
</style>
