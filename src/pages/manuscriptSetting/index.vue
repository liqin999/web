<template>
    <el-container class="manuscript-setting">
        <el-header height="125px">
            <div class="search-wrap">
                <el-form :inline="true"
                         :model="searchForm"
                         class="search-form">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="处理时间:"
                                          class="search-time">
                                <el-date-picker v-model="searchForm.dateValue"
                                                type="daterange"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions2">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6"
                                v-if="showKeyWords">
                            <el-form-item label="关键字:"
                                          class="search-key">
                                <el-input v-model="searchForm.keywords"
                                          placeholder="关键字"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="稿件状态:">
                                <el-select v-model="searchForm.state1"
                                           placeholder="稿件状态">
                                    <!-- <el-option label="全部"
                                               value="shanghai">
                                    </el-option> -->
                                    <el-option label="待审"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="待处理"
                                               value="shan22ghai">
                                    </el-option>
                                    <el-option label="已处理"
                                               value="be1ijing">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="稿件来源:">
                                <el-select v-model="searchForm.source"
                                           placeholder="稿件来源">
                                    <el-option label="邮件稿件"
                                               value="shanghai">
                                    </el-option>
                                    <el-option label="eNews稿件"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="自采稿"
                                               value="shan22ghai">
                                    </el-option>
                                    <el-option label="数据服务平台"
                                               value="sha3n22ghai">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="第一作者:">
                                <el-input v-model="searchForm.author"
                                          placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6"
                                v-if="showKeyWords">
                            <el-form-item label="稿件号:">
                                <el-input v-model="searchForm.num"
                                          placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="约稿状态:">
                                <el-select v-model="searchForm.state2"
                                           placeholder="稿件状态">
                                    <el-option label="全部"
                                               value="shanghai">
                                    </el-option>
                                    <el-option label="待审"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="待处理"
                                               value="shan22ghai">
                                    </el-option>
                                    <el-option label="已处理"
                                               value="be1ijing">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产品类型:">
                                <el-select v-model="searchForm.source2"
                                           placeholder="产品类型">
                                    <el-option label="新华社客户端"
                                               value="shangddhai12">
                                    </el-option>
                                    <el-option label="微信"
                                               value="beijing">
                                    </el-option>
                                    <el-option label="新浪微博"
                                               value="12的方法">
                                    </el-option>
                                    <el-option label="报刊"
                                               value="12的方法">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="类型:"
                                                  class="search-check">
                                        <el-checkbox :indeterminate="searchForm.isIndeterminate"
                                                     v-model="searchForm.checkAll"
                                                     @change="handleCheckAllChange">全选</el-checkbox>
                                        <el-checkbox-group style="display:inline-block"
                                                           @change="handleCheckedTypesChange"
                                                           v-model="searchForm.checkedTypes">
                                            <el-checkbox class="che"
                                                         v-for="type in allTypes"
                                                         :label="type"
                                                         :key="type">{{type}}</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button class="primary-btn"
                                                   @click="onSearch">检索</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </el-aside>
            <el-container>
                <el-header height="40px">
                    <div class="main-header-group">
                        <!-- 引入按钮的组的插件 -->
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">刷新</span>
                            </span>
                        </div>
                        <!-- 建稿按钮组件 -->
                        <create-draft>
                            <span slot="iconName">建稿</span>
                        </create-draft>
                        <!-- <send-draft :sendData="true">
                            <span slot="iconName">传稿</span>
                        </send-draft> -->
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">约稿</span>
                            </span>
                        </div>
                        <!-- <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">翻译</span>
                            </span>
                        </div> -->
                        <translate class="primary-btn">
                            <span slot="iconName">翻译</span>
                        </translate>
                        <!-- 留搞组建按钮 -->
                        <stay-draft class="primary-btn">
                            <span slot="iconName">留稿</span>
                        </stay-draft>
                    </div>
                </el-header>
                <el-main ref="mainTable">
                    <el-table ref="multipleTable"
                              :data="tableData3"
                              :height="mainTableHeight"
                              tooltip-effect="dark"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column label="组稿">
                            <template slot-scope="scope">{{ scope.row.article }}</template>
                        </el-table-column>
                        <el-table-column prop="id"
                                         label="稿号"
                                         width="110">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="标题"
                                         show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column label="采用否">
                            <template slot-scope="scope">
                                <span>{{scope.row.isactive ? '是' : '否'}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="wordNumber"
                                         label="字数">
                        </el-table-column>
                        <el-table-column prop="status"
                                         label="状态">
                        </el-table-column>
                        <el-table-column prop="map"
                                         label="代表图">
                        </el-table-column>
                        <el-table-column prop="createDate"
                                         label="创建日期">
                        </el-table-column>
                        <el-table-column prop="author"
                                         label="第一作者">
                        </el-table-column>
                        <el-table-column prop="authorType"
                                         label="作者类型">
                        </el-table-column>
                        <el-table-column prop="type"
                                         label="类型">
                        </el-table-column>
                    </el-table>
                </el-main>
                <el-footer height="70px">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   class="ac"
                                   :current-page="currentPage"
                                   :page-size="20"
                                   layout="total, prev, pager, next"
                                   :total="3">
                    </el-pagination>
                    <div class="btn-bottom">
                        <draft-look>
                            <i slot="icon"
                               class="iconfont icon-liulan"></i>
                            <span slot="iconName">浏览</span>
                        </draft-look>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <!-- <div class="btn-nav">
                            <i class="el-icon-download"></i>
                            <span>下载</span>
                        </div> -->
                        <down-load>
                            <i slot="icon"
                               class="el-icon-download"></i>
                            <span slot="iconName">下载</span>
                        </down-load>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <printing>
                            <i slot="icon"
                               class="iconfont icon-ico_print"></i>
                            <span slot="iconName">打印</span>
                        </printing>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <draft-label>
                            <i slot="icon"
                               class="iconfont icon-wenben1"></i>
                            <span slot="iconName">稿签</span>
                        </draft-label>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <history>
                            <i slot="icon"
                               class="iconfont icon-ic_history"></i>
                            <span slot="iconName">历史</span>
                        </history>
                        <div class="btn-line">
                            <span>|</span>
                        </div>
                        <div class="btn-nav">
                            <i class="iconfont icon-guanbi"></i>
                            <span>关闭</span>
                        </div>
                    </div>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
// import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import leftMenu from '@/components/treeMenu/leftTree.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
// 建稿按钮弹框
import createDraft from '@/pages/manuscriptSetting/createDraft/createDraft'
// 打印弹框按钮
import printing from '@/components/buttons/printing/printing.vue'
// 浏览弹框按钮
import draftLook from '@/components/buttons/draftLook/draftLook'
// 留稿按钮弹框
import stayDraft from '@/pages/manuscriptSetting/stayDraft/stayDraft'
// 下载弹框按钮
import downLoad from '@/components/buttons/downLoad/downLoad'
// 翻译弹框按钮
import translate from '@/components/buttons/translate/translate'
export default {
    components: {
        leftMenu,
        // sendDraft,
        draftLabel,
        history,
        createDraft,  // 建稿按钮弹框
        printing,
        draftLook,
        stayDraft,
        downLoad,
        translate
    },
    data () {
        return {
            showKeyWords: true,
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                        picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick (picker) {
                        const end = new Date()
                        const start = new Date()
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                        picker.$emit('pick', [start, end])
                    }
                }]
            },
            draft: [],
            currentPage: 1,
            searchForm: {
                sendDate: '',
                state1: '',
                state2: '',
                isIndeterminate: false,
                checkAll: [],
                checkedTypes: [],
                num: '',
                keyWords: '',
                author: '',
                source: '',
                productType: ''

            },
            allTypes: ['文字', '图片', '动图', '图集', '视频', '音频', '多媒体'],
            data2: [
                {
                    id: 1,
                    label: '全部稿件',
                    children: [
                        {
                            id: 1,
                            label: '未分类稿件',
                            children: [
                                {
                                    id: 1 - 1,
                                    label: '头版1',
                                    icon: 'el-icon-success'
                                }
                            ]

                        },

                        {
                            id: 2,
                            label: '国际新闻信息分类',
                            children: [
                                {
                                    id: 1,
                                    label: '政治法律',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 2,
                                    label: '军事',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 3,
                                    label: '社会',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 4,
                                    label: '生态环境',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 5,
                                    label: '科技',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 6,
                                    label: '教育',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 7,
                                    label: '宏观经济',
                                    icon: 'iconfont icon-file1'
                                },
                                {
                                    id: 8,
                                    label: '行业经济',
                                    icon: 'iconfont icon-file1'
                                }
                            ]
                        }
                    ]
                }

            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData3: [{
                id: '20181029029',
                name: '一个西红柿的”世界地图“',
                wordNumber: '3578',
                status: '已处理',
                map: '',
                createDate: '201810-31 ',
                author: '赵倩',
                authorType: '',
                type: '文本'
            }, {
                id: '20181029011',
                name: '城市生活垃圾分类的“银川模式”',
                wordNumber: '3578',
                status: '已处理',
                map: '',
                createDate: '201810-31 ',
                author: '郝玉',
                authorType: '',
                type: '文本'
            }, {
                id: '20181029050',
                name: '腾讯体育是中国知名的体育门户网站',
                wordNumber: '3578',
                status: '待审',
                map: '',
                createDate: '201810-31 ',
                author: '刘晶瑶',
                authorType: '',
                type: '文本'
            }],
            multipleSelection: [],
            mainTableHeight: null
        }
    },
    mounted () {
        let that = this
        this.mainTableHeight = this.$refs.mainTable.$el.clientHeight - 20
        window.onresize = () => {
            return (() => {
                that.mainTableHeight = that.$refs.mainTable.$el.clientHeight - 20
            })()
        }
    },
    methods: {
        handleCheckAllChange (val) {
            this.searchForm.checkedTypes = val ? this.allTypes : []
            this.searchForm.isIndeterminate = false
        },
        handleCheckedTypesChange (value) {
            let checkedCount = value.length
            this.searchForm.checkAll = checkedCount === this.allTypes.length
            this.searchForm.isIndeterminate = checkedCount > 0 && checkedCount < this.allTypes.length
        },
        getTreeObj (data) { // 获得树形菜单的对象
            console.log('获得自组件的点击的节点对象', data)
        },
        onSearch () {

        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleSizeChange (val) {

        },
        handleCurrentChange (val) {

        },
        getConcatData (data) { // 获得合并的元素的参数信息
            console.log('获得子组件的合并的元素数据', data)
        },
        getConcatDataUp (data) { // 获得合并弹框的上移操作
            console.log('获得合并子组件弹框的上移操作元素数据', data)
        },
        getConcatDataDown (data) { // 获得合并弹框的下移操作
            console.log('获得合并子组件弹框的下移操作元素数据', data)
        }
    }
}
</script>
