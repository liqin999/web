<template>
    <div class="primary-btn">
        <span @click="pickIcon()">
            <slot name="iconName"></slot>
        </span>
        <pick-message-box ref="pickBox" :pickData="pickData"></pick-message-box>
    </div>
</template>
<script>
import pickMessageBox from './box/pickMessageBox'
export default {
    components: {
        pickMessageBox
    },
    props: {

    },
    data () {
        return {
            pickData: {
                pickList: [
                    {
                        number: '12332123456',
                        title: '西虹市首富',
                        size: '329084字'
                    }
                ],
                contentShow: false,
                name: '强晓玲'
            }
        }
    },
    methods: {
        // 点击选送按钮
        pickIcon () {
            this.pickData.contentShow = true
        }
    }

}
</script>
