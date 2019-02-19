<template>
    <el-container class="input-manuscript send-manuscript">
        <el-container>
            <el-main class="main-content">
                <el-row :gutter="20"
                        class="mb15 pl10 pr10">
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
                                <el-checkbox v-model="checked">组稿</el-checkbox>
                            </el-col>
                            <el-col :span="8"
                                    class="select-default">
                                <template>
                                    <el-select v-model="mainDraftValue">
                                        <el-option v-for="item in mainDraftData"
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
                        class="mb15 pl10 pr10">
                    <el-col :span="3"><b class="font18">已选稿件</b></el-col>
                    <el-col :span="21"
                            class="tab-padding">
                        <template>
                            <el-table :data="tableData"
                                      style="width: 100%">
                                <el-table-column type="selection"
                                                 width="55">
                                </el-table-column>
                                <el-table-column prop="id"
                                                 type="index"
                                                 label="序号">
                                </el-table-column>
                                <el-table-column prop="name"
                                                 label="标题"
                                                 width="280">
                                </el-table-column>
                                <el-table-column prop="type"
                                                 label="类型">
                                </el-table-column>
                                <el-table-column prop="source"
                                                 label="源文件"
                                                 show-overflow-tooltip>
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
                        class="mb15 pl10 pr10">
                    <template v-if="kanfaValue === '文字'">
                        <el-col :span="3">
                            <b class="font18">内容</b>
                        </el-col>
                        <el-col :span="21">
                            <el-input type="textarea"
                                      :rows="8"
                                      placeholder="详细说明"
                                      v-model="textarea">
                            </el-input>
                        </el-col>
                    </template>

                    <template v-if="kanfaValue === '图片'">
                        <el-col :span="12">
                            <b class="font18">图片预览</b>
                            <img style="width:100%;height:100%"
                                 src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=657448908,3491892813&fm=26&gp=0.jpg">
                        </el-col>
                        <el-col :span="12"
                                class="tab-padding">
                            <b class="font18">添加说明</b>
                            <el-input type="textarea"
                                      :rows="8"
                                      placeholder="详细说明"
                                      v-model="textarea">
                            </el-input>
                        </el-col>
                    </template>

                </el-row>
            </el-main>
            <el-aside width="400px"
                      class="aside-content">
                <div class="pl10"><b class="font18">稿签信息</b></div>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="6">
                        <span>第一作者</span>
                    </el-col>
                    <el-col :span="18">
                        <el-input v-model="author"
                                  placeholder="作者"></el-input>
                        <!-- <span>作者</span> -->
                    </el-col>
                </el-row>
                <!-- <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="6">
                        <span>稿件来源</span>
                    </el-col>
                    <el-col :span="18">
                        <el-input v-model="input"
                                  placeholder="作者"></el-input>
                    </el-col>
                </el-row> -->
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="6">
                        <span>稿件来源</span>
                    </el-col>
                    <el-col :span="18">
                        <el-select v-model="draftSourceValue">
                            <el-option v-for="item in draftSourceData"
                                       :key="item"
                                       :label="item"
                                       :value="item">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="6">
                        <span>稿件体裁</span>
                    </el-col>
                    <el-col :span="18">
                        <el-select v-model="draftGenreValue">
                            <el-option v-for="item in draftGenreData"
                                       :key="item"
                                       :label="item"
                                       :value="item">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10 mb10">
                    <el-col :span="6">
                        <span>稿件分类</span>
                    </el-col>
                    <el-col :span="18">
                        <el-input type="textarea"
                                  :rows="2"
                                  placeholder="请输入内容"
                                  v-model="textarea">
                        </el-input>
                        <div class="btn-group pt10">
                            <classify class="primary-btn">
                                <span slot="iconName">选择分类</span>
                            </classify>
                            <!-- <el-button class="primary-btn">选择分类</el-button> -->
                            <!-- <el-button class="primary-btn">详细稿签</el-button> -->
                            <draft-label class="primary-btn">
                                <span slot="iconName">详细稿签</span>
                            </draft-label>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10">
                    <div class="pl10"><b class="font18">投向电讯稿库</b></div>
                    <el-row :gutter="20"
                            class="pl10 pr10 mb10 radio-content">
                        <el-col :span="18">
                            <template v-for="label in radioLabel">
                                <el-col :span="12"
                                        class="text-overflow tab-padding"
                                        :key="label.id">
                                    <el-radio v-model="radioName"
                                              :label="label.name"
                                              @change="labelChange(label)">{{ label.name }}</el-radio>
                                </el-col>
                            </template>
                        </el-col>
                        <!-- <el-col :span="6"
                                class="choose-btn">
                            <el-button class="primary-btn">选择</el-button>
                        </el-col> -->
                    </el-row>
                </el-row>
                <el-row :gutter="20"
                        class="pl10 pr10">
                    <div class="pl10"><b class="font18">投送位置</b></div>
                    <el-row :gutter="20"
                            class="pl10 pr10 mb10">
                        <el-col :span="24">
                            <!-- <el-input type="textarea"
                                      :rows="2"
                                      placeholder="请输入内容"
                                      v-model="textarea">
                            </el-input> -->
                            <div class="select-position">
                                <template v-for="label in getSecondRadio">
                                    <el-col :span="10"
                                            :offset="1"
                                            class="text-overflow tab-padding"
                                            :key="label.id">
                                        <el-radio v-model="selectRadioName"
                                                  :label="label.name"
                                                  @change="selectLabelChange">{{ label.name }}</el-radio>
                                    </el-col>
                                </template>
                            </div>
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
            </el-aside>
        </el-container>
        <el-footer>
            <el-button class="primary-btn">投送</el-button>
            <el-button class="reset-btn">关闭</el-button>
        </el-footer>
    </el-container>
