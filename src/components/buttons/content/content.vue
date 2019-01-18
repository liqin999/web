<template>
    <div class="primary-btn">
        <span @click="contentIcon()">
            <slot name="iconName"></slot>
        </span>
        <content-message-box ref="contentBox" :contentData="contentData"></content-message-box>
    </div>
</template>
<script>
import contentMessageBox from './box/contentMessageBox'
export default {
    components: {
        contentMessageBox
    },
    props: {

    },
    data () {
        return {
            contentData: {
                contentList: [
                    {
                        number: '12332123456',
                        title: '西虹市首富',
                        size: '329084字',
                        data: '',
                        history: ''
                    }
                ],
                contentShow: false,
                name: '强晓玲'
            }
        }
    },
    methods: {
        // 点击选送按钮
        contentIcon () {
            this.contentData.contentShow = true
        }
    }

}
</script>
