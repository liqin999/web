<template>
    <div class="btn primary-btn">
        <span @click="sendConcatIcon">
            <i class="el-icon-ump-gaojian-zhaiyao"></i>
            <slot name="iconName"></slot>
        </span>
        <!-- 合并按钮 -->
        <concat-message-box ref="splitBox"
        :concatData = "data"
        @sendConcatData = "sendConcatData"
        @sendConcatDataUp = "sendConcatDataUp"
        @sendConcatDataDown = "sendConcatDataDown"
        ></concat-message-box>
    </div>
   
</template>

<script>
import concatMessageBox from "@/components/buttons/concat/box/concatMessageBox"
export default {
    components:{
        concatMessageBox
    },
    props:{
        data:{
            type:Object,
            required: true
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        sendConcatIcon(){
             this.data.contentShow = true;
        },
        sendConcatData(data){
            this.$emit("sendConcatData",data)
        },
         sendConcatDataUp(data){
            this.$emit("sendConcatDataUp",data)
        },
         sendConcatDataDown(data){
            this.$emit("sendConcatDataDown",data)
        }
    }
}
</script>
<style>
.btn span{
    cursor: pointer;
}
</style>
