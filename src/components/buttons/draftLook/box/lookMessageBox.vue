<template>
    <el-dialog class="look-message"
               title="稿件浏览"
               @close="messageBoxClose()"
               :visible.sync="lookData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box">

            <el-collapse v-model="activeName"
                         accordion>
                <el-collapse-item title="更多"
                                  name="1">
                    <el-row :gutter="10"
                            class="mt6">
                        <el-col :span="2">
                            <b>标题：</b>
                        </el-col>
                        <el-col :span="20">
                            <el-input v-model="title"></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="15"
                            class="mt6">
                        <el-col :span="2">
                            <b>作者：</b>
                        </el-col>
                        <el-col :span="5">
                            <el-input v-model="author"></el-input>
                        </el-col>

                        <el-col :span="2"
                                class="text-right">
                            <b>来源：</b>
                        </el-col>
                        <el-col :span="5">
                            <el-input v-model="resource"></el-input>
                        </el-col>

                        <el-col :span="3"
                                class="text-right">
                            <b>体裁：</b>
                        </el-col>
                        <el-col :span="5">
                            <el-input v-model="type"></el-input>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10"
                            class="mt6">
                        <el-col :span="2">
                            <b>分类：</b>
                        </el-col>
                        <el-col :span="20">
                            <el-input v-model="classify"></el-input>
                        </el-col>
                        <!-- <el-col :span="3">
                            <div class="text-left">
                                <el-button class="primary-btn"
                                           @click="lookData.contentShow = false">更多</el-button>
                            </div>
                        </el-col> -->
                    </el-row>

                </el-collapse-item>
            </el-collapse>
            <!-- <div class="text-right">

            </div> -->

            <!-- <div class="text-right">
                <el-button class="reset-btn"
                           @click="lookData.contentShow = false">选送</el-button>
            </div> -->
            <div>
                <el-col :span="17">
                    <b class="ft-red">稿号：20181029000068</b>
                </el-col>
            </div>
            <!-- 文字内容 -->
            <div>
                <el-col :span="25">
                    <p class="main">2016年1月5日，习近平总书记在重庆召开推动长江经济带发展座谈会并发表重要讲话，他强调，推动长江经济带发展必须从中华民族长远利益考虑，走生态优先、绿色发展之路，使绿水青山产生巨大生态效益、经济效益、社会效益，使母亲河永葆生机活力。</p>
                </el-col>
            </div>
            <!-- 图片 -->
            <div class="ac">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                     alt=""
                     height="300px">
            </div>
            <!--图片链接  -->
            <div class="texts">
                <a class="text-left"
                   href='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg'
                   target="_blank"><b>清晰原图</b></a>
                <el-button class="reset-btn"
                           @click="lookData.contentShow = false">传稿</el-button>

            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        lookData: {
            type: Object
        }
    },
    data () {
        return {
            textarea: null,
            input: null,
            tableData: [],
            title: '2016年1月5日，习近平总书记在重庆召开推动长江经济带发展座谈会并发表重要讲话',
            author: '刘晶瑶',
            resource: '自写稿',
            type: '新闻分析',
            activeName: '1',
            classify: '国内,行业经济'

        }
    },
    methods: {
        messageBoxClose () {

        }
    },
    computed: {
        dataList1 () {
            return this.dataList
        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    line-height: 35px;
}
.ft-red {
    color: red;
}
.texts {
    text-decoration: underline;
}
p.main {
    text-align: justify;
}
p {
    text-indent: 30px;
}
.reset-btn {
    float: right;
}
</style>
<style>
.look-message .el-dialog {
    width: 60%;
    min-width: 600px;
}
.message-box .el-collapse-item__wrap {
    /* border: none; */
}
.message-box .el-collapse {
    border-top: none;
}
.message-box .el-collapse-item__header {
    border-top: none;
    color: #999;
    height: 30px;
    line-height: 30px;
}
.mt6 {
    margin-top: 6px;
}
</style>
