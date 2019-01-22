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
                      class="version-table"
                      ref="multipleTable"
                      @selection-change="handleSelectionChange"
                      style="width: 100%">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="num"
                                 label="版本">
                </el-table-column>
                <el-table-column prop="title"
                                 width="150px"
                                 label="标题"
                                 show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="date"
                                 width="150px"
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
             <!-- <div class="text-right"> -->
                <!-- <download>
                    <span slot="iconName"  class="primary-btn">下载</span>
                </download> -->
             <!-- </div> -->
            <div class="left-group">
                <down-load class="primary-btn">
                    <span slot="iconName">下载</span>
                </down-load>
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
// 下载弹框按钮
import downLoad from '@/components/buttons/downLoad/downLoad'
export default {
    components: {
        downLoad
    },
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
<style lang="scss">
.version-table {
    .el-table__body tr:hover > td {
        background-color: #cbc4ba !important;
    }
}
</style>
