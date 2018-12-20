<template>
    <div style="margin-top:100px;">
       <send-draft :draft="draft">
           <span slot="iconName">传稿</span>
       </send-draft>
       <issuance>
           <span slot="iconName">签发</span>
       </issuance>

        <split>
           <span slot="iconName">拆分</span>
       </split>

       <concat :data="concatData" 
        @sendConcatData = "getConcatData"
        @sendConcatDataUp = "getConcatDataUp"
        @sendConcatDataDown = "getConcatDataDown"
        >
           <span slot="iconName">合并</span>
       </concat>

         <div class="serchBar">
           <search-input :searchForm="searchForm" :allTypes = "allTypes" @sendFormData="getFormData">
               <el-form-item label="媒体:" slot="media">
                    <el-select v-model="searchForm.media" class="w100"  size="small"  placeholder="请选择媒体">
                        <el-option label="媒体一" value="shanghai"></el-option>
                        <el-option label="媒体二" value="beijing"></el-option>
                    </el-select>
               </el-form-item>
           </search-input>
       </div>
       <div class="leftCon">
           <left-menu :treeData="data2" :defaultProps="defaultProps" @sendTreeObj="getTreeObj"></left-menu>
       </div>
       <div class="rightCon">

       </div>

    </div>
</template>
<script>
import sendDraft from "@/components/buttons/sendDraft/sendDraft"
import issuance from "@/components/buttons/issuance/issuance"
import split from "@/components/buttons/split/split"
import concat from "@/components/buttons/concat/concat"
import leftMenu from "@/components/treeMenu/leftTree.vue";
import searchInput from "@/components/searchConditions/searchInput.vue";
export default {
    components: {
        leftMenu,
        searchInput,
        sendDraft,
        issuance,
        split,
        concat
    },
    data(){
        return{
            // 传稿参数
            draft: [
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                }
            ],
            concatData:{
                    contentShow:false,
                    tableData: [{
                        num: '2',
                        title: '王小虎',
                    
                    }, {
                        num: '3',
                        title: '王小虎',
                    
                    }]
            },
             searchForm: {
                dateValue: '',
                keywords: '',
                checkAll: false,
                media:'',
                checkedTypes: ['文本', '图片'],
                isIndeterminate:true
             },
             allTypes: ['文本', '图片','图表','视频','音频','应用'],

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
        },
        getFormData(data){//搜索表单的选项
             console.log("获得自组件的搜索框数据",data)
        },
        getConcatData(data){//获得合并的元素的参数信息
            console.log("获得子组件的合并的元素数据",data)
        },
        getConcatDataUp(data){//获得合并弹框的上移操作
             console.log("获得合并子组件弹框的上移操作元素数据",data)
        },
        getConcatDataDown(data){//获得合并弹框的下移操作
              console.log("获得合并子组件弹框的下移操作元素数据",data)
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
<style>
     .w100{
        width: 100px;
    }
</style>



