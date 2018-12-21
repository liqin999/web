<template>
<<<<<<< HEAD
    <div class="primary-btn">
=======
    <div class="btn primary-btn">
>>>>>>> 7aeb5b9c2d105d025069c3177bfcd1720d3f5e8f
        <span @click="sendConcatIcon">
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
</style>
