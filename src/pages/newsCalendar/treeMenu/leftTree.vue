<template>

    <div class="tree-wrap">
        <el-date-picker  class="tree-search"
            v-model="monthText"
            value-format="yyyy-MM"
            type="month"
            placeholder="选择月">
        </el-date-picker>

        <el-tree :highlight-current="true"
                 class="filter-tree"
                 :indent=5
                 :data="treeData"
                 node-key="id"
                 :props="defaultProps"
                 :default-expanded-keys="expandedKeys"
                 :filter-node-method="filterNode"
                 @node-click="handleNodeClick"
                 ref="tree2">
            <span class="custom-tree-node"
                  slot-scope="{ node, data }">
                <span>
                    <i :class="node.icon"
                       :dataV="data"></i>{{monthText}}-{{ node.label }}
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
            monthText: '2018-11',
            expandedKeys: []

        }
    },
    mounted () {
        // 左侧默认高亮
        if (this.treeData[0].children) {
            this.expandedKeys.push(this.treeData[0].children[0])
        }
        this.$nextTick(() => {
            if (this.treeData[0].children && this.treeData[0].children.length > 0) {
                if (this.treeData[0].children[0].children && this.treeData[0].children[0].children.length > 0) {
                    this.$refs.tree2.setCurrentKey(this.treeData[0].children[0].children[0].id)
                } else {
                    this.$refs.tree2.setCurrentKey(this.treeData[0].children[0].id)
                }
            } else {
                this.$refs.tree2.setCurrentKey(this.treeData[0].id)
            }
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
        margin-top: 15px;
        padding: 1px;
        background-color: nth($bg-color, 1);
        .custom-tree-node i {
            margin-right: 5px;
        }
        .el-tree-node__content {
            height: $line-height;
            &:hover {
                color: nth($primary-color, 1);
                background-color: $wcolor;
            }
            & > .el-tree-node__expand-icon {
                padding: 10px;
            }
        }
    }
}
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    color: nth($primary-color, 1);
    background-color: $wcolor;
    border-left: 4px solid nth($primary-color, 1);
}
</style>
