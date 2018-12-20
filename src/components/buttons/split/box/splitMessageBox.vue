<template>
    <el-dialog custom-class="split-dialog" title="拆分" @close="messageBoxClose()" :visible.sync="splitData.contentShow" width="70%" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">
        
          <el-row :gutter="20">
            <el-col :span="10">
                <div class="split-content bg-purple">
                    <h2 class="split-title">原稿件内容<span class="ft-red">(可拖动内容到右上列表)</span></h2>                
                     <div class="content"></div>
                    <div class="ta-center mt10">
                         <el-button>形成新稿件</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="split-content  ">
                         <h2>新稿件列表</h2>
                         <template>
                         <el-table
                            border
                            :data="tableData"
                            style="width: 100%;margin-top:10px">
                            <el-table-column
                                prop="num"
                                label="序号"
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="title"
                                label="标题"
                               >
                            </el-table-column>
                            <el-table-column
                               width="80"
                                prop="fontNum"
                                label="字数">
                            </el-table-column>
                        </el-table>
                        </template>

                         <h2 class="mt10">新稿件内容</h2>
                         <div class="new-content"></div>
                </div>
            </el-col>
           
         </el-row>
           
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer" class="dialog-footer">
            <el-button type="success" size="medium" @click="splitConfirm()">确认</el-button>
            <el-button size="medium" @click="splitData.contentShow = false">取 消</el-button>
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
            textarea:'',
        tableData: [{
            num: '2',
            title: '王小虎',
            fontNum: '1518'
          }, {
             num: '3',
             title: '王小虎',
            fontNum: '18'
          }]
        }
    },
    methods: {
        messageBoxClose(){
            //点击关闭回调函数
        },
        splitConfirm(){//确认按钮

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
    .ft-red{
        color: red
    }
    .ta-center{
        text-align: center;
    }
    .mt10{
        margin-top: 10px;
    }
     .content{
        height: 410px;
        border:1px solid #ddd;
        margin-top: 10px;
    }
    .new-content{
        border:1px solid #ddd;
        height: 227px;
        margin-top: 10px;
    }
    .split-content{
        margin-top: 0px;
    }
    
</style>
<style lang="scss">
 .split-dialog{
        .el-dialog__body{
            padding-top: 0;
            padding-bottom:0px
        }
    }
</style>



