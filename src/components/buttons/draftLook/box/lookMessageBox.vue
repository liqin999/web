<template>
    <el-dialog class="look-message"
               title="稿件浏览"
               @close="messageBoxClose()"
               :visible.sync="lookData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="20"
                    class="clearfix">
                <!-- 左侧 -->
                <el-col :span="18">
                    <el-row :gutter="20">
                        <el-col :span="24"
                                class="label-border">
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>标题：</b>
                                </el-col>
                                <el-col :span="20">
                                    <el-input v-model="input"
                                              placeholder="城市生活垃圾分类的“银川模式”"></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <!-- 作者 -->
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>作者：</b>
                                </el-col>
                                <el-col :span="4">
                                    <el-input v-model="input"
                                              placeholder="刘晶瑶"></el-input>
                                </el-col>
                                <!-- 来源 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <b>来源：</b>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="自写稿"></el-input>
                                </el-col>
                                <!-- 体裁 -->
                                <el-col :span="3"
                                        class="text-right">
                                    <b>体裁：</b>
                                </el-col>
                                <el-col :span="5">
                                    <el-input v-model="input"
                                              placeholder="文本"></el-input>
                                </el-col>
                            </el-row>
                            <!-- 分类 -->
                            <el-row :gutter="20">
                                <el-col :span="4"
                                        class="tab-padding">
                                    <b>分类：</b>
                                </el-col>
                                <el-col :span="20">
                                    <el-input v-model="input"
                                              placeholder="一个西红柿的”世界地图"></el-input>
                                        <el-button class="primary-btn mt10">更多...</el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    <el-col :span="10">
                        <div class="bg-purple">
                            <b class="ft-red">稿号：20181029000068</b>
                        <div class="look-box">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016年1月5日，习近平总书记在重庆召开推动长江经济带发展座谈会并发表重要讲话，他强调，推动长江经济带发展必须从中华民族长远利益考虑，走生态优先、绿色发展之路，使绿水青山产生巨大生态效益、经济效益、社会效益，使母亲河永葆生机活力。</p>
                        </div>
                         <el-col :span="6"
                            class="img-col ac">
                        <div class="img-box ac">
                            <div class="img-wrap ac">
                                <img class="ac" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="" height="300px">
                            </div>
                            <div class="texts ac">
                                <a href='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg' target="_blank"><b>原图</b></a>
                            </div>
                        </div>
                    </el-col>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="reset-btn"
                       @click="lookData.contentShow = false">选送</el-button>
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
            tableData: []
        }
    },
    methods: {
        messageBoxClose () {

        },
        // 点击确定按钮（提交）
        draftConfirm () {
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
    .label-border {
        @include border(bottom, 1px, solid, $tint-border-color);
    }
}
.look-message{
    line-height: 30px;
}
.look-box {
    width: 300%;
    padding: 10px;
}
.ft-red {
    color: red;
}
.img-wrap{
    text-align: center;
}
.texts{
    text-decoration:underline ;
}
</style>
