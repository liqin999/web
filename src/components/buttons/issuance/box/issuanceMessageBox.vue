<template>
    <el-dialog class="issuance-message"
               title="签发"
               @close="messageBoxClose()"
               :visible.sync="issuanceData.contentShow"
               width="80%"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 签发信息 -->
            <el-row :gutter="20"
                    class="clearfix">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">签发信息</b></el-col>
                <el-col :span="21">
                    <el-row class="clearfix">
                        <template v-for="item in radioLabel">
                            <el-radio v-model="radioName"
                                      :label="item"
                                      :key="item">{{ item }}</el-radio>
                        </template>
                    </el-row>
                    <el-row class="clearfix pt10 pb10">
                        <!-- 处理时间 -->
                        <el-col :span="8"
                                class="times-select">
                            <template>
                                <span>刊发时间</span>
                                <el-date-picker v-model="pickerTime"
                                                type="date"
                                                placeholder="选择日期"
                                                @change="pickerChange">
                                </el-date-picker>
                            </template>
                        </el-col>
                        <!-- 刊发位次 -->
                        <el-col :span="6"
                                class="text-right">
                            <template>
                                <span>刊发位次</span>
                                <el-select v-model="kanfaValue"
                                           class="sort-select">
                                    <el-option v-for="item in kanfaData"
                                               :key="item"
                                               :label="item"
                                               :value="item">
                                    </el-option>
                                </el-select>
                            </template>
                        </el-col>
                        <!-- checkbox -->
                        <el-col :span="10">
                            <template>
                                <el-checkbox-group v-model="checkList">
                                    <template v-for="item in checkLabel">
                                        <el-checkbox :label="item"
                                                     :key="item"></el-checkbox>
                                    </template>
                                </el-checkbox-group>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 字体和字号 -->
            <el-row :gutter="20"
                    class="clearfix">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">字体和字号</b></el-col>
                <el-col :span="18">
                    <el-row :gutter="20"
                            class="font16">
                        <div>
                            <el-col :span="18"
                                    :offset="4" class="tab-padding rtab-padding">
                                <el-col :span="8"
                                        class="ac"><span>标题字体</span></el-col>
                                <el-col :span="8"
                                        class="ac"><span>横向字号</span></el-col>
                                <el-col :span="8"
                                        class="ac"><span>纵向字号</span></el-col>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="mainTitle.checked">主标题</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="mainTitle.fontValue" class="issuance-select">
                                        <el-option v-for="item in mainTitle.fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="mainTitle.hengValue" class="issuance-select">
                                        <el-option v-for="item in mainTitle.hengData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="mainTitle.shuValue" class="issuance-select">
                                        <el-option v-for="item in mainTitle.shuData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="fuTitle.checked">副标题</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fuTitle.fontValue" class="issuance-select">
                                        <el-option v-for="item in fuTitle.fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fuTitle.hengValue" class="issuance-select">
                                        <el-option v-for="item in fuTitle.hengData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="fuTitle.shuValue" class="issuance-select">
                                        <el-option v-for="item in fuTitle.shuData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="20"
                            class="font-select">
                        <div>
                            <el-col :span="4">
                                <template>
                                    <el-checkbox v-model="jianti.checked">肩题</el-checkbox>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="jianti.fontValue" class="issuance-select">
                                        <el-option v-for="item in jianti.fontData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="jianti.hengValue" class="issuance-select">
                                        <el-option v-for="item in jianti.hengData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                            <el-col :span="6">
                                <template>
                                    <el-select v-model="jianti.shuValue" class="issuance-select">
                                        <el-option v-for="item in jianti.shuData"
                                                   :key="item"
                                                   :label="item"
                                                   :value="item">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-col>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 签发目标 -->
            <el-row :gutter="20"
                    class="mt10">
                <el-col :span="3"
                        class="tab-padding"><b class="message-title">签发目标</b></el-col>
                <el-col :span="21">
                    <el-row class='message-content'>
                        <el-col :span="8"
                            class="message-checkbox">
                            <el-tree :data="dataList"
                                :default-expanded-keys="[2, 3]"
                                :highlight-current="true"
                                node-key="id"
                                :props="defaultProps">
                            </el-tree>
                        </el-col>
                        <el-col :span="16">
                            <el-col :span="5"
                                    class="text-right"><b class="message-title">签发意见</b></el-col>
                            <el-col :span="19"
                                    class="pl10">
                                    <el-row>
                                        <el-input type="textarea"
                                                :rows="3"
                                                placeholder="请输入内容"
                                                v-model="textarea2"
                                                @change="textareaChange2">
                                        </el-input>

                                        <el-col :span="14">
                                            <b style="color: red">2018-11-08 四版 预安排稿件/线索 0</b>
                                        </el-col>
                                        <el-col :span="24">
                                            <el-table>
                                                <el-table-column label="稿号"></el-table-column>
                                                <el-table-column label="标题"></el-table-column>
                                                <el-table-column label="资源"></el-table-column>
                                                <el-table-column label="类型"></el-table-column>
                                            </el-table>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14">
                                            <b style="color: blue">2018-11-08 四版 已签发稿数 0</b>
                                        </el-col>
                                        <el-col :span="24">
                                            <el-table>
                                                <el-table-column label="稿号"></el-table-column>
                                                <el-table-column label="标题"></el-table-column>
                                            </el-table>
                                        </el-col>
                                    </el-row>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="primary-btn"
                       @click="issuanceConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="issuanceData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        issuanceData: {
            type: Object
        }
    },
    data () {
        return {
            checked: '',
            textarea: '',
            textarea2: '',
            radioName: '版面库',
            radioLabel: [
                '版面库',
                '栏目库'
            ],
            kanfaData: [1, 2, 3, 4, 5],
            // 主标题
            mainTitle: {
                checked: '',
                 // 标题字体
                fontValue: '宋体',
                fontData: [
                    '宋体',
                    '微软雅黑'
                ],
            // 横向字号
                hengValue: '五号',
                hengData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五'],
            // 纵向字号
                shuValue: '五号',
                shuData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五']
            },
            // 副标题
            fuTitle: {
                checked: '',
                 // 标题字体
                fontValue: '宋体',
                fontData: [
                    '宋体',
                    '微软雅黑'
                ],
            // 横向字号
                hengValue: '五号',
                hengData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五'],
            // 纵向字号
                shuValue: '五号',
                shuData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五']
            },
            // 肩题
            jianti: {
                checked: '',
                 // 标题字体
                fontValue: '宋体',
                fontData: [
                    '宋体',
                    '微软雅黑'
                ],
            // 横向字号
                hengValue: '五号',
                hengData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五'],
            // 纵向字号
                shuValue: '五号',
                shuData: ['初号', '小初', '一号', '小一', '二号', '小二', '三号', '小三', '四号', '小四', '五号', '小五']
            },
            // 签发目标
            dataList: [
                {
                    id: 2,
                    label: 'A叠',
                    children: [{
                        id: 5,
                        label: '一版'
                    },
                    {
                        id: 6,
                        label: '二版'
                    },
                    {
                        id: 55,
                        label: '三版'
                    },
                    {
                        id: 56,
                        label: '四版'
                    },
                    {
                        id: 546,
                        label: '五版'
                    }]
                }

            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            kanfaValue: 1,
            pickerTime: '',
            checkLabel: [
                '预刊登日期优先',
                '重稿检查'
            ],
            checkList: ['预刊登日期优先']
        }
    },
    methods: {
        // 点击关闭回调函数
        messageBoxClose () {
        },
        issuanceConfirm () { // 确认按钮
        },
        // 日期改变
        pickerChange (val) {
            this.pickerTime = val
        },
        // 文本框值改变
        textareaChange (val) {
            this.textarea = val
        },
        // 文本框值改变
        textareaChange2 (val) {
            this.textarea2 = val
        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    line-height: 30px;
    // 时间插件修改样式
    .times-select {
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
            width: 70%;
            padding: 40;
        }
    }
    .sort-select {
        float: right;
        width: 40%;
        margin: 0 10px;
    }
    .el-checkbox-group {
        text-align: right;
    }
    .font-select {
        margin: 10px 0;
    }
    // .text-right{
    //     padding-left: 40px;
    // }
    .issuance-select{
        width: 100%;
    }
    .message-content {
        .message-checkbox {
            height: 200px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
    .el-tree {
        position: relative;
        cursor: default;
        background: #fff;
        color: #606266;
        /* padding-right: 5px; */
        padding-left: 30px;
    }
    .message-content .message-checkbox[data-v-55926a36] {
        height: 292px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
    }
}
</style>
<style>
.issuance-message .el-table thead th {
    padding: 0px 0;
    color: #676767;
    background-color: #ebebeb;
}
.issuance-message .el-table__empty-block {
    position: relative;
    min-height: 45px;
    text-align: center;
    width: 100%;
    height: 100%;
}
</style>
