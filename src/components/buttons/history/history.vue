<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
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
        // 点击历史按钮
        historyIcon () {
            // 弹窗出现
            this.historyData.contentShow = true
        }
    }
}
</script>
