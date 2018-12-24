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
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=764856423,3994964277&fm=27&gp=0.jpg"
                                 alt="">
                        </div>
                        <div class="texts">
                            <span>新华每日电讯</span><br>
                            <span>A叠-一版</span><br>
                            <span>已建</span>
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
                    icon: 'iconfont icon-file-b- ft-ffd658'
                }, {
                    id: 2,
                    label: '新华每日电讯2',
                    icon: 'iconfont icon-file-b- ft-ffd658'
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
    li {
        float: left;
        width: 130px;
        border: 1px solid red;
        margin: 10px;
        img {
            width: 100%;
            height: 160px;
        }
        .texts {
            text-align: center;
        }
    }
    .content-list {
        li:hover {
            border: 1px solid rgba(0, 152, 210, 1);
        }
    }
}
</style>
<style>
</style>
