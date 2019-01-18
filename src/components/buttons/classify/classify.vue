<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="draftLabelIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 浏览弹框 -->
        <classify-message-box ref="labelBox"
                           :classifyData="classifyData">
        </classify-message-box>
    </div>
</template>

<script>
// 弹出框
import classifyMessageBox from './box/classifyMessageBox'
export default {
    components: {
        classifyMessageBox
    },
    data () {
        return {
            classifyData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击浏览按钮
        draftLabelIcon () {
            // 弹窗出现
            this.classifyData.contentShow = true
        }
    }
}
</script>
