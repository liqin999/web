<template>
    <el-dialog class=""
               title="历史"
               @close="messageBoxClose()"
               :visible.sync="historyData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 稿源库历史 -->
            <el-row :gutter="20"
                    class="message-content clearfix">
                <el-col :span="24"
                        class="tab-padding"><b class="message-title">稿源库历史</b></el-col>
                <el-row :gutter="20"
                        class="pb10 label-border">
                    <el-col :span="6">
                        <span>2018-10-31 12:34:56</span>
                    </el-col>
                    <el-col :span="18">
                        <el-col :span="24">
                            <span>由【电讯领导-方立新】投送 到 电讯稿源库</span>
                        </el-col>
                        <el-col :span="24">
                            <span>投送意见：稿库建稿</span>
                        </el-col>
                    </el-col>
                </el-row>
            </el-row>
            <!-- 电讯稿库历史 -->
            <el-row :gutter="20"
                    class="message-content clearfix">
                <el-col :span="24"
                        class="tab-padding">
                    <b class="message-title">电讯稿库历史</b>
                    <template>
                        <el-select v-model="topValue"
                                   placeholder="请选择">
                            <el-option v-for="item in topTitle"
                                       :key="item.label"
                                       :label="item.label"
                                       :value="item.value"
                                       @change="topChange">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>
                <el-row :gutter="20"
                        class="pb10">
                    <el-col :span="6">
                        <span>2018-10-31 12:34:56</span>
                    </el-col>
                    <el-col :span="18">
                        <el-col :span="24">
                            <span>由【创意策划中心-强晓玲】 编辑 </span>
                        </el-col>
                        <el-col :span="24">
                            <span>*处理意见：2018-10-31 11:24:56 开始编辑</span>
                        </el-col>
                    </el-col>
                </el-row>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">
            <el-button class="reset-btn"
                       size="medium"
                       @click="historyData.contentShow = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        historyData: {
            type: Object
        }
    },
    data () {
        return {
            topValue: '新华每日电讯',
            topTitle: [
                {
                    value: '1',
                    label: '新华每日电讯',
                    list: [
                        {
                            id: 2,
                            label: '新华每日电讯 2',
                            children: [{
                                id: 5,
                                label: '新华每日电讯 2-1'
                            },
                            {
                                id: 6,
                                label: '新华每日电讯 2-2'
                            }]
                        },
                        {
                            id: 3,
                            label: '新华每日电讯 3',
                            children: [
                                {
                                    id: 7,
                                    label: '新华每日电讯 3-1'
                                },
                                {
                                    id: 8,
                                    label: '新华每日电讯 3-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '2',
                    label: '每日电讯微博',
                    list: [
                        {
                            id: 2,
                            label: '每日电讯微博 2',
                            children: [{
                                id: 5,
                                label: '每日电讯微博 2-1'
                            },
                            {
                                id: 6,
                                label: '每日电讯微博 2-2'
                            }]
                        },
                        {
                            id: 3,
                            label: '每日电讯微博 3',
                            children: [
                                {
                                    id: 7,
                                    label: '每日电讯微博 3-1'
                                },
                                {
                                    id: 8,
                                    label: '每日电讯微博 3-2'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        messageBoxClose () {

        },
        topChange (value) {
            // this.topValue = value;
        }
    }
}
</script>

<style lang="scss" scoped>
.label-border {
    @include border(bottom, 1px, solid, $tint-border-color);
}
.el-select {
    float: right;
}
</style>