</template>
<script>
// 选择分类按钮组件
import classify from '@/components/buttons/classify/classify'
// 详细稿签按钮组件
import draftLabel from '@/components/buttons/draftLabel/draftLabel'

export default {
    components: {
        classify,
        draftLabel

    },
    data () {
        return {
            tableData: [
                {
                    name: '一个灵魂的旅行',
                    source: 'C:\\Documents\\1.jpg',
                    type: '图片'
                }

            ],
            // 作者
            author: '强晓玲',
            input: '一个灵魂的旅行',
            // 类型
            kanfaData: [
                '文字',
                '图片',
                '网上图片',
                '图表',
                '视频',
                '音频',
                '歌曲',
                '应用'
            ],
            kanfaValue: '原图',
            // 主稿件
            mainDraftData: [
                '001',
                '002',
                '003',
                '004'
            ],
            mainDraftValue: '',
            // 稿件来源
            draftSourceData: ['自写稿', '邮件稿件', 'eNews稿件', '数据服务平台'],
            draftSourceValue: '自写稿',
            // 稿件体裁
            draftGenreData: ['新闻报道', '新闻分析', '年终专稿'],
            draftGenreValue: '新闻报道',
            checked: false, // 备选项
            textarea: '军事',
            // 栏目选择
            radioName: '栏目库',
            selectRadioName: '',
            firstRadioId: '1',
            radioLabel: [
                {
                    id: '1',
                    name: '栏目库',
                    children: [
                        {
                            id: '1-1',
                            name: '头版'
                        }, {
                            id: '1-2',
                            name: '要闻'
                        }, {
                            id: '1-3',
                            name: '国内新闻'
                        }, {
                            id: '1-4',
                            name: '新闻焦点'
                        }
                    ]
                }, {
                    id: '2',
                    name: '版面库',
                    children: [
                        {
                            id: '2-1',
                            name: '一版'

                        }, {
                            id: '2-2',
                            name: '二版'

                        }, {
                            id: '2-3',
                            name: '三版'

                        }, {
                            id: '2-4',
                            name: '四版'
                        }
                    ]

                }, {
                    id: '3',
                    name: '媒体公共库',
                    children: [
                        {
                            id: '3-1',
                            name: '新华每日电讯'
                        },
                        {
                            id: '3-2',
                            name: '每日电讯微博'
                        }
                    ]
                },
                {
                    id: '4',
                    name: '组室公共库',
                    children: [
                        {
                            id: '4-1',
                            name: '新华每日电讯'
                        },
                        {
                            id: '4-2',
                            name: '每日电讯微博'
                        }
                    ]
                }, {
                    id: '5',
                    name: '我的稿库',
                    children: [
                        {
                            id: '5-1',
                            name: '科技'
                        },
                        {
                            id: '5-2',
                            name: '文化'
                        }
                    ]
                },
                {
                    id: '6',
                    name: '专题库',
                    children: [
                        {
                            id: '6-1',
                            name: '专题一'
                        },
                        {
                            id: '6-2',
                            name: '专题二'
                        }
                    ]
                },
                {
                    id: '7',
                    name: '其他人员库'

                }
            ],
            radioOpsition: [
                '新华每日电讯'
            ],
            checkList: [
                '原稿保护', '本地存留'
            ]
        }
    },
    mounted () {

    },
    computed: {
        getSecondRadio () {
            return this.radioLabel[this.firstRadioId - 1].children
        }
    },
    methods: {
        labelChange (label) {
            this.firstRadioId = label.id
        },
        selectLabelChange () {

        }
    }
}
</script>
<style lang="scss" scoped>
.send-manuscript {
    line-height: 35px;
    .el-container {
        .main-content {
            margin-right: 10px;
            padding-top: 15px;
            .select-type .el-select {
                width: 78%;
            }
            .select-default {
                .el-select {
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
        .aside-content {
            .btn-group {
                display: flex;
                line-height: 1;
                justify-content: space-between;
                .primary-btn {
                    margin: 0px;
                }
            }
            .radio-content {
                line-height: 30px;
                .choose-btn {
                    text-align: right;
                    .primary-btn {
                        margin: 0px;
                    }
                }
            }
        }
    }
    .select-position {
        border: 1px solid #ddd;
        height: 180px;
        overflow: auto;
    }
}
</style>
