<template>
    <div class="send-manuscript">
        <el-row :gutter="20"
                class="clearfix">
            <!-- 左侧 -->
            <el-col :span="16"
                    class="rtab-padding">
                <div class="left-content">
                    <el-row :gutter="20"
                            class="mb15">
                        <el-col :span="3"><b class="font18">基本信息</b></el-col>
                        <el-col :span="21">
                            <el-row :gutter="20"
                                    class="clearfix">
                                <el-col :span="8"
                                        class="tab-padding select-type">
                                    <template>
                                        <span class="pr10">类型</span>
                                        <el-select v-model="kanfaValue">
                                            <el-option v-for="item in kanfaData"
                                                       :key="item"
                                                       :label="item"
                                                       :value="item">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                                <el-col :span="3">
                                    <el-checkbox v-model="checked">备选项</el-checkbox>
                                </el-col>
                                <el-col :span="8"
                                        class="select-default">
                                    <template>
                                        <el-select v-model="kanfaValue">
                                            <el-option v-for="item in kanfaData"
                                                       :key="item"
                                                       :label="item"
                                                       :value="item">
                                            </el-option>
                                        </el-select>
                                    </template>
                                    <span class="pl10">为主稿件</span>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20"
                                    class="pt10">
                                <el-col :span="20"
                                        class="ipt-title tab-padding">
                                    <span class="pr10">标题</span>
                                    <el-input v-model="input"
                                              placeholder=""></el-input>
                                </el-col>
                                <el-col :span="4"
                                        class="title-btn">
                                    <el-button class="primary-btn">标题相同</el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"
                            class="mb15">
                        <el-col :span="3"><b class="font18">已选稿件</b></el-col>
                        <el-col :span="21"
                                class="tab-padding">
                            <template>
                                <el-table :data="tableData"
                                          style="width: 100%">
                                    <el-table-column type="selection"
                                                     width="55">
                                    </el-table-column>
                                    <el-table-column prop="date"
                                                     label="序号">
                                    </el-table-column>
                                    <el-table-column prop="name"
                                                     label="标题">
                                    </el-table-column>
                                    <el-table-column prop="address"
                                                     label="类型">
                                    </el-table-column>
                                    <el-table-column prop="address"
                                                     label="源文件">
                                    </el-table-column>
                                </el-table>
                            </template>
                            <div class="btn-group text-right mt15">
                                <el-button class="primary-btn">添加</el-button>
                                <el-button class="reset-btn">移除</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"
                            class="mb15">
                        <el-col :span="3"><b class="font18">内容</b></el-col>
                        <el-col :span="21"
                                class="tab-padding">
                            <el-input type="textarea"
                                      :rows="6"
                                      placeholder="请输入内容"
                                      v-model="textarea">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <!-- 右侧 -->
            <el-col :span="8">
                <div class="right-content">
                    <el-row :gutter="20">
                        <div class="pl10"><b class="font18">稿签信息</b></div>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="6">
                                <span>第一作者</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input"
                                          placeholder="作者"></el-input>
                                <!-- <span>作者</span> -->
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="6">
                                <span>第一作者</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input v-model="input"
                                          placeholder="作者"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="6">
                                <span>来源</span>
                            </el-col>
                            <el-col :span="18">
                                <el-select v-model="kanfaValue">
                                    <el-option v-for="item in kanfaData"
                                               :key="item"
                                               :label="item"
                                               :value="item">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="6">
                                <span>稿件体裁</span>
                            </el-col>
                            <el-col :span="18">
                                <el-select v-model="kanfaValue">
                                    <el-option v-for="item in kanfaData"
                                               :key="item"
                                               :label="item"
                                               :value="item">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10 mb15">
                            <el-col :span="6">
                                <span>稿件分类</span>
                            </el-col>
                            <el-col :span="18">
                                <el-input type="textarea"
                                          :rows="3"
                                          placeholder="请输入内容"
                                          v-model="textarea">
                                </el-input>
                                <div class="btn-group mt15">
                                    <el-button class="primary-btn">选择分类</el-button>
                                    <el-button class="primary-btn">详细稿签</el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10">
                            <div class="pl10"><b class="font18">投向电讯稿库</b></div>
                            <el-row :gutter="20"
                                    class="pl10 pr10 mb15">
                                <el-col :span="18">
                                    <template v-for="label in radioLabel">
                                        <el-col :span="12"
                                                class="text-overflow"
                                                :key="label">
                                            <el-radio v-model="radioName"
                                                      :label="label"
                                                      @change="labelChange">{{ label }}</el-radio>
                                        </el-col>
                                    </template>
                                </el-col>
                                <el-col :span="6"
                                        class="choose-btn">
                                    <el-button class="primary-btn">选择</el-button>
                                </el-col>
                            </el-row>
                        </el-row>
                        <el-row :gutter="20"
                                class="pl10 pr10">
                            <div class="pl10"><b class="font18">投送位置</b></div>
                            <el-row :gutter="20"
                                    class="pl10 pr10 mb15">
                                <el-col :span="24"
                                        class="col-border">
                                    <!-- <template v-for="label in radioOpsition">
                                        <el-col :span="12"
                                                class="text-overflow"
                                                :key="label">
                                            <el-radio v-model="radioName"
                                                      :label="label"
                                                      @change="labelChange">{{ label }}</el-radio>
                                        </el-col>
                                    </template> -->
                                    <el-input type="textarea"
                                              :rows="2"
                                              placeholder="请输入内容"
                                              v-model="textarea">
                                    </el-input>
                                </el-col>
                                <el-col :span="24">
                                    <template>
                                        <el-checkbox-group v-model="checkList">
                                            <el-checkbox label="原稿保护"></el-checkbox>
                                            <el-checkbox label="本地存留"></el-checkbox>
                                        </el-checkbox-group>
                                    </template>
                                </el-col>
                            </el-row>
                        </el-row>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <div class="btn-group ac mt15">
            <el-button class="primary-btn">投送</el-button>
            <el-button class="reset-btn">关闭</el-button>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
            kanfaData: [1, 2, 3, 4, 5],
            kanfaValue: 1,
            input: null,
            textarea: null,
            // 栏目选择
            radioName: '栏目库',
            radioLabel: [
                '栏目库',
                '版面库',
                '媒体公共库',
                '其他稿库'
            ]
            // radioOpsition: [
            //     '新华每日电讯'
            // ],
            // checkList: [
            //     '原稿保护'
            // ]
        }
    },
    mounted () {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.send-manuscript {
    width: 100%;
    min-height: 100%;
    background: nth($bg-color, 2);
    padding: 10px;
    line-height: 30px;
    .left-content {
        padding: 25px;
        height: 620px;
        background: $wcolor;
        .select-type .el-select {
            width: 78%;
        }
        .select-default {
            .el-select {
                float: left;
                width: 60%;
            }
        }
        .ipt-title {
            .el-input {
                width: 90%;
            }
        }
        .title-btn {
            text-align: right;
        }
        .btn-group {
            .reset-btn {
                margin-right: 0px;
            }
        }
    }
    .right-content {
        @extend .left-content;
        .btn-group {
            .primary-btn {
                margin: 0px;
                &:last-child {
                    margin-top: 2px;
                    float: right;
                }
            }
        }
        .choose-btn {
            text-align: right;
            .primary-btn {
                margin: 0px;
            }
        }
    }
    &>.btn-group{
        padding: 50px;
        button{
            padding: 15px 25px;
        }
    }
}
</style>
