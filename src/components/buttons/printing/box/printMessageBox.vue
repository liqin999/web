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
            <el-form :model="params" :rules="rules" ref="params" label-width="150px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="设置每行打印字数：" prop="fontNum"  class="mb15">
                            <el-input type="number" v-model.number="params.fontNum"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="设置打印栏数：" prop="columnNum" class="mb15">
                            <el-input type="number" v-model.number="params.columnNum"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="设置打印字数大小：" prop="fontSize" class="mb15">
                            <el-input type="number" v-model.number="params.fontSize"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="行间距大小：" prop="lineSpace" class="mb15">
                            <el-input type="number" v-model.number="params.lineSpace"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="line"></div>

                <el-form-item>
                    <el-checkbox v-model="params.printCenter">左右居中打印</el-checkbox>
                </el-form-item>

                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="左空：" prop="leftSpace" class="mb15">
                            <el-row :gutter="4"
                                    class="clearfix">
                                <el-col :span="14">
                                    <el-input type="number"
                                            min="0"
                                            class="numSpace"
                                            v-model.number="params.leftSpace"
                                            placeholder="0"></el-input>
                                </el-col>
                                <el-col :span="8">
                                    <span>毫米</span>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="上空：" prop="topSpace" class="mb15">
                            <el-row :gutter="4"
                                    class="clearfix">
                                <el-col :span="14">
                                    <el-input type="number"
                                            min="0"
                                            class="numSpace"
                                            v-model.number="params.topSpace"
                                            placeholder="0"></el-input>
                                </el-col>
                                <el-col :span="8">
                                    <span>毫米</span>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="14" :offset="3">
                        <el-form-item label="下空：" prop="bottomSpace" class="mb15">
                            <el-row :gutter="4"
                                    class="clearfix">
                                <el-col :span="14">
                                    <el-input type="number"
                                            min="0"
                                            class="numSpace"
                                            v-model.number="params.bottomSpace"
                                            placeholder="0"></el-input>
                                </el-col>
                                <el-col :span="8">
                                    <span>毫米</span>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item>
                    <el-checkbox v-model="params.autoPage">自动添加页码</el-checkbox>
                </el-form-item>
            </el-form>
            <!-- 内容区 结束 -->
            <div slot="footer"
                 class="dialog-footer ac">
                <el-button class="primary-btn"
                           @click="createConfirm()">确认</el-button>
                <el-button class="reset-btn"
                           size="medium"
                           @click="printData.contentShow = false">取消</el-button>
            </div>
            <div class="print-wrap">
                <div ref="print"
                     v-show="isShow"
                     :style="setContentStyle"
                     class="printContent">
                    <p v-for="(item,index) in content"
                       :key="index"
                       class="text-indent-2"
                       v-html="item"></p>
                </div>
            </div>
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
            isShow: true,
            params: {
                fontNum: 50,
                columnNum: 1,
                fontSize: 16,
                lineSpace: 1,
                printCenter: true,
                leftSpace: 10, // 显示的是左侧的边距
                topSpace: 20, // 显示的是上侧的边距
                bottomSpace: 20, // 显示的是下侧的边距
                autoPage: true
            },

            rules: {
                fontNum: [
                    { required: true, message: '设置每行打印字数', trigger: 'blur' },
                    { type: 'number', message: '字数必须为数字值' }
                ],
                columnNum: [
                    { required: true, message: '设置打印栏数', trigger: 'blur' },
                    { type: 'number', message: '栏数必须为数字值' }
                ],
                fontSize: [
                    { required: true, message: '设置打印字数大小', trigger: 'blur' },
                    { type: 'number', message: '字数大小必须为数字值' }
                ],
                lineSpace: [
                    { required: true, message: '行间距大小', trigger: 'blur' },
                    { type: 'number', message: '行间距必须为数字值' }
                ],
                leftSpace: [
                    { required: true, message: '请输入左空', trigger: 'blur' },
                    { type: 'number', message: '左空必须为数字值' }
                ],
                topSpace: [
                    { required: true, message: '请输入上空', trigger: 'blur' },
                    { type: 'number', message: '上空必须为数字值' }
                ],
                bottomSpace: [
                    { required: true, message: '请输入下空', trigger: 'blur' },
                    { type: 'number', message: '下空必须为数字值' }
                ]

            },
            content: [
                '1新华社北京1月27日电（记者李忠发、潘洁）中共中央总书记、国家主席习近平和夫人彭丽媛27日在北京会见以朝鲜劳动党中央政治局委员、中央副委员长、国际部部长李洙墉为团长的朝鲜友好艺术团。',
                '2习近平和彭丽媛欢迎朝鲜友好艺术团访华演出。习近平指出，此次访演既是落实中朝双方重要共识的一项重要文化交流活动，也是中朝建交70周年一项重要庆祝活动。相信访演会取得圆满成功,增进中朝两国人民友好感情。李洙墉首先转达了金正恩委员长和李雪主女士对习近平总书记和彭丽媛女士的亲切问候和良好祝愿，诚挚感谢习近平总书记对此次友好艺术团来华访演的关心和重视。习近平请李洙墉转达对金正恩委员长和李雪主女士的亲切问候和良好祝愿。',
                '3新华社北京1月27日电（记者李忠发、潘洁）中共中央总书记国家主席习近平和夫人彭丽媛27日在北京会见以朝鲜劳动党中央政治局委员、中央副委员长、国际部部长李洙墉为团长的朝鲜友好艺术团',
                '4习近平和彭丽媛欢迎朝鲜友好艺术团访华演出。习近平指出，此次访演既是落实中朝双方重要共识的一项重要文化交流活动，也是中朝建交70周年一项重要庆祝活动。相信访演会取得圆满成功,增进中朝两国人民友好感情。李洙墉首先转达了金正恩委员长和李雪主女士对习近平总书记和彭丽媛女士的亲切问候和良好祝愿，诚挚感谢习近平总书记对此次友好艺术团来华访演的关心和重视。习近平请李洙墉转达对金正恩委员长和李雪主女士的亲切问候和良好祝愿。'
            ]

        }
    },
    methods: {
        messageBoxClose () {

        },
        createConfirm () {
            // 实现打印的插件
            this.isShow = true
            setTimeout(() => {
                // 使用打印机
                this.$print(this.$refs.print)
            }, 1000)
        },
        topChange (value) {
            // this.topValue = value;
        },

        insertEnter (str, n, originStrLen) {
            let strTemp = ''
            let reg = /<br>/g
            if (reg.test(str)) {
                // 替换前导空格和后导空格
                str = str.replace(reg, '').replace(/(^\s+)|(\s+$)/g, '')
            }
            let len = str.length

            if (len > n) { // 如果字符的长度大于指定的长度
                if (len === originStrLen) {
                    strTemp = str.substring(0, n - 2)// 那么截取指定长度的字符串 开头有缩进
                } else {
                    strTemp = str.substring(0, n)
                }
                if (!strTemp) {
                    return
                }

                str = str.substring(n, len)// 截取剩余的字符串
                return strTemp + `<br>` + this.insertEnter(str, n)
            } else {
                return str
            }
        }

    },
    watch: {
        getFontNum: {
            handler: function (newVal) {
                newVal = newVal > 2 ? newVal : 20
                let arr = []
                let originContent = JSON.parse(JSON.stringify(this.content))
                for (let i = 0; i < originContent.length; i++) {
                    arr.push(this.insertEnter(originContent[i], newVal, originContent[i].length))
                }
                this.content = JSON.parse(JSON.stringify(arr)) || originContent
            }
        }
    },
    computed: {
        getFontNum () {
            return this.params.fontNum
        },
        setContentStyle () {
            return {
                'fontSize': this.params.fontSize + 'px',
                'column-count': this.params.columnNum,
                'line-height': this.params.lineSpace * this.params.fontSize + 'px',
                'padding-left': this.params.leftSpace * 2.5 + 'px',
                'padding-right': this.params.leftSpace * 2.5 + 'px',
                'padding-top': this.params.topSpace * 2.5 + 'px',
                'padding-bottom': this.params.bottomSpace * 2.5 + 'px'

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
.print-wrap {
    max-height: 200px;
    overflow: auto;
}
.text-indent-2 {
    text-indent: 2em;
}
</style>
<style>
.print-message .el-dialog {
    min-width: 76px;
}
</style>
<style lang="scss" scoped>
.mb15 {
    margin-bottom: 15px;
}
</style>
