<template>
    <el-dialog custom-class="concat-dialog" title="合并稿件" @close="messageBoxClose()" :visible.sync="concatData.contentShow" width="50%" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">
        
          <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                         <div>
                             <el-button type="text" @click="handleMoreUpClick" >上移</el-button>
                             <el-button type="text" @click="handleMoreDownClick" >下移</el-button>
                             <el-button type="text" @click="removeSelection">移除</el-button>
                         </div>
                         <template>
                         <el-table
                            :data="concatData.tableData"
                            ref="multipleTable"
                             @selection-change="handleSelectionChange"
                            style="width: 100%">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                                prop="num"
                                label="稿号"
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                               >
                            </el-table-column>
                            <el-table-column
                               width="100"
                                prop="fontNum"
                                label="操作">
                                   <template slot-scope="scope">
                                       <i v-if="scope.$index > 0" @click="handleUpClick(scope.$index)" class="iconfont icon-shangyi cursorPointer"></i>
                                       <i v-if="scope.$index < concatData.tableData.length -1"  @click="handleDownClick(scope.$index)" class="iconfont icon-xiayi cursorPointer"></i>
                                    </template>
                            </el-table-column>
                        </el-table>
                        </template>

                   
                </div>
            </el-col>
           
         </el-row>
           
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer" class="dialog-footer">
            <el-button type="success" size="medium" @click="concatConfirm()">确认</el-button>
            <el-button size="medium" @click="concatData.contentShow = false">取 消</el-button>
        </div>
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
                multipleSelection: [],
               
        }
    },
    methods: {
        messageBoxClose(){
            //点击关闭回调函数
        },
        concatConfirm(){//确认按钮
            this.$emit("sendConcatData",this.multipleSelection)
        },
        handleUpClick(index){//上移
               let temp = this.concatData.tableData[index-1];
               this.$set(this.concatData.tableData, index-1, this.concatData.tableData[index])
               this.$set(this.concatData.tableData, index, temp)
            //  this.$emit("sendConcatDataUp",row)
        },
        handleDownClick(index){//下移
               let i = this.concatData.tableData[index+1];
               this.$set(this.concatData.tableData, index+1, this.concatData.tableData[index])
               this.$set(this.concatData.tableData, index, i)
            //  this.$emit("sendConcatDataDown",row)
          
        },
         handleSelectionChange(val) {//多选的操作
            this.multipleSelection = val;
        },
        removeSelection(){//移除选中的项
             this.$refs.multipleTable.clearSelection();
        },
        handleMoreUpClick(){//批量的上移
            this.multipleSelection.forEach((item,index)=>{
               let _index = this.concatData.tableData.indexOf(item);
               this.concatData.tableData.splice(_index,1);
               this.concatData.tableData.unshift(item)
            })
        },
        handleMoreDownClick(){//批量的上移
            this.multipleSelection.forEach((item,index)=>{
               let _index = this.concatData.tableData.indexOf(item);
               this.concatData.tableData.splice(_index,1);
               this.concatData.tableData.push(item)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .message-box{
       padding:0 10px;
    }
    .el-row{
        padding-bottom: 20px;
    }
    .cursorPointer{
        cursor: pointer;
    }
</style>
<style lang="scss">
 .concat-dialog{
        .el-dialog__body{
            padding-top: 0;
            padding-bottom:0px
        }
    }
</style>




