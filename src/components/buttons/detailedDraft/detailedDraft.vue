<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="detailedDraftIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <draft-message-box ref="draftBox"
                           :draftData="draftData">
        </draft-message-box>
    </div>
</template>

<script>
// 弹出框
import draftMessageBox from './box/draftMessageBox'
export default {
    components: {
        draftMessageBox
    },
    props: {
        detailedDraftData: {
            type: Array
        }
    },
    data () {
        return {
            draftData: {
                draftList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        detailedDraftIcon () {
            // 判断draft是数组还是对象（若为数组则是批量操作）
            // if (this.draft instanceof Array){
            //     this.draftData.draftList = this.draft;
            // } else {
            //     this.draftData.draftList.push(this.draft);
            // }
            // 弹窗出现
            this.draftData.contentShow = true
        }
    }
}
</script>
