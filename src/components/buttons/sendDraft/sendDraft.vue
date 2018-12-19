<template>
    <div class="btn">
        <span @click="sendDraftIcon()">
            <i class="el-icon-ump-gaojian-zhaiyao"></i>
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <draft-message-box
            ref="draftBox"
            :draftData="draftData"></draft-message-box>
    </div>
</template>

<script>
// 弹出框
import draftMessageBox from "./box/draftMessageBox"
export default {
    components: {
        draftMessageBox
    },
    props: {
        // draft: {
        //     type: [Object, Array]
        // }
    },
    data (){
        return {
            draftData: {
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        sendDraftIcon(){
            this.draftData.contentShow = true;
        }
    }
}
</script>

<style>
.btn span{
    cursor: pointer;
}
</style>

