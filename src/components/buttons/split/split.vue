<template>
    <div class="primary-btn">
        <span @click="sendSplitIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 拆分按钮 -->
        <split-message-box ref="splitBox"
                           @sendSplitData="sendSplitData"
                           :splitData="splitData"></split-message-box>
    </div>

</template>

<script>
import splitMessageBox from '@/components/buttons/split/box/splitMessageBox'
export default {
    components: {
        splitMessageBox
    },
    props: {
        splitData: {
            type: Object
        }
    },
    data () {
        return {

        }
    },
    methods: {
        sendSplitData (concatData) {
            this.$emit('sendSplitData', concatData)
            this.$refs.splitBox.contentShow = false
            this.$refs.splitBox.tableData.length = 0
            this.$refs.splitBox.newContent = ''
        },
        sendSplitIcon () {
            if (this.splitData.tableData.length !== 1) {
                this.$message({
                    message: '只能选择一条数据',
                    type: 'warning'
                })
                return
            }
            this.$refs.splitBox.contentShow = true
        }
    }
}
</script>
<style>
</style>
