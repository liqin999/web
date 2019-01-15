<template>
    <el-container>
        <el-main>
            <el-row :gutter="20"
                    class="clearfix">
                <el-row :gutter="20"
                        class="clearfix">
                    <el-col :span="12">
                        <span>新闻号 <span class="red">【130710128】</span>入库时间 <span class="red">[2018-10-29 12:23:46]</span></span>
                    </el-col>
                    <el-col :span="6"
                            :offset="2"
                            class="text-right">
                        <template>
                            <el-select v-model="value"
                                       placeholder="请选择">
                                <el-option v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-col>
                    <el-col :span="4"
                            class="text-right">

                        <el-button class="primary-btn">建稿</el-button>
                        <el-button class="reset-btn"
                                   @click="closeFn">关闭</el-button>
                    </el-col>
                </el-row>
                <el-col :span="18"
                        :offset="3"
                        class="rtab-padding tab-padding mt15">
                    <p class="review-p ac"><b>（脱贫攻坚）新疆和田：黑山村的致富路</b></p>
                    <p class="review-p2">
                        全面建成小康社会，一个也不能少。党的十八大以来，
                        以习近平同志为核心的党中央围绕脱贫攻坚作出一系列重大部署和安排，
                        全面打响脱贫攻坚战，拓展了中国特色扶贫开发道路，脱贫攻坚取得决定性进展。
                        党的十九大明确把精准脱贫作为决胜全面建成小康社会必须打好的三大攻坚战之一，
                        作出了新的部署。
                        《中共中央国务院关于打赢脱贫攻坚战三年行动的指导意见》为推动脱贫攻坚工作更加有效开展进一步完善顶层设计、
                        强化政策措施、加强统筹协调。在未来两年多时间里，如何攻克深度贫困堡垒，实现稳定脱贫不返贫，
                        让中国特色扶贫开发道路越走越宽广？本期观察版围绕这些问题进行探讨。
                        <span>编辑：孙科</span>
                    </p>
                </el-col>
                <el-col :span="24"
                        class="border-line">
                    <span class="red">版权声明：凡向新华社本数据库提交待编、待发的文字作品、
                        资料信息、图片图表、音视频节目等所有稿件，除署名权而外的全部著作权和邻接权权力，
                        均归新华社所有。</span>
                </el-col>
                <div class="clearfix"></div>
                <el-row :gutter="20"
                        class="message-lists clearfix">
                    <el-col :span="3"
                            class="span-title"><span>相似稿件</span></el-col>
                    <el-col :span="21">
                        <template v-for="(item,index) in draftList">
                            <div :key="index"
                                 class="message-list clearfix">
                                <el-col :span="9"><i></i>{{ item.title }}</el-col>
                                <el-col :span="9"><b>{{ item.name }}</b></el-col>
                                <el-col :span="6">{{ item.size }}</el-col>
                            </div>
                        </template>
                    </el-col>
                </el-row>
                <el-row class="clearfix mt15 mb15">
                    <el-button class="primary-btn">打印全部(稿签和正文)</el-button>
                    <el-button class="primary-btn">打印正文</el-button>
                </el-row>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data () {
        return {
            draftList: [
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
            ],
            options: [{
                value: '新华社每日电讯',
                label: '新华社每日电讯'
            }, {
                value: '每日电讯微博',
                label: '每日电讯微博'
            }],
            value: '新华社每日电讯'
        }
    },
    methods: {
        closeFn () {
            this.$router.go('-1')
        }
    }
}
</script>
<style lang="scss" scoped>
.el-main {
    background: nth($bg-color, 2);
    padding: 10px 20px;
    line-height: 30px;
    & > .el-row {
        background: #fff;
        box-shadow: 0px 0px 5px #cacaca;
        border: none !important;
        padding: 10px;
        .review-p {
            font-size: 22px;
            line-height: 65px;
        }
        .review-p2 {
            font-size: 16px;
            text-indent: 30px;
            span {
                display: block;
                font-size: 18px;
                font-weight: bold;
                line-height: 100px;
            }
        }
        .border-line {
            @include border;
            padding-bottom: 15px;
        }
        .red {
            color: red;
        }
        .message-lists {
            padding: 10px;
            .message-list {
                .el-col {
                    @extend .text-overflow;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>
