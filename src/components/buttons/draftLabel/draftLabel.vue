<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="draftLabelIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <label-message-box ref="labelBox"
                           :labelData="labelData">
        </label-message-box>
    </div>
</template>

<script>
// 弹出框
import labelMessageBox from './box/labelMessageBox'
export default {
    components: {
        labelMessageBox
    },
    data () {
        return {
            labelData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        draftLabelIcon () {
            // 判断draft是数组还是对象（若为数组则是批量操作）
            // if (this.draft instanceof Array){
            //     this.draftData.draftList = this.draft;
            // } else {
            //     this.draftData.draftList.push(this.draft);
            // }
            // 弹窗出现
            this.labelData.contentShow = true
        }
    }
}
</script>
