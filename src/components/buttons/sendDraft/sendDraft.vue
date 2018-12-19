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
        draft: {
            type: [Object, Array],
            default: [
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                },
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                },
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                }
            ]
        }
    },
    data (){
        return {
            draftData: {
                draftList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        sendDraftIcon(){
            // 判断draft是数组还是对象（若为数组则是批量操作）
            if (this.draft instanceof Array){
                this.draftData.draftList = this.draft;
            } else {
                this.draftData.draftList.push(this.draft);
            }
            // 弹窗出现
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

