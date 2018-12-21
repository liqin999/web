<template>
<<<<<<< HEAD
    <div class="primary-btn">
=======
    <div class="btn primary-btn">
>>>>>>> 7aeb5b9c2d105d025069c3177bfcd1720d3f5e8f
        <span @click="sendSplitIcon">
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
