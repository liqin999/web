<template>
    <el-dialog class="look-message"
               title="选择分类"
               @close="messageBoxClose()"
               :visible.sync="lookData.contentShow"
               :append-to-body="true">
        <!-- 内容区 -->
       <div class="message-box">
                <el-row :gutter="10">
                    <el-col :span="10">
                        <b>请选择您需要的分类：</b>
                    </el-col>
                </el-row>
            <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
            </el-tree>
            <div class="text-right">
            <el-button class="primary-btn"
                       @click="draftConfirm()">确认</el-button>
            <el-button class="reset-btn"
                       @click="lookData.contentShow = false">取消</el-button>
        </div>

        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        lookData: {
            type: Object
        }
    },
    data () {
        return {
            data2: [{
                id: 1,
                label: '国际新闻信息分类',
                children: [{
                    id: 1,
                    label: '政治法律'
                },
                {
                    id: 2,
                    label: '军事'
                },
                {
                    id: 3,
                    label: '社会'
                },
                {
                    id: 4,
                    label: '生态环境'
                },
                {
                    id: 5,
                    label: '科技'
                },
                {
                    id: 6,
                    label: '教育'
                },
                {
                    id: 7,
                    label: '宏观经济'
                },
                {
                    id: 8,
                    label: '行业经济'
                },
                {
                    id: 9,
                    label: '市场'
                },
                {
                    id: 10,
                    label: '文化娱乐'
                },
                {
                    id: 11,
                    label: '医药卫生'
                },
                {
                    id: 12,
                    label: '体育'
                }, {
                    id: 13,
                    label: '其他'
                },
                {
                    id: 14,
                    label: '组织指挥'
                },
                {
                    id: 15,
                    label: '突发事件'
                },
                {
                    id: 16,
                    label: '素材资料'
                }
                ]
            }, {
                id: 14,
                label: '地区分类',
                children: [{
                    id: 15,
                    label: '国际'
                }, {
                    id: 16,
                    label: '国内'
                }]
            }, {
                id: 17,
                label: '自定义分类',
                children: [{
                    id: 18,
                    label: '新闻'
                }, {
                    id: 19,
                    label: '娱乐'
                },
                {
                    id: 20,
                    label: '财经'
                },
                {
                    id: 21,
                    label: '体育'
                }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        messageBoxClose () {

        },
        draftConfirm () {

        }
    },
    computed: {
        dataList1 () {
            return this.dataList
        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    line-height: 35px;
}
.ft-red {
    color: red;
}
.texts{
    text-decoration:underline ;
}
</style>
<style>
.look-message .el-dialog {
    width: 30%
}
</style>
