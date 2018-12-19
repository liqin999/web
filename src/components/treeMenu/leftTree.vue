<template>
    <div>
       <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
       </el-input>
        <el-tree
            class="filter-tree"
            :data="treeData"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
             @node-click="handleNodeClick"
             ref="tree2">
        </el-tree>
    </div>
</template>
<script>
export default {
    props:{
          treeData: {
            type: Array,
            required: true
          },
          defaultProps:{
            type: Object,
            default: {
                        children: 'children',
                        label: 'label'
                     }
          }

    },
    components: {

    },
    data(){
        return{
             filterText: '',
        }
    },
    mounted(){
        
    },
    methods:{
        filterNode(value, data) {//过滤节点
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleNodeClick(data){//获得点击节点的对象
            this.$emit("sendTreeObj",data)
        }
    },
    watch: {
        filterText(val) {//过滤节点
            this.$refs.tree2.filter(val);
        }
    },

}
</script>
<style lang="scss" scoped>
   
</style>
<style>

</style>



