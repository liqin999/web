<template>
    <el-dialog class="" title="传稿" @close="messageBoxClose()" :visible.sync="draftData.contentShow" width="80%" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 待传稿件列表 -->
            <el-row :gutter="20" class="message-list clearfix">
                <el-col :span="4"><b class="font-h1">待传稿件</b></el-col>
                <el-col :span="8"><i></i>23728784374374372983982378478refergege</el-col>
                <el-col :span="8">一个西红柿的世界</el-col>
                <el-col :span="4">329084字</el-col>
            </el-row>
            <!-- 选项内容区 -->
            <el-row :gutter="20" class="message-content clearfix">
                <!-- 送往 -->
                <el-col :span="15">
                    <el-row :gutter="5">
                        <el-col :span="3"><b class="font-h1 title-bottom">送往</b></el-col>
                        <el-col :span="14">
                            <el-row :gutter="0">
                                <template>
                                    <el-col :span="12" class="radio-label">
                                        <el-radio v-model="radio" label="备选项1">备选项备选项备选项</el-radio>
                                    </el-col>
                                    <el-col :span="12" class="radio-label">
                                        <el-radio v-model="radio" label="备选项2">备选项备选项备选项</el-radio>
                                    </el-col>
                                    <el-col :span="12" class="radio-label">
                                        <el-radio v-model="radio" label="备选项3">备选备选项项备选项</el-radio>
                                    </el-col>
                                    <el-col :span="12" class="radio-label">
                                        <el-radio v-model="radio" label="备选项4">备选备选项项</el-radio>
                                    </el-col>
                                    <el-col :span="12" class="radio-label">
                                        <el-radio v-model="radio" label="备选项5">备选备选项项</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                        <el-col :span="7">
                            <el-row :gutter="0">
                                <el-col :span="24">
                                    <template>
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- 多选框 -->
                    <el-row>
                        <el-col :span="21" :offset="3">
                            <el-row>
                                <el-col :span="12" class="message-checkbox">
                                    <el-tree
                                        :data="data2"
                                        show-checkbox
                                        node-key="id"
                                        :default-expanded-keys="[2, 3]"
                                        :default-checked-keys="[5]"
                                        :props="defaultProps">
                                    </el-tree>
                                </el-col>
                                <el-col :span="12" class="message-checkbox">
                                    <el-tree
                                        :data="data2"
                                        show-checkbox
                                        node-key="id"
                                        :default-expanded-keys="[2, 3]"
                                        :default-checked-keys="[5]"
                                        :props="defaultProps">
                                    </el-tree>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- 专题 -->
                <el-col :span="9">
                    <el-row :gutter="10">
                        <el-col :span="24" class="clearfix"><b class="font-h1 title-bottom">专题</b></el-col>
                        <el-row>
                            <el-col :span="17">
                                <template>
                                    <div class="block">
                                        <el-date-picker
                                            v-model="value7"
                                            type="daterange"
                                            align="right"
                                            unlink-panels
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            :picker-options="pickerOptions2">
                                        </el-date-picker>
                                    </div>
                                </template>
                            </el-col>
                            <el-col :span="7"><el-button class="btn-search">查询</el-button></el-col>
                        </el-row>
                    </el-row>
                    <!-- 传稿意见 -->
                    <el-row :gutter="10">
                        <el-col :span="24" class="clearfix"><b class="font-h1 title-bottom">传稿意见</b></el-col>
                        <el-row>
                            <el-col :span="24">
                                <el-input
                                    type="textarea"
                                    :rows="12"
                                    placeholder="请输入内容"
                                    v-model="textarea">
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-row>
                </el-col>
            </el-row>
            <!-- 送往 栏目列表 -->
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer" class="dialog-footer">
            <el-button type="success" size="medium" @click="draftConfirm()">确认</el-button>
            <el-button size="medium" @click="draftData.contentShow = false">取 消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        draftData: {
            type: Object
        }
    },
    data () {
        return {
            textarea: "请输入文字",
            radio: 'lanmu',
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, 
                {
                    value: '选项2',
                    label: '双皮奶'
                }, 
                {
                    value: '选项3',
                    label: '蚵仔煎'
                }, 
                {
                    value: '选项4',
                    label: '龙须面'
                }, 
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            data2: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                    }]
                }, 
                {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    },
                    {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, 
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                        id: 7,
                        label: '二级 3-1'
                        }, 
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value6: '',
            value7: ''
        }
    },
    methods: {
        messageBoxClose(){
            //点击关闭回调函数
        }
    }
}
</script>

<style>
.message-box{
    padding:0 10px;
}
.el-row{
    padding-bottom: 20px;
}
.message-list{
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;

}
.title-bottom{
    display: block;
    padding-bottom: 10px;
}
.el-row .el-col:first-child{
    padding-left: 0px!important;
}
.el-range-editor.el-input__inner{
    width: 100%;
}
.el-row .el-col:last-child{
    padding-right: 0px!important;
}
.message-list .el-col{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.message-list h2{
    display: inline-block;
}
.btn-search{
    width: 100%;
}
.font-h1{
    font-size: 16px;
}
.message-content{
    padding: 20px 0;
}
.radio-label{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 10px;
}
.message-checkbox{
    border: 1px solid #ccc;
    padding: 20px;
}
</style>
