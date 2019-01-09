<template>
    <div class="primary-btn">
        <span @click="sendConcatIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 合并按钮 -->
        <concat-message-box ref="concatBox"
                            :concatData="concatData"
                            @sendConcatData="sendConcatData"
                            @sendConcatDataUp="sendConcatDataUp"
                            @sendConcatDataDown="sendConcatDataDown"></concat-message-box>
    </div>

</template>

<script>
import concatMessageBox from '@/components/buttons/concat/box/concatMessageBox'
export default {
    components: {
        concatMessageBox
    },
    props: {
        concatData: {
            type: Object
        }
    },
    data () {
        return {

        }
    },
    methods: {
        sendConcatIcon () {
            this.$refs.concatBox.contentShow = true
            console.log(this.concatData)
        },
        sendConcatData (concatData) {
            this.$refs.concatBox.contentShow = false
            this.$emit('sendConcatData', concatData)
        },
        sendConcatDataUp (concatData) {
            this.$emit('sendConcatDataUp', concatData)
        },
        sendConcatDataDown (concatData) {
            this.$emit('sendConcatDataDown', concatData)
        }
    }
}
</script>
