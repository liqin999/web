<template>
    <div>
       <div class="serchBar">
           处理时间
           关键字
           类型
           全选
           文本
           图片
           图表
           视频
           音频
           应用
       </div>
       <div class="leftCon">
           <left-menu :treeData="data2" :defaultProps="defaultProps" @sendTreeObj="getTreeObj"></left-menu>
       </div>
       <div class="rightCon">

       </div>
    </div>
</template>
<script>
import leftMenu from "@/components/treeMenu/leftTree.vue";
export default {
    components: {
        leftMenu
    },
    data(){
        return{
              data2: [
                    {
                    id: 1,
                    label: '一级 1',
                    children: [
                            {
                            id: 4,
                            label: '二级 1-1',
                            children: [{
                                        id: 9,
                                        label: '三级 1-1-1'
                                    }, {
                                        id: 10,
                                        label: '三级 1-1-2'
                                    }]
                            }
                          ]
                    },
                     {
                        id: 2,
                        label: '一级 2',
                        children: [{
                            id: 5,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            label: '二级 2-2'
                        }]
                        },
                   {
                    id: 3,
                    label: '一级 3',
                        children: [{
                            id: 7,
                            label: '二级 3-1'
                        }, {
                            id: 8,
                            label: '二级 3-2'
                        }]
                    }
                 ],
                 defaultProps: {
                    children: 'children',
                    label: 'label'
                 }


        }
    },
    mounted(){

    },
    methods:{
        getTreeObj(data){//获得树形菜单的对象
            console.log("获得自组件的点击的节点对象",data)
        }
    }
}
</script>
<style lang="scss" scoped>
    .serchBar{

    }
    .leftCon{
        width: 270px;
    }
    .rightCon{

    }
</style>
<style>

</style>



