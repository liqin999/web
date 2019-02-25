<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="audioIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 浏览弹框 -->
        <el-dialog class="look-message"
                   title="稿件浏览"
                   @close="messageBoxClose()"
                   :visible.sync="contentShow"
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
                        </el-row>
                    </el-collapse-item>
                </el-collapse>
                <div class="clearfix">
                    <el-col :span="17">
                        <b class="ft-red">稿号：20181029000068</b>
                    </el-col>
                    <el-button class="reset-btn"
                               style="margin-top:5px"
                               @click="speech">翻译</el-button>
                </div>
                <!-- 文字内容 -->
                <div class="clearfix">
                    <el-col :span="25">
                        <audio src="http://www.w3school.com.cn/i/song.ogg"
                               controls="controls"></audio>
                        <p class="main">翻译内容</p>
                    </el-col>
                </div>
                <div class="texts clearfix">
                    <el-button class="reset-btn"
                               @click="this.contentShow = false">传稿</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            labelList: [],
            contentShow: false,
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
        audioIcon () {
            this.contentShow = true
        },
        speech () {
            // let speechArr = []
            // let speechObj = {
            //     fileName: 'song.ogg',
            //     callbackUrl: null,
            //     downloadFileUrl: 'http://www.w3school.com.cn/i/song.ogg',
            //     lang: 'cn', // 当前音频语种：cn-中文，en-英文
            //     hotWordId: null, // 热词Id
            //     splitspeaker: null// 是否区分说话人 1:区分，0:不区分；默认不区分
            // }
            axios.post('http://172.22.73.26:8199/v1/upload', {
                fileName: 'song.ogg',
                // callbackUrl: null,
                downloadFileUrl: 'http://www.w3school.com.cn/i/song.ogg',
                lang: 'cn' // 当前音频语种：cn-中文，en-英文
                // hotWordId: null, // 热词Id
                // splitspeaker: null// 是否区分说话人 1:区分，0:不区分；默认不区分
            }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        },
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
/* .message-box .el-collapse-item__wrap {
    border: none;
} */
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
