<template>
    <el-dialog custom-class="concat-dialog"
               title="历史版本"
               @close="messageBoxClose()"
               :visible.sync="versionData.contentShow"
               width="60%"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->

        <template>
            <el-table :data="versionData.tableData"
                      ref="multipleTable"
                      @selection-change="handleSelectionChange"
                      style="width: 100%">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="num"
                                 label="版本">
                </el-table-column>
                <el-table-column prop="title"
                                 label="标题">
                </el-table-column>
                <el-table-column prop="date"
                                 width="100px"
                                 label="处理时间">
                </el-table-column>
                <el-table-column prop="dealPerson"
                                 label="处理人">
                </el-table-column>
                <el-table-column prop="img"
                                 label="代表图">
                </el-table-column>
                <el-table-column prop="type"
                                 label="类型">
                </el-table-column>
                <el-table-column prop="doubt"
                                 label="疑点">
                </el-table-column>
                <el-table-column prop="textFormat"
                                 label="文本格式">
                </el-table-column>
            </el-table>
        </template>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <div class="left-group">
                <el-button class="primary-btn"
                           @click="downFn()">下载</el-button>
                <el-button class="primary-btn"
                           @click="sendDetailFn()">文本痕迹</el-button>
                <el-button class="primary-btn"
                           @click="imagePreviewFn()">图片预览</el-button>
            </div>
            <el-button class="reset-btn"
                       @click="versionData.contentShow = false">关 闭</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        versionData: {
            type: Object
        }
    },
    data () {
        return {
            multipleSelection: []
        }
    },
    methods: {
        messageBoxClose () {
            // 点击关闭回调函数
        },
        handleSelectionChange (val) { // 多选的操作
            this.multipleSelection = val
        },
        downFn () { // 下载按钮
            this.$emit('sendConcatData', this.multipleSelection)
        },
        sendDetailFn () { // 文本痕迹

        },
        imagePreviewFn () { // 图片预览

        }

    }
}
</script>
<style lang="scss" scoped>
.dialog-footer {
    display: flex;
    justify-content: space-between;
}
</style>
