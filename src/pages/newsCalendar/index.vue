<template>
    <el-container class="newsCalender">
        <!-- 左侧菜单 -->
        <el-aside width="250px">
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </el-aside>
        <el-container>
            <el-header height="40px">
                <div class="main-header-group">
                    <!-- 引入按钮组的插件 -->
                    <create-draft>
                        <span slot="iconName">建稿</span>
                    </create-draft>

                    <div data-v-6eb3df45=""
                         class="primary-btn"><span>
                            <span data-v-6eb3df45="">刷新</span>
                        </span>
                    </div>

                </div>
            </el-header>
            <el-header height="55px">
                <el-tabs v-model="activeTreeName1"
                         :stretch="true"
                         @tab-click="switchTreeMemu1">
                    <el-tab-pane label="全部(12888)"
                                 name="all">
                    </el-tab-pane>
                    <el-tab-pane label="事件"
                                 name="event">
                    </el-tab-pane>
                    <el-tab-pane label="纪念"
                                 name="mark">
                    </el-tab-pane>
                    <el-tab-pane label="生日"
                                 name="birthday">
                    </el-tab-pane>
                    <el-tab-pane label="逝世"
                                 name="die">
                    </el-tab-pane>
                    <el-tab-pane label="节假日"
                                 name="vacation">
                    </el-tab-pane>
                    <el-tab-pane label="其他"
                                 name="other">
                    </el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main ref="mainTable">
                <el-table ref="multipleTable"
                          :data="tableData3"
                          @row-click="tabclick"
                          :height="mainTableHeight"
                          tooltip-effect="dark"
                          @selection-change="handleSelectionChange">
                    <el-table-column type="selection">
                    </el-table-column>
                    <el-table-column prop="year"
                                     label="年份">
                    </el-table-column>
                    <el-table-column label="标题"
                                     width="600"
                                     show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.a }}</template>
                    </el-table-column>
                    <el-table-column prop="b"
                                     label="字数">
                    </el-table-column>
                    <el-table-column prop="c"
                                     label="作者"
                                     show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="d"
                                     label="创建时间"
                                     show-overflow-tooltip>
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
            </el-footer>
        </el-container>
    </el-container>

</template>
<script>
// 建稿按钮组件
import createDraft from '@/components/buttons/createDraft/createDraft'
import leftMenu from '@/pages/newsCalendar/treeMenu/leftTree.vue'

export default {
    components: {
        leftMenu,
        createDraft

    },
    data () {
        return {
            activeTreeName: 'first',
            activeTreeName1: 'first1',
            draft: [],
            currentPage: 0,
            data2: [
                {
                    id: 1,
                    label: '01'
                },
                {
                    id: 2,
                    label: '02'
                },
                {
                    id: 3,
                    label: '03'
                },
                {
                    id: 4,
                    label: '04'
                },
                {
                    id: 5,
                    label: '05'
                },
                {
                    id: 6,
                    label: '06'
                },
                {
                    id: 7,
                    label: '07'
                },
                {
                    id: 8,
                    label: '08'
                },
                {
                    id: 9,
                    label: '09'
                },
                {
                    id: 10,
                    label: '10'
                },
                {
                    id: 11,
                    label: '11'
                },
                {
                    id: 12,
                    label: '12'
                },
                {
                    id: 13,
                    label: '13'
                },
                {
                    id: 14,
                    label: '14'
                },
                {
                    id: 15,
                    label: '15'
                },
                {
                    id: 16,
                    label: '16'
                },
                {
                    id: 17,
                    label: '17'
                },
                {
                    id: 18,
                    label: '18'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData3: [{
                year: '2018',
                a: '新疆和田：黑山村的致富路',
                b: '1200',
                c: '辛未悦',
                d: '2018-10-05'
            },
            {
                year: '2009',
                a: '淘宝开始举办双十一促销活动',
                b: '3578',
                c: '辛未悦',
                d: '2005-10-09'
            },
            {
                year: '2001',
                a: '我国正式加入世界贸易组织',
                b: '768',
                c: '孙鑫',
                d: '2005-10-09'
            }

            ],
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
        tabclick () {
            this.$router.push({ path: '/details' })
        },
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
        },
        switchTreeMemu () {
        },
        switchTreeMemu1 () {
        }
    },
    computed: {
    }
}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
.newsCalender .el-input__prefix {
    left: 10px;
}
.el-tabs__header {
    margin: 0px 10px 15px 10px;
}
</style>
