<template>
    <div class="primary-btn">
        <span @click="sendDraftIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <draft-message-box ref="draftBox"
                           :draftData="draftData"
                           :sendData="sendData">
        </draft-message-box>
    </div>
</template>

<script>
// 弹出框
import draftMessageBox from './box/draftMessageBox'
export default {
    components: {
        draftMessageBox
    },
    props: {
        sendData: {
            type: Boolean,
            // 传稿/撤稿判断，默认为false,则为撤稿
            default: false
        }
        // draft: {
        //     type: [Object, Array],
        //     default: [
        //         {
        //             title: '23728784374374372983982378478refergege',
        //             name: '西虹市首富',
        //             size: '329084字'
        //         },
        //         {
        //             title: '23728784374374372983982378478refergege',
        //             name: '西虹市首富',
        //             size: '329084字'
        //         },
        //         {
        //             title: '23728784374374372983982378478refergege',
        //             name: '西虹市首富',
        //             size: '329084字'
        //         }
        //     ]
        // }
    },
    data () {
        return {
            draftData: {
                draftList: [
                    {
                        title: '23728784374374372983982378478refergege',
                        name: '西虹市首富',
                        size: '329084字'
                    }
                ],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        sendDraftIcon () {
            // 弹窗出现
            this.draftData.contentShow = true
        }
    }
}
</script>
