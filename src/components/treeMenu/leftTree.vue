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
                 :indent=5
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
        },
        showSearch: {
            type: Boolean,
            default: function () {
                return true
            }
        }
    },
    components: {

    },
    data () {
        return {
            filterText: ''
        }
    },
    mounted () {
        // 左侧默认高亮
        this.$nextTick(() => {
            this.$refs.tree2.setCurrentKey(2)
        })
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
</script>
<style  lang="scss">
// 左侧树结构
.tree-wrap {
    @include mar-pad(padding, 25px);
    .tree-search {
        @include mar-pad(padding, 0, 10px, 0, 10px);
        .el-input__suffix {
            right: 10px;
        }
    }
    .el-tree {
        padding-top: 15px;
        background-color: nth($bg-color, 1);
        .custom-tree-node i {
            margin-right: 5px;
        }
        .el-tree-node__content {
            height: $line-height;
            &:hover {
                background-color: $wcolor;
                color: nth($primary-color, 1);
            }
            & > .el-tree-node__expand-icon {
                padding: 10px;
            }
        }
    }
}
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: $wcolor;
    color: nth($primary-color, 1);
    border-left: 4px solid nth($primary-color, 1);
}
</style>
