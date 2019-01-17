<template>
    <el-container>
        <el-header height="85px">
            <div class="search-wrap">
                <search-input :searchForm="searchForm"
                              :allTypes="allTypes"
                              @sendFormData="getFormData">
                </search-input>
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
                        <send-draft :sendData="true">
                            <span slot="iconName">传稿</span>
                        </send-draft>
                        <issuance>
                            <span slot="iconName">签发</span>
                        </issuance>
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">审稿</span>
                            </span>
                        </div>
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">淘汰</span>
                            </span>
                        </div>
                        <version>
                            <span slot="iconName">版本</span>
                        </version>

                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">编辑</span>
                            </span>
                        </div>
                        <div data-v-6eb3df45=""
                             class="primary-btn"><span>
                                <span data-v-6eb3df45="">提交</span>
                            </span>
                        </div>
                        <split>
                            <span slot="iconName">拆分</span>
                        </split>
                        <concat :data="concatData"
                                @sendConcatData="getConcatData"
                                @sendConcatDataUp="getConcatDataUp"
                                @sendConcatDataDown="getConcatDataDown">
                            <span slot="iconName">合并</span>
                        </concat>

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
                        <el-table-column label="入库时间"
                                         width="100px">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column prop="title"
                                         width="180px"
                                         show-overflow-tooltip
                                         label="标题">
                        </el-table-column>
                        <el-table-column prop="repDrawing"
                                         label="代表图">
                        </el-table-column>
                        <el-table-column prop="number"
                                         label="字数">
                        </el-table-column>
                        <el-table-column prop="address"
                                         label="位置"
                                         show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="state"
                                         label="状态">
                        </el-table-column>
                        <el-table-column prop="deliverer"
                                         label="投送人">
                        </el-table-column>
                        <el-table-column prop="processingTime"
                                         label="处理时间"
                                         width="150px">
                        </el-table-column>
                        <el-table-column prop="dealingPeople"
                                         label="处理人">
                        </el-table-column>
                        <el-table-column prop="firstAuthor"
                                         label="第一作者">
                        </el-table-column>
                        <el-table-column prop="medio"
                                         label="媒体"
                                         show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="preData"
                                         label="预计刊登日期"
                                         width="150px">
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
                                   :total="100">
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
                        <download>
                            <i slot="icon"
                               class="el-icon-download"></i>
                            <span slot="iconName">下载</span>
                        </download>
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
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import issuance from '@/components/buttons/issuance/issuance'
import searchInput from '@/components/searchConditions/searchInput.vue'
import leftMenu from '@/components/treeMenu/leftTree.vue'
import split from '@/components/buttons/split/split'
import concat from '@/components/buttons/concat/concat'
import version from '@/components/buttons/version/version.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
// 打印弹框按钮
import printing from '@/components/buttons/printing/printing.vue'
// 浏览弹框按钮
import draftLook from '@/components/buttons/draftLook/draftLook'
// 下载弹框按钮
import download from '@/components/buttons/download/download'
export default {
    components: {
        searchInput,
        leftMenu,
        sendDraft,
        issuance,
        split,
        concat,
        version,
        draftLabel,
        history,
        printing,
        draftLook,
        download
        // stayDraft
    },
    data () {
        return {
            concatData: {
                contentShow: false,
                tableData: [{
                    num: '20181029000029',
                    title: '普惠小微企业 减税再出新举措'

                }, {
                    num: '20181029000030',
                    title: '秦岭违建别墅整治始末 一抓到底正风纪'

                }, {
                    num: '20181029000030',
                    title: '唱响新时代的英雄赞歌'

                }, {
                    num: '20181029000032',
                    title: '商务部：中美在京举行经贸问题副部级磋商'
                }]
            },
            draft: [],
            currentPage: 1,
            searchForm: {
                dateValue: '',
                keywords: '',
                checkAll: false,
                media: '',
                checkedTypes: ['文本', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文本', '图片', '图表', '视频', '音频', '应用'],
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 46,
                            label: '头版',
                            icon: 'iconfont icon-file-b- ft-ffd658',
                            children: [
                                {
                                    id: 469,
                                    label: '头版1-1'
                                },
                                {
                                    id: 4697,
                                    label: '头版1-2'
                                }
                            ]
                        },
                        {
                            id: 12,
                            label: '国内新闻',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 1222,
                            label: '脱贫攻坚',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '新闻焦点',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 15,
                            label: '图片',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 16,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 17,
                            label: '新闻纵深',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 18,
                            label: '世界报道',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 20,
                            label: '原创',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: 'A叠【版面】',
                    children: [
                        {
                            id: 5,
                            label: '一版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 6,
                            label: '二版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 7,
                            label: '三版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 8,
                            label: '四版',
                            icon: 'iconfont icon-file1'
                        }
                    ]
                }

            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData3: [{
                date: '2018-10-30',
                title: '（新华每日电讯）千年古镇里走中药种植路 百折不挠尝！',
                address: '脱贫攻坚',
                number: 3578,
                state: '已审',
                deliverer: '方立新',
                processingTime: '2018-10-30 14:23',
                dealingPeople: '强晓玲',
                firstAuthor: '关俏俏',
                medio: '新华每日电讯',
                preData: ''
            }, {
                date: '2018-10-29',
                title: '（脱贫攻坚）羊信发“羊财”',
                address: '脱贫攻坚',
                number: 768,
                state: '待审',
                deliverer: '方立新',
                processingTime: '2018-10-29 17:18',
                dealingPeople: '刘学奎',
                firstAuthor: '徐海波',
                medio: '新华每日电讯',
                preData: ''
            }, {
                date: '2018-10-20',
                title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                address: '脱贫攻坚',
                number: 1024,
                state: '待审',
                deliverer: '刘学奎',
                processingTime: '2018-10-29 10:45',
                dealingPeople: '方立新',
                firstAuthor: '李浩',
                medio: '新华每日电讯',
                preData: ''
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
        getTreeObj (data) { // 获得树形菜单的对象
            console.log('获得自组件的点击的节点对象', data)
        },
        getFormData (data) { // 搜索表单的选项
            console.log('获得自组件的搜索框数据', data)
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
    },
    computed: {
    }
}
</script>
