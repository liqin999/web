<template>
    <el-dialog custom-class="split-dialog"
               title="拆分"
               @close="messageBoxClose()"
               <<<<<<<
               HEAD
               :visible.sync="contentShow"
               width="70%"=======:visible.sync="splitData.contentShow"
               width="50%">>>>>>> origin/develop
        top="15vh"
        :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div class="split-content bg-purple">
                        <b class="message-title">原稿件内容</b><span class="ft-red">（鼠标右键选中，形成新稿件）</span>
                        <div class="split-box">
                            <span>{{content || ''}}</span>
                        </div>
                        <el-button class="primary-btn mt10"
                                   @click="getSelectText">形成新稿件</el-button>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="split-content">
                        <b class="message-title">新稿件列表</b>
                        <template>
                            <el-table :data="tableData"
                                      height="145"
                                      tooltip-effect="dark"
                                      style="width: 100%;">
                                <el-table-column prop="seqNum"
                                                 label="序号"
                                                 width="80">

                                </el-table-column>
                                <el-table-column prop="leadinLine"
                                                 show-overflow-tooltip
                                                 label="标题">
                                </el-table-column>
                                <el-table-column width="80"
                                                 prop="wordNum"
                                                 label="字数">
                                </el-table-column>
                            </el-table>
                        </template>
                        <b class="message-title">新稿件内容</b>
                        <div class="new-content">{{newContent}}</div>
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
            contentShow: false,
            textarea: '',
            title: '一个西红柿的“世界地图”',
            fontNum: '18'
        }]
    }
},

watch: {   // 使用监听的方式，监听数据的变化
    splitData(val) {
        this.content = (val && val.tableData[0] && val.tableData[0].content) || ''
    }
},

mounted() {
    console.log('splitbox', this.splitData)
},

methods: {
    messageBoxClose() {
        // 点击关闭回调函数
    },
    splitConfirm() { // 确认按钮
        if (this.tableData.length === 0) {
            this.$message({
                message: '先点击左侧生成的稿件',
                type: 'warning'
            })
            return false
        } else {
            this.$emit('sendSplitData', this.tableData)
        }
    },
    splitCancleConfirm() {
        this.$emit('splitCancleConfirm')
    },
    getSelectText() {
        let userSelection = ''
        if (window.getSelection) {
            userSelection = window.getSelection()
        } else if (document.selection) {
            userSelection = document.selection.createRange()
        }
        if (userSelection.toString().length > 0) {
            this.newContent = userSelection.toString()

            let _index = 10
            if (this.newContent.indexOf('。') !== -1) {
                _index = this.newContent.indexOf('。')
            } else if (this.newContent.indexOf(',') !== -1) {
                _index = this.newContent.indexOf(',')
            } else if (this.newContent.indexOf('，') !== -1) {
                _index = this.newContent.indexOf('，')
            }

        },
        concatConfirm() {

        },
        // 取消按钮
        concatData() {

        }
    }
}
</script>
<style lang="scss" scoped>
.split-box {
    width: 100%;
    height: 328px;
    overflow-y: auto;
    padding: 10px;
    @include border(all);
    border-radius: $border-radius;
}
.ft-red {
    color: red;
}
.new-content {
    width: 100%;
    height: 150px;
    padding: 10px;
    overflow-y: auto;
    @include border(all);
    border-radius: $border-radius;
}
</style>
