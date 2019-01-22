<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="draftLabelIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 浏览弹框 -->
        <translate-message-box ref="labelBox"
                           :translateData="translateData">
        </translate-message-box>
    </div>
</template>

<script>
// 弹出框
import translateMessageBox from './box/translateMessageBox'
export default {
    components: {
        translateMessageBox
    },
    data () {
        return {
            translateData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击浏览按钮
        draftLabelIcon () {
            // 弹窗出现
            this.translateData.contentShow = true
        }
    }
}
</script>
