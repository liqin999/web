<template>
    <el-container>
        <el-aside width="250px"
                  class="left-aside">
            <el-row :gutter="20"
                    class="date-row">
                <el-col :span="18">
                    <el-date-picker v-model="curdate"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-col>
                <el-col :span="6"
                        class="tab-padding">
                    <el-button class="primary-btn">调阅</el-button>
                </el-col>
            </el-row>
            <left-menu :treeData="data2"
                       :defaultProps="defaultProps"
                       @sendTreeObj="getTreeObj"></left-menu>
        </el-aside>
        <el-container>
            <el-main ref="mainTable"
                     class="main-scroll">
                <el-row :gutter="20"
                        class="main-row">
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6"
                            class="img-col">
                        <div class="img-box">
                            <div class="img-wrap">
                                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                     alt="">
                            </div>
                            <div class="texts">
                                <b class="t1">新华每日电讯</b>
                                <span class="t2">A叠-一版一一版一版版一版一版一版一版一版</span>
                                <span class="t3">已建</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer height="70px">
                <el-pagination @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               class="ac"
                               :current-page="currentPage"
                               :page-size="20"
                               layout="total, prev, pager, next"
                               :total="100">
                </el-pagination>
                <div class="btn-bottom">
                    <div class="btn-nav">
                        <i class="iconfont icon-liulan"></i>
                        <span>浏览</span>
                    </div>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <div class="btn-nav">
                        <i class="iconfont icon-wenben1"></i>
                        <span>留稿</span>
                    </div>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <div class="btn-nav">
                        <i class="iconfont icon-ico_print"></i>
                        <span>打印</span>
                    </div>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <draft-label>
                        <i slot="icon"
                           class="iconfont icon-wenben1"></i>
                        <span slot="iconName">稿签</span>
                    </draft-label>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <history>
                        <i slot="icon"
                           class="iconfont icon-ic_history"></i>
                        <span slot="iconName">历史</span>
                    </history>
                    <div class="btn-line">
                        <span>|</span>
                    </div>
                    <div class="btn-nav">
                        <i class="iconfont icon-guanbi"></i>
                        <span>关闭</span>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>
<script>
import leftMenu from '@/components/treeMenu/leftTree.vue'
import draftLabel from '@/components/buttons/draftLabel/draftLabel'
import history from '@/components/buttons/history/history.vue'
export default {
    components: {
        leftMenu,
        draftLabel,
        history
    },
    data () {
        return {
            currentPage: 1,
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 41,
                            label: '头版1',
                            icon: 'el-icon-success'
                        },
                        {
                            id: 12,
                            label: '国内新闻',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 4,
                            label: '国际焦点',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        },
                        {
                            id: 13,
                            label: '评论声音',
                            icon: 'iconfont icon-file-b- ft-ffd658'
                        }

                    ]
                },
                {
                    id: 2,
                    label: 'A叠【版面】',
                    children: [
                        {
                            id: 5,
                            label: '一版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 6,
                            label: '二版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 7,
                            label: '三版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 8,
                            label: '四版',
                            icon: 'iconfont icon-file1'
                        }
                    ]
                }

            ],

            defaultProps: {
                children: 'children',
                label: 'label'
            },
            curdate: '', // 当前的日期
            pickerOptions1: {
                disabledDate (time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '今天',
                    onClick (picker) {
                        picker.$emit('pick', new Date())
                    }
                }, {
                    text: '昨天',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    }
                }, {
                    text: '一周前',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', date)
                    }
                }]
            }
        }
    },
    mounted () {

    },
    methods: {
        getTreeObj (data) { // 获得树形菜单的对象
            console.log('获得自组件的点击的节点对象', data)
        },
        handleSizeChange (val) {

        },
        handleCurrentChange (val) {

        }
    }
}
</script>
<style lang="scss" scoped>
.main-scroll {
    @extend .scroll-y;
}
.main-row {
    margin-right: 0px !important;
    .img-col {
        padding: 0px 0px 10px 10px !important;
        .img-box {
            padding: 10px;
            height: 300px;
            @include border(all);
            .img-wrap {
                display: flex;
                justify-content: center;
                height: 200px;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .texts {
                @extend .text-right;
                padding-top: 10px;
                b {
                    display: block;
                    padding-bottom: 6px;
                    @extend .font16;
                    line-height: 25px;
                    @extend .text-overflow;
                }
                span {
                    display: block;
                    @extend .font12;
                    line-height: 20px;
                    @extend .text-overflow;
                }
            }
        }
    }
}
// .el-date-editor.el-input__inner .date-row {
//     padding: 10px 10px;
// }
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
    padding: 10px;
    padding-bottom: 0px;
}
.date-row {
    margin-right: 0px !important;
    .primary-btn {
        height: 30px;
        margin-top: 10px;
        padding: 5px 13px;
    }
}
</style>
<style lang="scss">
.date-row .el-input__prefix {
    top: 10px;
    left: 10px;
    height: 30px;
}
</style>
