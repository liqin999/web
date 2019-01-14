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
                                     width="180">
                    </el-table-column>
                    <el-table-column prop="title"
                                     show-overflow-tooltip
                                     label="标题">
                    </el-table-column>
                    <el-table-column prop="media"
                                     label="媒体"
                                     width="180">
                    </el-table-column>

                    <el-table-column prop="type"
                                     label="类型">
                    </el-table-column>
                    <el-table-column prop="location"
                                     label="位置">
                    </el-table-column>
                    <el-table-column prop="status"
                                     label="状态">
                    </el-table-column>
                    <el-table-column prop="author"
                                     label="第一作者">
                    </el-table-column>
                    <el-table-column prop="processingTime"
                                     label="处理时间">
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
                               :total="100">
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
                            id: 48,
                            label: '电讯领导',
                            icon: 'el-icon-success'
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
                            id: 13,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: '每日电讯微博',
                    children: [
                        {
                            id: 8,
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
                            id: 8,
                            label: '技术部',
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
                id: '20181029000029',
                title: '这是一条测试稿件20181031',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '待审',
                author: '郝玉',
                processingTime: '10-29 10:31'
            }, {
                id: '20181029000029',
                title: '一个西红柿的”世界地图“',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '待审',
                author: '郝玉',
                processingTime: '10-29 10:31'
            }, {
                id: '20181029000029',
                title: '一个西红柿的”世界地图“',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '待审',
                author: '郝玉',
                processingTime: '10-29 10:31'
            }, {
                id: '20181029000029',
                title: '一个西红柿的”世界地图“',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '待审',
                author: '郝玉',
                processingTime: '10-29 10:31'
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
