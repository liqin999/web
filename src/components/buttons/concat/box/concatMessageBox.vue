<template>
    <el-dialog class="" title="合并稿件" @close="messageBoxClose()" :visible.sync="concatData.contentShow" width="80%" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">
        
          <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                         <div>
                             <el-button type="text">上移</el-button>
                             <el-button type="text">下移</el-button>
                             <el-button type="text">移除</el-button>
                         </div>
                         <template>
                         <el-table
                            :data="concatData.tableData"
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
                                        <el-button @click="handleUpClick(scope.row)" type="text" size="small">上移</el-button>
                                        <el-button @click="handleDownClick(scope.row)" type="text" size="small">下移</el-button>
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
        handleUpClick(row){//上移
             this.$emit("sendConcatDataUp",row)
        },
        handleDownClick(row){//下移
            this.$emit("sendConcatDataDown",row)
        },
         handleSelectionChange(val) {//多选的操作
        
            this.multipleSelection = val;
        }

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
 

    
</style>



