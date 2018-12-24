<template>
    <div class="primary-btn">
        <span @click="sendVersionIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 版本按钮 -->
        <version-message-box ref="versionBox"
                             :versionData="data"></version-message-box>
    </div>
</template>
<script>
import versionMessageBox from '@/components/buttons/version/box/versionMessageBox'
export default {
    components: {
        versionMessageBox
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {

        }
    },
    methods: {
        sendVersionIcon () {
            this.data.contentShow = true
        }
    }
}
</script>
