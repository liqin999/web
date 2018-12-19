<template>
    <div class="btn">
        <span @click="issuanceIcon()">
            <!-- <i class="el-icon-ump-gaojian-zhaiyao"></i> -->
            <slot name="iconName"></slot>
        </span>
        <!-- 签发弹框 -->
        <issuance-message-box
            ref="issuanceBox"
            :issuanceData="issuanceData"></issuance-message-box>
    </div>
</template>

<script>
// 弹出框
import issuanceMessageBox from "./box/issuanceMessageBox"
export default {
    components: {
        issuanceMessageBox
    },
    props: {
        // draft: {
        //     type: [Object, Array]
        // }
    },
    data (){
        return {
            issuanceData: {
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        issuanceIcon(){
            this.issuanceData.contentShow = true;
        }
    }
}
</script>

<style>
.btn span{
    cursor: pointer;
}
</style>

