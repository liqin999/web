<template>
    <el-dialog custom-class="split-dialog"
               title="拆分"
               @close="messageBoxClose()"
               :visible.sync="splitData.contentShow"
               width="70%"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div class="split-content bg-purple">
                        <b class="message-title">原稿件内容</b><span class="ft-red">（可拖动内容到右上列表）</span>
                        <div class="split-box">
                            <span>2016年1月5日，习近平总书记在重庆召开推动长江经济带发展座谈会并发表重要讲话，他强调，推动长江经济带发展必须从中华民族长远利益考虑，走生态优先、绿色发展之路，使绿水青山产生巨大生态效益、经济效益、社会效益，使母亲河永葆生机活力。</span>
                        </div>
                        <el-button class="primary-btn mt10">形成新稿件</el-button>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="split-content">
                        <b class="message-title">新稿件列表</b>
                        <template>
                            <el-table :data="tableData"
                                      style="width: 100%;">
                                <el-table-column prop="num"
                                                 label="序号"
                                                 width="80">
                                </el-table-column>
                                <el-table-column prop="title"
                                                 label="标题">
                                </el-table-column>
                                <el-table-column width="80"
                                                 prop="fontNum"
                                                 label="字数">
                                </el-table-column>
                            </el-table>
                        </template>
                        <b class="message-title">新稿件内容</b>
                        <div class="new-content"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="splitConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="splitData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        splitData: {
            type: Object
        }
    },
    data () {
        return {
            textarea: '',
            tableData: [{
                num: '1',
                title: '习近平把脉长江',
                fontNum: '1518'
            }, {
                num: '2',
                title: '习近平把脉长江',
                fontNum: '18'
            }]
        }
    },
    methods: {
        messageBoxClose () {
            // 点击关闭回调函数
        },
        splitConfirm () { // 确认按钮

        },
        concatConfirm () {

        },
        // 取消按钮
        concatData () {

        }
    }
}
</script>
<style lang="scss" scoped>
.split-box {
    width: 100%;
    height: 248px;
    padding: 10px;
    @include border(all);
    border-radius: $border-radius;
}
.ft-red {
    color: red;
}
.new-content {
    width: 100%;
    height: 100px;
    padding: 10px;
    @include border(all);
    border-radius: $border-radius;
}
</style>
