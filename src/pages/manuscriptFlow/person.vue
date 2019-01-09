<template>
    <el-container class="person-container">
        <el-header height="40px">
            <el-row :gutter="20"
                    class="clearfix">
                <el-col>
                    <el-checkbox label="A"
                                 class="che">
                        包含我处理过的稿件
                    </el-checkbox>
                    <el-checkbox label="B"
                                 class="che">
                        处理方式
                    </el-checkbox>
                    <el-select v-model="value"
                               class="inline-block ml10"
                               placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main-padding"
                 ref="mainTable">
            <template>
                <el-table :data="tableData"
                          style="width: 100%;">
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
            </template>
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
</template>

<script>
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        // searchInput
        history
    },
    data () {
        return {
            currentPage: 1,
            checkList: ['A'],
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            tableData: [{
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
            }, {
                id: '20181029000029',
                title: '一个西红柿的”世界地图“',
                media: '新华每日电讯',
                type: '版面',
                location: 'A叠-十四版',
                status: '待审',
                author: '郝玉',
                processingTime: '10-29 10:31'
            }]
        }
    },
    mounted () {

    },
    methods: {
        handleSizeChange () {

        },
        handleCurrentChange () {

        }
    }
}
</script>
<style lang="scss" scoped>
.person-container {
    .el-header {
        padding: 10px 10px 0px 10px;
    }
    .el-checkbox + .el-checkbox {
        margin: 0px 30px;
    }
}
</style>
