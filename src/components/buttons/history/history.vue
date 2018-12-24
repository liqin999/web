<template>
    <div class="btn-hover">
        <span @click="historyIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 弹框 -->
        <history-message-box ref="historyBox"
                             :historyData="historyData">
        </history-message-box>
    </div>
</template>
<script>
// 弹出框
import historyMessageBox from './box/historyMessageBox'
export default {
    components: {
        historyMessageBox
    },
    data () {
        return {
            historyData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        historyIcon () {
            // 判断draft是数组还是对象（若为数组则是批量操作）
            // if (this.draft instanceof Array){
            //     this.draftData.draftList = this.draft;
            // } else {
            //     this.draftData.draftList.push(this.draft);
            // }
            // 弹窗出现
            this.historyData.contentShow = true
        }
    }
}
</script>
<style lang="scss" scoped>
.btn-hover {
    cursor: pointer;
}
</style>
