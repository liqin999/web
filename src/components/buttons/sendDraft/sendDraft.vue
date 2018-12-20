<template>
    <div class="primary-btn">
        <span @click="sendDraftIcon()">
            <slot name="iconName"></slot>
        </span>
        <!-- 传稿弹框 -->
        <draft-message-box
            ref="draftBox"
            :draftData="draftData">
        </draft-message-box>
    </div>
</template>

<script>
// 弹出框
import draftMessageBox from "./box/draftMessageBox"
export default {
    components: {
        draftMessageBox
    },
    props: {
        draft: {
            type: [Object, Array],
            default: [
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                },
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                },
                {
                    title: '23728784374374372983982378478refergege',
                    name: '西虹市首富',
                    size: '329084字'
                }
            ]
        }
    },
    data (){
        return {
            draftData: {
                draftList: [],
                contentShow: false
            }
        }
    },
    methods: {
        // 点击传稿按钮
        sendDraftIcon(){
            // 判断draft是数组还是对象（若为数组则是批量操作）
            if (this.draft instanceof Array){
                this.draftData.draftList = this.draft;
            } else {
                this.draftData.draftList.push(this.draft);
            }
            // 弹窗出现
            this.draftData.contentShow = true;
        }
    }
}
</script>

<style lang="scss">
// 设置全局变量
$primary-color: rgba(0, 152, 210, 1) rgba(11, 169, 239, 1);    //系统色调 默认、hover状态 
$font-color:#333 !default;   //字体颜色（默认）
$white-color: #fff;          //白色
$font-size:14px 16px;      //字体大小
$border-color:#737373 !default;   //边框颜色（默认）
$border-radius: 3px;                //边角弧度
$line-height:30px !default;       //行高（默认）
$pointer: pointer;             //hover状态 鼠标pointer

.primary-btn{
    background: nth($primary-color,1);
    border-radius: $border-radius;
    border-color: nth($primary-color,1);
    cursor: $pointer;
    color: $white-color;
    font-size: nth($font-size,1);
    display: inline-block;
    margin-right: 5px;
    padding: 8px 15px;

    //hover状态
    &:hover{
        background: nth($primary-color,2);
        border-color: nth($primary-color,2);
        color: $white-color;
    }
}
// 取消按钮样式
.reset-btn{
    background: $white-color;
    border-radius: $border-radius;
    border-color: nth($primary-color,1);
    cursor: $pointer;
    color: nth($primary-color,1);

    display: inline-block;
    margin-right: 5px;
    padding: 8px 15px;

    //hover状态
    &:hover{
        border-color: nth($primary-color,2);
        color: nth($primary-color,2);
    }
}
</style>

