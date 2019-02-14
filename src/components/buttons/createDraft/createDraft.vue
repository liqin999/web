<template>
    <div class="primary-btn">
        <span @click="sendDraftIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <create-message-box ref="draftBox"
                            :createData="createData">
        </create-message-box>
    </div>
</template>

<script>
// 弹出框
import createMessageBox from './box/createMessageBox'
export default {
    components: {
        createMessageBox
    },
    data () {
        return {
            createData: {
                contentShow: false
            }
        }
    },
    methods: {
        // 点击建稿按钮
        sendDraftIcon () {
            this.createData.contentShow = true
        }
    }
}
</script>
<style lang="scss" scoped>
.inline-block {
    display: inline-block;
}
</style>
