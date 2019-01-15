<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="printingIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 弹框 -->
        <print-message-box ref="printBox"
                             :printData="printData">
        </print-message-box>
    </div>
</template>
<script>
// 弹出框
import printMessageBox from './box/printMessageBox'
export default {
    components: {
        printMessageBox
    },
    data () {
        return {
            printData: {
                labelList: [],
                contentShow: false
            }
        }
    },
    methods: {
        printingIcon () {
            this.printData.contentShow = true
        }
    }
}
</script>
