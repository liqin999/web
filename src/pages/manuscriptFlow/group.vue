<template>
    <el-container class="person-container">

        <el-aside width="250px">
            <left-menu :treeData="data2"
                       :defaultProps="defaultProps"
                       @sendTreeObj="getTreeObj"></left-menu>
        </el-aside>
        <el-container>
            <el-main ref="mainTable">
                <el-table ref="multipleTable"
                          :height="mainTableHeight"
                          :data="tableData3"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange">
                    <el-table-column prop="id"
                                     label="稿号"
                                     width="150">
                    </el-table-column>
                    <el-table-column prop="title"
                                     show-overflow-tooltip
                                     label="标题"
                                     width="180">
                    </el-table-column>
                    <el-table-column prop="media"
                                     label="媒体"
                                     width="120">
                    </el-table-column>

                    <el-table-column prop="type"
                                     label="类型">
                    </el-table-column>
                    <el-table-column prop="location"
                                     label="位置"
                                     width="100">
                    </el-table-column>
                    <el-table-column prop="status"
                                     label="状态">
                    </el-table-column>
                    <el-table-column prop="author"
                                     label="作者">
                    </el-table-column>
                    <el-table-column prop="processingTime"
                                     label="处理时间"
                                     width="100">
                    </el-table-column>
                    <el-table-column prop="handlePeople"
                                     label="最近处理人">
                    </el-table-column>
                    <el-table-column prop="type2"
                                     label="类型">
                    </el-table-column>
                    <el-table-column prop="repDrawing"
                                     header-align="center"
                                     align="center"
                                     width="130px"
                                     label="代表图">
                        <template slot-scope="scope">
                            <el-popover placement="right"
                                        title=""
                                        trigger="hover">
                                <img v-bind:src="scope.row.picture"
                                     style="max-height: 300px;max-width: 1000px">
                                <img slot="reference"
                                     :src="scope.row.picture"
                                     :alt="scope.row.picture"
                                     style="max-height: 30px;max-width: 120px">
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer height="70">
                <el-pagination @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               class="ac"
                               :current-page="currentPage"
                               :page-size="20"
                               layout="total, prev, pager, next"
                               :total="2">
                </el-pagination>
                <div class="btn-bottom">
                    <div class="btn-nav">
                        <span>追回</span>
                    </div>
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
</template>
<script>

import leftMenu from '@/components/treeMenu/leftTree.vue'
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        leftMenu,
        history
    },
    data () {
        return {
            currentPage: 1,
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 1,
                            label: '电讯领导',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 2,
                            label: '第一编辑中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 3,
                            label: '第二编辑中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '总编室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 5,
                            label: '副刊部（草地周刊）',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 6,
                            label: '文摘室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 7,
                            label: '评论部',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 8,
                            label: '办公室',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 9,
                            label: '副刊部（新华视界）',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 10,
                            label: '创意策划中心',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: '每日电讯微博',
                    children: [
                        {
                            id: 1,
                            label: '网络部',
                            icon: 'iconfont icon-file1'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '公共部门',
                    children: [
                        {
                            id: 1,
                            label: '网络部',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }
                    ]
                }

            ],

            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData3: [{
                id: '20181029000029',
                title: '（脱贫攻坚）羊信发“羊财”',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-三版',
                status: '待审',
                author: '徐海波',
                processingTime: '10-29 17:18',
                handlePeople: '刘学奎',
                type2: '图片',
                picture: 'https://inews.gtimg.com/newsapp_bt/0/4836031414/1000'
            }, {
                id: '20181029000029',
                title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                picture: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1210290735,1132136499&fm=11&gp=0.jpg',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-四版',
                status: '已审',
                author: '李浩',
                processingTime: '10-28 10:45',
                handlePeople: '赵倩',
                type2: '图片'
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
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleSizeChange (val) {

        },
        handleCurrentChange (val) {

        }
    }
}
</script>
<style lang="scss" scoped>
</style>
