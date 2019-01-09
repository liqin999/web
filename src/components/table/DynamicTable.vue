<template>
    <div>
        <el-table size="mini"
                  :data="tableData"
                  border
                  :height="height">
            <el-table-column align="center"
                             prop="unit_name"
                             label="客户名称"
                             width="100">
                <template slot-scope="scope">
                    <a v-if="scope.row.isLeaf !== 'true'"
                       @click="goDown(scope)"
                       href="jacascript::void(0)">{{ scope.row.unit_name }}</a>
                    <span v-if="scope.row.isLeaf=='true'"
                          style="margin-left: 10px">{{ scope.row.unit_name}}</span>
                </template>
            </el-table-column>
            <template v-for="item in tableHeader">
                <table-column v-if="item.children && item.children.length"
                              :key="item.id"
                              :coloumn-header="item"></table-column>
                <el-table-column v-else
                                 :key="item.id"
                                 :label="item.label"
                                 :prop="item.prop"
                                 align="center"></el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
import TableColumn from './TableColumn'
export default {
    props: {
        // 表格的数据
        tableData: {
            type: Array,
            required: true
        },
        // 多级表头的数据
        tableHeader: {
            type: Array,
            required: true
        },
        // 表格的高度
        height: {
            type: String,
            default: '300'
        }
    },
    mounted: function () {
        console.log('tableHeader', this.tableHeader)
    },
    components: {
        TableColumn
    }
}
</script>

<style scoped>
body .el-table th.gutter {
    display: table-cell !important;
}
</style>
