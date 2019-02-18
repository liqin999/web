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
                                     width="160">
                    </el-table-column>
                    <el-table-column prop="title"
                                     show-overflow-tooltip
                                     width="160"
                                     label="标题">
                    </el-table-column>
                    <el-table-column prop="media"
                                     label="媒体"
                                     width="120">
                    </el-table-column>

                    <el-table-column prop="type"
                                     label="类型">
                    </el-table-column>
                    <el-table-column prop="location"
                                     width="100"
                                     label="位置">
                    </el-table-column>
                    <el-table-column prop="status"
                                     label="状态">
                    </el-table-column>
                    <el-table-column prop="author"
                                     label="作者">
                    </el-table-column>
                    <el-table-column prop="processingTime"
                                     width="160"
                                     label="处理时间">
                    </el-table-column>
                    <el-table-column prop="handlePeople"
                                     label="最近处理人">
                    </el-table-column>
                    <el-table-column prop="type2"
                                     label="类型">
                    </el-table-column>
                    <el-table-column prop="picture"
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
                            id: 4,
                            label: 'A叠',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: '每日电讯微博',
                    children: [
                        {
                            id: 5,
                            label: 'A',
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
                id: '20181029000025',
                title: '（新华每日电讯）千年古镇里走中药种植路 百折不挠尝！',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '已审',
                author: '关俏俏',
                picture: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=657448908,3491892813&fm=26&gp=0.jpg',
                processingTime: '2018-12-25 17:18',
                handlePeople: '强晓玲',
                type2: '图片'
            }, {
                id: '20181029000029',
                title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十版',
                status: '待审',
                author: '李浩',
                picture: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1210290735,1132136499&fm=11&gp=0.jpg',
                processingTime: '2019-01-20 10:45',
                handlePeople: '方立新',
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
