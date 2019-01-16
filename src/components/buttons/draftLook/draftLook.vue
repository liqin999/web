<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="draftLabelIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 浏览弹框 -->
        <look-message-box ref="labelBox"
                           :lookData="lookData">
        </look-message-box>
    </div>
</template>

<script>
// 弹出框
import lookMessageBox from './box/lookMessageBox'
export default {
    components: {
        lookMessageBox
    },
    data () {
        return {
            lookData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击浏览按钮
        draftLabelIcon () {
            // 弹窗出现
            this.lookData.contentShow = true
        }
    }
}
</script>
