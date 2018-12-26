<template>
    <div style="margin:0 20px">
        <div class="search-list">
            <el-checkbox-group v-model="checkList"
                               class="inline-block">
                <el-checkbox label="A"
                             class="che">
                    包含我处理过的稿件
                </el-checkbox>
                <el-checkbox label="B"
                             class="che">
                    处理方式
                </el-checkbox>
            </el-checkbox-group>

            <el-select v-model="value"
                       class="inline-block ml10"
                       placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
            </el-select>
        </div>

        <template>
            <el-table :data="tableData"
                      style="width: 100%;">
                <el-table-column prop="date"
                                 label="日期"
                                 width="180">
                </el-table-column>
                <el-table-column prop="name"
                                 label="姓名"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 label="地址">
                </el-table-column>
            </el-table>
        </template>
        <div class="mt15 pagination-box">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           class="ac"
                           :current-page="currentPage"
                           :page-size="20"
                           layout="total, prev, pager, next"
                           :total="100">
            </el-pagination>
        </div>
        <div class="btn-bottom">
            <div class="btn-nav">
                <span>追回</span>
            </div>
            <div class="btn-line">
                <span>|</span>
            </div>
            <history>
                <span slot="iconName">历史</span>
            </history>
            <div class="btn-line">
                <span>|</span>
            </div>
            <div class="btn-nav">
                <span>关闭</span>
            </div>
        </div>

    </div>
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
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    mounted () {

    },
    methods: {}
}
</script>
<style lang="scss" scoped>
.pagination-box {
    position: absolute;
    bottom: 50px;
    width: 100%;
}
.btn-bottom {
    padding: 10px 0;
    position: absolute;
    right: 15px;
    bottom: 0px;
    .btn-line {
        float: left;
        padding: 0px 10px;
    }
    .btn-nav {
        @extend .btn-line;
        cursor: pointer;
        &:hover {
            color: nth($primary-color, 1);
        }
    }
}
.inline-block {
    display: inline-block;
}
.che {
    margin-left: 8px;
}
.ml10 {
    margin-left: 10px;
}
.search-list {
    border-bottom: 1px solid #ddd;
    height: 45px;
    line-height: 45px;
}
</style>
