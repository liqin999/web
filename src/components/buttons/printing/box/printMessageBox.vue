<template>
    <div>

        <el-dialog class="print-message"
                   title="打印设置"
                   @close="messageBoxClose()"
                   :visible.sync="printData.contentShow"
                   width="40%"
                   top="0vh"
                   :append-to-body="true">
            <!-- 内容区 -->
            <el-row :gutter="0"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>设置每行打印字数：</span>
                </el-col>
                <el-col :span="7">
                    <el-input clearable
                              v-model="params.fontNum"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="0"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>设置打印栏数：</span>
                </el-col>
                <el-col :span="7">
                    <el-input clearable
                              v-model="params.columnNum"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="0"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>设置打印字数大小：</span>
                </el-col>
                <el-col :span="7">
                    <el-input clearable
                              v-model="params.fontSize"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="0"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>行间距大小：</span>
                </el-col>
                <el-col :span="7">
                    <el-input clearable
                              v-model="params.lineSpace"></el-input>
                </el-col>
            </el-row>
            <div class="line"></div>
            <!-- <hr> -->
            <el-row :gutter="20">
                <el-col :span="9"
                        class="text-right">
                    <el-checkbox v-model="params.printCenter">左右居中打印</el-checkbox>
                </el-col>
            </el-row>
            <el-row :gutter="4"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>左空：</span>
                </el-col>
                <el-col :span="6">
                    <el-input type="number"
                              min="0"
                              class="numSpace"
                              v-model="params.leftSpace"
                              placeholder="0"></el-input>
                </el-col>
                <el-col :span="4">
                    <span>毫米</span>
                </el-col>
            </el-row>
            <el-row :gutter="4"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>上空：</span>
                </el-col>
                <el-col :span="6">
                    <el-input type="number"
                              class="numSpace"
                              v-model="params.topSpace"
                              min="0"
                              placeholder="0"></el-input>
                </el-col>
                <el-col :span="4">
                    <span>毫米</span>
                </el-col>
            </el-row>
            <el-row :gutter="4"
                    class="clearfix mb15">
                <el-col :span="9"
                        class="text-right">
                    <span>下空：</span>
                </el-col>
                <el-col :span="6">
                    <el-input type="number"
                              min="0"
                              class="numSpace"
                              v-model="params.bottomSpace"
                              placeholder="0"></el-input>
                </el-col>
                <el-col :span="4">
                    <span>毫米</span>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="9"
                        class="text-right">
                    <el-checkbox v-model="params.autoPage">自动添加页码</el-checkbox>
                </el-col>
            </el-row>
            <!-- 内容区 结束 -->
            <div slot="footer"
                 class="dialog-footer ac">
                <el-button class="primary-btn"
                           @click="createConfirm()">确认</el-button>
                <el-button class="reset-btn"
                           size="medium"
                           @click="printData.contentShow = false">取消</el-button>
            </div>
            <!-- <div ref="print"
                 :style="setContentStyle"
                 class="printContent">
                {{content}}
            </div> -->

        </el-dialog>

    </div>
</template>
<script>
import Print from './print'
import Vue from 'vue'
Vue.use(Print) // 注册
export default {
    // 分析打印的功能 将打印的内容显示出来
    props: {
        printData: {
            type: Object
        }
    },
    data () {
        return {
            // topValue: '新华每日电讯'
            params: {
                fontNum: 50,
                columnNum: 1,
                fontSize: 14,
                lineSpace: 1,
                printCenter: true,
                leftSpace: 31.8, // 显示的是左侧的边距
                topSpace: 25.4, // 显示的是上侧的边距
                bottomSpace: 25.4, // 显示的是下侧的边距
                autoPage: true

            },
            content: `新华社北京1月27日电（记者李忠发、潘洁）中共中央总书记、
                国家主席习近平和夫人彭丽媛27日在北京会见以朝鲜劳动党中央政治局委员、
                中央副委员长、国际部部长李洙墉为团长的朝鲜友好艺术团。
                习近平和彭丽媛欢迎朝鲜友好艺术团访华演出。习近平指出，此次访演既是落实中朝双方重要
                共识的一项重要文化交流活动，也是中朝建交70周年一项重要庆祝活动。相信访演会取得圆满成功，
                增进中朝两国人民友好感情。李洙墉首先转达了金正恩委员长和李雪主女士对习近平总书记和彭丽
                媛女士的亲切问候和良好祝愿，诚挚感谢习近平总书记对此次友好艺术团来华访演的关心和重视。
                习近平请李洙墉转达对金正恩委员长和李雪主女士的亲切问候和良好祝愿。习近平指出，2018年以来，
                我同金正恩委员长4次会晤，就新时期中朝两党两国关系发展达成重要共识。今年是中朝建交70周年。
                中方愿同朝方一道，落实好双方重要共识，更好造福两国人民，为地区和世界和平、稳定、发展、
                繁荣作出积极贡献。习近平强调，文化艺术交流是中朝关系中富有特色和传统的重要组成部分。
                希望双方共同努力，落实好我同金正恩委员长就加强中朝文化艺术领域交流合作达成的重要共识，
                继续为巩固中朝友好民意基础、传承中朝传统友谊、推动各自社会主义文化建设作出积极贡献。`

        }
    },
    methods: {
        messageBoxClose () {

        },
        createConfirm () {
            // 实现打印的插件
            this.$print(this.$refs.print)
        },
        topChange (value) {
            // this.topValue = value;
        }

    },
    computed: {
        setContentStyle () {
            return {
                'fontSize': this.params.fontSize + 'px',
                'column-count': this.params.columnNum,
                'line-height': this.params.lineSpace * this.params.fontSize + 'px'

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.print-message .icon-ico_print {
    line-height: 30px;
}
.print-message .label-border {
    @include border(bottom, 1px, solid, $tint-border-color);
}
.print-message .el-select {
    float: right;
}
.print-message .left-space {
    position: absolute;
    text-align: center;
}
.print-message .left-space ~ .left-space {
    right: 15px;
    top: 0;
    text-align: center;
}
.numSpace {
    min-width: 80px;
}
.printContent {
    font-size: 30px;
    text-indent: 2em;
    column-count: 1;
    column-gap: 20px;
}
</style>
<style>
.print-message .el-dialog {
    min-width: 76px;
}
</style>
