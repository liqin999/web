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
                    num: 1,
                    title: '12',
                    date: '2016-05-03',
                    dealPerson: '1王小虎',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 2,
                    title: '333',
                    date: '2015-05-03',
                    dealPerson: '2王小虎',
                    img: '',
                    type: '文本',
                    doubt: '0',
                    textFormat: 'txt'
                }, {
                    num: 3,
                    title: '8888',
                    date: '2016-05-03',
                    dealPerson: '3王小虎',
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
