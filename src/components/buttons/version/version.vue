<template>
    <div class="primary-btn">
        <span @click="sendVersionIcon">
            <slot name="iconName"></slot>
        </span>
        <!-- 版本按钮 -->
        <version-message-box ref="versionBox"
                             :versionData="versionData"></version-message-box>
    </div>
</template>
<script>
import versionMessageBox from '@/components/buttons/version/box/versionMessageBox'
export default {
    components: {
        versionMessageBox
    },
    // props: {
    //     data: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data () {
        return {
            versionData: {
                contentShow: false,
                tableData: [{
                    num: 3,
                    title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                    date: '2018-10-31 11:23:24',
                    dealPerson: '强晓玲',
                    img: 'https://inews.gtimg.com/newsapp_bt/0/4836031414/1000',
                    type: '图片',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 2,
                    title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                    date: '2018-10-31 09:20:12',
                    dealPerson: '方立新',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 1,
                    title: '（脱贫攻坚）“80后”移民夫妻“百元计划”筹谋新生活',
                    date: '2018-10-30 15:29:30',
                    dealPerson: '方立新',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }]
            }
        }
    },
    methods: {
        sendVersionIcon () {
            this.versionData.contentShow = true
        }
    }
}
</script>
