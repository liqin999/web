<template>
    <div style="containers">
        <div class="con-wrap">
            <div class="leftCon">
                <div class="date-con">
                    <el-date-picker v-model="curdate"
                                    class="cur-date"
                                    size="small"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions1">
                    </el-date-picker>

                    <el-button size="small"
                               type="primary">调阅</el-button>

                </div>
                <left-menu :treeData="data2"
                           :defaultProps="defaultProps"
                           @sendTreeObj="getTreeObj"></left-menu>
            </div>

            <div class="rightCon">
                <ul class="content-list">
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545644425&di=ba2067c2aa490f737157a78ccace21c2&src=http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrap">
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span class="t1">新华每日电讯</span><br>
                            <span class="t2">A叠-一版</span><br>
                            <span class="t3">已建</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import leftMenu from '@/components/treeMenu/leftTree.vue'

export default {
    components: {
        leftMenu
    },
    data () {
        return {
            data2: [
                {
                    id: 1,
                    label: '新华每日电讯',
                    children: [
                        {
                            id: 4,
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
                            id: 12,
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
                            id: 5,
                            label: '三版',
                            icon: 'iconfont icon-file1'
                        },
                        {
                            id: 6,
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
        }
    }
}
</script>
<style lang="scss" scoped>
$font-red: #fe5959;
$font-blue: #049a9a;
.containers:after {
    display: block;
    content: "";
    clear: both;
    visibility: hidden;
}
.cur-date {
    margin-left: 10px;
    width: 133px;
    display: inline-block;
}
.mt10 {
    margin-top: 10px;
}

.con-wrap {
    display: flex;
}
.leftCon {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    height: calc(100vh - 90px);
    margin-right: 10px;
}
.rightCon {
    border: 1px solid #ddd;
    border-bottom: none;
    height: calc(100vh - 90px);
    width: 100%;
}
.date-con {
    margin-top: 10px;
    min-width: 208px;
}
.mt10 {
    margin-top: 10px;
    //padding-left: 10px;
}
.content-list:after {
    display: block;
    content: "";
    clear: both;
    visibility: hidden;
}
.content-list {
    padding: 10px;
    li {
        float: left;
        width: 140px;
        margin-right: 10px;
        margin-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        &:hover {
            background-color: #f6f7f9;
        }
        .img-wrap {
            text-align: center;
            border: 1px solid transparent;
            width: 120px;
            display: inline-block;
            height: 160px;
        }
        img {
            display: inline-block;
            width: 100%;
            height: 160px;
        }
        .texts {
            text-align: center;
            .t1 {
                color: $font-blue;
            }
            .t3 {
                color: $font-red;
            }
        }
    }
    li:hover .img-wrap {
        border: 1px solid rgba(0, 152, 210, 1);
    }
}
</style>
<style>
</style>
