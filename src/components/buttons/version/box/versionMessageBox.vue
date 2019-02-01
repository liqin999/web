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
                                 header-align="center"
                                 align="center"
                                 width="130px"
                                 label="代表图">
                    <template slot-scope="scope">
                        <el-popover trigger="hover">
                            <img v-bind:src="scope.row.img"
                                 style="max-height: 300px;max-width: 1000px">
                            <img slot="reference"
                                 :src="scope.row.img"
                                 :alt="scope.row.img"
                                 style="max-height: 30px;max-width: 120px">
                        </el-popover>
                    </template>
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
                <downLoad class="primary-btn">
                    <span slot="iconName">下载</span>
                </downLoad>
                <el-button class="primary-btn"
                           @click="sendDetailFn()">文本痕迹</el-button>
                <el-button class="primary-btn"
                           @click="imagePreviewFn()">图片预览</el-button>
                <el-button class="primary-btn"
                           @click="recoveryFn()">恢复</el-button>
            </div>
            <el-button class="reset-btn"
                       @click="versionData.contentShow = false">关 闭</el-button>
        </div>

        <template>
            <el-dialog width="50%"
                       top="15vh"
                       title="文本信息"
                       :visible.sync="txtVisible"
                       append-to-body>
                <div>
                    中国农历新年春节即将到来。春节期间，很多同胞都会选择出境游。
                    <p class="center-line1"> 旅行安全问题对我们所有人来说都是最重要的问题，没有之一。</p>
                    我们建议中国公民计划出境旅游时，切实提高风险防范意识，认真了解有关出入境规定，慎重选择旅游项目，妥善安排旅游行程，注意各方面安全。我也要提醒广大同胞了解并遵守当地法律法规，尊重当地风俗习惯
                    ，爱护环境，文明出游，自觉展现并维护中国游客的良好形象。
                </div>
                <div slot="footer"
                     class="dialog-footer">
                    <div>
                        <el-button class="primary-btn">后一版本</el-button>
                        <el-button class="primary-btn">前一版本</el-button>
                    </div>
                    <el-button class="primary-btn"
                               @click="txtVisible = false">关闭</el-button>
                </div>

            </el-dialog>
        </template>

        <template>
            <el-dialog width="50%"
                       top="15vh"
                       title="图片信息"
                       :visible.sync="imgVisible"
                       append-to-body>
                <div>
                    <img v-if="viewImg"
                         class="viewImg"
                         :src="viewImg">
                </div>
                <div slot="footer"
                     class="dialog-footer">
                    <div>
                        <el-button class="primary-btn">后一版本</el-button>
                        <el-button class="primary-btn">前一版本</el-button>
                    </div>
                    <el-button class="primary-btn"
                               @click="imgVisible = false">关闭</el-button>
                </div>

            </el-dialog>
        </template>
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
            multipleSelection: [],
            txtVisible: false,
            imgVisible: false,
            viewImg: ''
        }
    },
    methods: {
        messageBoxClose () {
            // 点击关闭回调函数
        },
        handleSelectionChange (val) { // 多选的操作
            this.multipleSelection = val
            this.viewImg = val[0].img
        },
        downFn () { // 下载按钮
            this.$emit('sendConcatData', this.multipleSelection)
        },
        sendDetailFn () { // 文本痕迹
            if (this.multipleSelection.length === 0) {
                this.$confirm('请选择一条数据', '提示', {
                    type: 'warning',
                    showConfirmButton: false,
                    showCancelButton: false
                })
            } else {
                if (this.multipleSelection[0].type === '文本') {
                    this.txtVisible = true
                }
            }
        },
        imagePreviewFn () { // 图片预览
            if (this.multipleSelection.length === 0) {
                this.$confirm('请选择一条数据', '提示', {
                    type: 'warning',
                    showConfirmButton: false,
                    showCancelButton: false
                })
            } else {
                if (this.multipleSelection[0].type === '图片') {
                    this.imgVisible = true
                }
            }
        },
        recoveryFn () {

        }

    }
}
</script>
<style lang="scss" scoped>
.dialog-footer {
    display: flex;
    justify-content: space-between;
}
.viewImg {
    width: 100%;
}
.center-line1 {
    text-decoration: line-through;
    color: #38f5a6;
}
</style>
<style lang="scss">
.version-table {
    .el-table__body tr:hover > td {
        background-color: #cbc4ba !important;
    }
}
</style>
