<template>
<div :style="'width:'+tagWidth" id="tag">
    <el-tag :key="item.name" v-for="(item,index) in dynamicTags" :type="item.type" v-if="index!=chooseIndex" closable :disable-transitions="false" @dblclick.native="chooseTag(index)" @close="handleClose(index)">
        {{item.name}}
    </el-tag>

    <el-input class="input-new-tag" v-else v-model="item.name" ref="editTagInput" @keyup.enter.native="saveTag" @blur="saveTag" size="small">
    </el-input>

    <input class="input-new-tag"  style="height:32px" v-model="inputValue"  ref="saveTagInput" size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm">
    </input>
</div>
</template>

<script>
export default {
    data() {
        return {
            dynamicTags: [
                // {
                //     name: '标签一',
                //     type: ''
                // },
                // {
                //     name: '标签二',
                //     type: 'success'
                // },
                // {
                //     name: '标签三',
                //     type: 'info'
                // },
                // {
                //     name: '标签四',
                //     type: 'warning'
                // },
                // {
                //     name: '标签五',
                //     type: 'danger'
                // }
            ], //标签数组
            inputValue: '', // 新增标签内容绑定值
            chooseIndex: -1 // 选中修改标签位置
        };
    },
    props: {
        tagWidth: {
            type: String,
            default: '220px'
        },
    },
    methods: {
        // 返回标签数据
        getTags() {
            return this.dynamicTags;
        },
        // 选择要修改的标签
        chooseTag(index) {
            this.chooseIndex = index;
            this.$nextTick(_ => {
                this.$refs.editTagInput.$refs.input.focus();
            });
        },
        // 双击修改
        saveTag(index) {
            this.chooseIndex = -1;
        },
        handleClose(index) {
            this.dynamicTags.splice(index, 1);
        },
        // 添加内容
        handleInputConfirm() {
            if (this.inputValue.trim() != '' && this.inputValue != null) {
                let inputValue = {
                    name: this.inputValue,
                    type: 'info'
                }
                this.dynamicTags.push(inputValue);
                this.inputValue = '';
            }
        }
    }
}
</script>

<style>
#tag {
    border: 1px solid #9e9e9e;
    margin: 10px;
    /* border: 1px solid transparent; */
}

.el-tag {
    /* margin-left: 10px; */
    margin: 5px;
    cursor: pointer;

}

.input-new-tag {
    border: none;
    outline: medium;
    width: 90px;
    margin-left: 5px;
    margin: 5px;
    vertical-align: bottom;
}
</style>
