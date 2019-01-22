<template>
    <el-dialog class="content-message"
               title="稿件浏览"
               @close="messageBoxClose()"
               :visible.sync="contentData.contentShow"
               top="15vh"
               :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <el-row :gutter="20">
                <el-col :span="24">
                    <span style="color: red;line-height: 50px">稿号：2019012200001</span>
                </el-col>
                <el-col :span="24" style="line-height: 25px">
                    <h6><span style="color: red;line-height: 30px">羊倌</span>发“<span style="color: red">羊财</span>”</h6>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宁夏盐池县王乐井乡曾记畔村村民鲁永胜不仅脱了贫，成了全村小有名气的发展带头人，
                        今年夏天还当上了村文书。“生活稳定了，我就想发挥点余热！”51岁的老鲁如今养300多只滩<span style="color: red">羊</span>，对新工作充满干劲。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“3年前我还是<span style="color: red">‘穷羊倌’</span>，早先养<span style="color: red">羊</span>不成规模，常让<span style="color: red">羊</span>贩子低价买走，种点小杂粮收成不好，一年到头没啥收入。
                        ”鲁永胜说，咱就一把力气，想不出更多赚钱的法子。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鲁永胜生活的盐池县草原广袤，这里的农户大多养殖滩<span style="color: red">羊</span>。由于滩<span style="color: red">羊</span>肉质细嫩、富含营养，盐池逐渐形成远近闻名的滩<span style="color: red">羊</span>产业，也赢得“中国滩<span style="color: red">羊</span>之乡”的美誉，
                        但受限于养殖规模小，农户守着<span style="color: red">羊</span>却受着穷。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如何让和鲁永胜一样想脱贫、有技术的农户靠养<span style="color: red">羊</span>鼓起腰包？盐池县打出了“产业+金融”的脱贫组合拳。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了解决老百姓想养<span style="color: red">羊</span>却没资金的难题，盐池县逐步实行互助资金、千村信贷等金融扶贫模式，建立贫困户评级授信和“四信”评定系统，把诚信度作为贷款额度、利率优惠的主要评估指标。
                        现在，鲁永胜通过多种金融信贷贷款达到17万元，<span style="color: red">羊</span>也从几十只增加到300多只。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不断叠加的金融惠民政策让鲁永胜明白：“只要养好<span style="color: red">羊</span>，就能贷到款，而贷款等于养更多的<span style="color: red">羊</span>。”</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着农户发展滩<span style="color: red">羊</span>产业进入良性循环，盐池县开始在品牌、市场环节下功夫。去年7月，盐池组建了滩<span style="color: red">羊</span>产业发展集团和县乡村滩<span style="color: red">羊</span>协会，
                        对产业链关键环节实行购销价格、市场开拓、品牌宣传、营销策略、生产标准和饲草料使用的“六统一”政策，培育扶持18家龙头企业，提供订单收购和综合服务。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“我的<span style="color: red">羊</span>不愁卖，一部分卖给协会，一部分卖给鑫海公司。”鲁永胜说，按协会养殖标准，<span style="color: red">羊</span>必须用精料和井水喂，才有好品质，去年他赚了8万多元。

</p>
                </el-col>
            </el-row>
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer"
             class="dialog-footer">

            <el-button class="reset-btn"
                       @click="contentData.contentShow = false">关闭</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        contentData: {
            type: Object
        }
    },
    data () {
        return {
        }
    },
    methods: {
        // 栏目选择变化（单选）
        labelChange (value) {
            // this.radioName = value;
        },
        // 一级栏目选择变化（下拉框）
        topChange (value) {
            // this.topValue = value;
        },
        // 点击关闭回调函数
        messageBoxClose () {
        },
        // 日期选择值
        pickerChange (val) {
            // this.pickerValue = val;
        },
        // 选择日期查询
        searchTime () {
        },
        // 传稿意见
        textareaChange (val) {
            // this.textarea = val;
        },
        // 点击确定按钮（提交）
        draftConfirm () {
            this.draftData.contentShow = false
        }
    },
    computed: {
        dataList1 () {
            // let idx = 0;
            // this.topTitle.forEach((item,index) => {
            //     if (this.topValue == item.label){
            //         idx = index;
            //     }
            // });
            // let dataList = this.topTitle[0].list;
            return this.dataList
        }
    }
}
</script>
<style lang="scss" scoped>
.message-box {
    .message-lists {
        padding-bottom: 10px;
        @include border;
        .message-list {
            .el-col {
                line-height: 30px;
                @extend .text-overflow;
            }
        }
    }
    .message-content {
        .message-checkbox {
            height: 250px;
            @include border(all);
            border-radius: $border-radius;
        }
    }
}
</style>
<style>
.input-height .el-input__inner {
    height: 80px;
    line-height: 30px;
    border-radius: 3px;
    border-color: #cbcbcb;
}
.input-height2 .el-input__inner {
    height: 174px;
    line-height: 30px;
    border-radius: 3px;
    border-color: #cbcbcb;
}
.content-message .el-dialog {
    width: 50%;
    min-width: 600px;
}
</style>
