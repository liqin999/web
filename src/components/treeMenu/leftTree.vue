<template>
    <div class="tree-wrap">
        <el-input class="tree-search"
                  v-if="showSearch"
                  placeholder="输入关键字进行过滤"
                  v-model="filterText">
            <i slot="suffix"
               class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-tree :highlight-current="true"
                 class="filter-tree"
                 :data="treeData"
                 :props="defaultProps"
                 default-expand-all
                 :filter-node-method="filterNode"
                 @node-click="handleNodeClick"
                 ref="tree2">
            <span class="custom-tree-node"
                  slot-scope="{ node, data }">
                <span>
                    <i :class="node.icon"
                       :dataV="data"></i>{{ node.label }}
                </span>
            </span>
        </el-tree>
    </div>
</template>
<script>
export default {
    props: {
        treeData: {
            type: Array,
            required: true
        },
        defaultProps: {
            type: Object,
            default: function () {
                return {
                    children: 'children',
                    label: 'label'
                }
            }

        }
    },
    components: {

    },
    showSearch: {
        type: Boolean,
        default: function () {
            return true
        }
    },
    defaultProps: {
        type: Object,
        default: function () {
            return {
                filterText: ''
            }
        },
        mounted () {

        },
        methods: {
            filterNode (value, data) { // 过滤节点
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
            handleNodeClick (data) { // 获得点击节点的对象
                this.$emit('sendTreeObj', data)
            }
        },
        watch: {
            filterText (val) { // 过滤节点
                this.$refs.tree2.filter(val)
            }
        }

    }
}
</script>
<style lang="scss" scoped>
</style>
<style  lang="scss">
.tree-wrap {
    padding: 10px;
    .filter-tree {
        margin-top: 7px;
    }
}
.tree-search {
    margin-top: 10px;
    .el-input__inner {
        border-radius: 50px;
        height: 33px;
        line-height: 33px;
        width: 193px;
    }
}

.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: #0ba9ef !important;
    color: #fff !important;
}
.ft-ffd658 {
    color: #ffd658;
}
.custom-tree-node {
    .iconfont {
        margin-right: 5px;
    }
}
</style>
