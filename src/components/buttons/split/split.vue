<template>
<<<<<<< HEAD
    <div class="primary-btn">
=======
    <div class="btn primary-btn">
>>>>>>> b14a38ec8881205d53d49cbb1716aaf5c5b6019a
        <span @click="sendSplitIcon">
            <i class="el-icon-ump-gaojian-zhaiyao"></i>
            <slot name="iconName"></slot>
        </span>
        <!-- 拆分按钮 -->
        <split-message-box ref="splitBox"
        :splitData = "splitData"
        ></split-message-box>
    </div>
   
</template>

<script>
import splitMessageBox from "@/components/buttons/split/box/splitMessageBox"
export default {
    components:{
        splitMessageBox
    },
    props:{

    },
    data(){
        return{
            splitData:{
                    contentShow:false
            }
        }
    },
    methods:{
        sendSplitIcon(){
             this.splitData.contentShow = true;
        }
    }
}
</script>
<style>
</style>
