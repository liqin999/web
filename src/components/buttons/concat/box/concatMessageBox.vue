<template>
    <el-dialog custom-class="concat-dialog"
               title="合并稿件"
               @close="messageBoxClose()"
               :visible.sync="concatData.contentShow"
               width="50%"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <el-container>
            <el-header height="35px">
                <div class="concat-group">
                    <el-button class="primary-btn"
                               @click="handleMoreUpClick">上移</el-button>
                    <el-button class="primary-btn"
                               @click="handleMoreDownClick">下移</el-button>
                    <el-button class="primary-btn"
                               @click="removeSelection">移除</el-button>
                </div>
            </el-header>
            <el-main class="concat-main">
                <template>
                    <el-table :data="concatData.tableData"
                              ref="multipleTable"
                              @selection-change="handleSelectionChange"
                              style="width: 100%">
                        <el-table-column type="selection"
                                         width="55">
                        </el-table-column>
                        <el-table-column prop="num"
                                         label="稿号"
                                         width="80">
                        </el-table-column>
                        <el-table-column prop="title"
                                         label="标题">
                        </el-table-column>
                        <el-table-column width="100"
                                         prop="fontNum"
                                         label="操作">
                            <template slot-scope="scope">
                                <i v-if="scope.$index > 0"
                                   @click="handleUpClick(scope.$index)"
                                   class="iconfont icon-shangyi cursorPointer"></i>
                                <i v-if="scope.$index < concatData.tableData.length -1"
                                   @click="handleDownClick(scope.$index)"
                                   class="iconfont icon-xiayi cursorPointer"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-main>
        </el-container>
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="concatConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="concatData.contentShow = false">取消</el-button>
        </div>
        <!-- 内容区 结束 -->
    </el-dialog>
</template>

<script>
export default {
    props: {
        concatData: {
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
        concatConfirm () { // 确认按钮
            this.$emit('sendConcatData', this.multipleSelection)
        },
        handleUpClick (index) { // 上移
            let temp = this.concatData.tableData[index - 1]
            this.$set(this.concatData.tableData, index - 1, this.concatData.tableData[index])
            this.$set(this.concatData.tableData, index, temp)
            //  this.$emit("sendConcatDataUp",row)
        },
        handleDownClick (index) { // 下移
            let i = this.concatData.tableData[index + 1]
            this.$set(this.concatData.tableData, index + 1, this.concatData.tableData[index])
            this.$set(this.concatData.tableData, index, i)
            //  this.$emit("sendConcatDataDown",row)
        },
        handleSelectionChange (val) { // 多选的操作
            this.multipleSelection = val
        },
        removeSelection () { // 移除选中的项
            this.$refs.multipleTable.clearSelection()
        },
        handleMoreUpClick () { // 批量的上移
            this.multipleSelection.forEach((item, index) => {
                let _index = this.concatData.tableData.indexOf(item)
                this.concatData.tableData.splice(_index, 1)
                this.concatData.tableData.unshift(item)
            })
        },
        handleMoreDownClick () { // 批量的上移
            this.multipleSelection.forEach((item, index) => {
                let _index = this.concatData.tableData.indexOf(item)
                this.concatData.tableData.splice(_index, 1)
                this.concatData.tableData.push(item)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.concat-group {
    padding: 0px 0px 10px 0px;
}
.concat-main {
    padding: 0px;
}
</style>
