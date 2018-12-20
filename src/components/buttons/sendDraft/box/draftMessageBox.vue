<template>
    <el-dialog class="" title="传稿" @close="messageBoxClose()" :visible.sync="draftData.contentShow" top="15vh" :append-to-body="true">
        <!-- 内容区 -->
        <div class="message-box clearfix">
            <!-- 待传稿件列表 -->
            <el-row :gutter="20" class="message-lists clearfix">
                <el-col :span="3" class="tab-padding"><b class="message-title">待传稿件</b></el-col>
                <el-col :span="21" class="tab-padding">
                    <template v-for="(item,index) in draftData.draftList">
                        <div :key="index" class="message-list clearfix">
                            <el-col :span="9"><i></i>{{ item.title }}</el-col>
                            <el-col :span="9" class="listName">{{ item.name }}</el-col>
                            <el-col :span="6">{{ item.size }}</el-col>
                        </div>
                    </template>
                </el-col>
            </el-row>
            <!-- 选项内容区 -->
            <el-row :gutter="20" class="message-content clearfix">
                <!-- 送往 -->
                <el-col :span="15">
                    <el-row :gutter="20">
                        <el-col :span="3" class="tab-padding"><b class="message-title padding-bottom10">送往</b></el-col>
                        <el-col :span="14">
                            <el-row>
                                <template v-for="label in radioLabel">
                                    <el-col :span="12" class="title-overflow" :key="label">
                                        <el-radio v-model="radioName" :label="label" @change="labelChange">{{ label }}</el-radio>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                        <el-col :span="7">
                            <el-row :gutter="0">
                                <el-col :span="24" class="padding-top10">
                                    <template>
                                        <el-select v-model="topValue" placeholder="请选择">
                                            <el-option
                                                v-for="item in topTitle"
                                                :key="item.label"
                                                :label="item.label"
                                                :value="item.value"
                                                @change="topChange">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- 多选框 -->
                    <el-row class="margin-top20">
                        <el-col :span="21" :offset="3">
                            <el-row>
                                <el-col :span="12" class="message-checkbox">
                                    <el-tree
                                        :data="dataList"
                                        show-checkbox
                                        node-key="id"
                                        :props="defaultProps">
                                    </el-tree>
                                </el-col>
                                <el-col :span="12" class="message-checkbox">
                                    <el-tree
                                        :data="dataList"
                                        show-checkbox
                                        node-key="id"
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
                        <el-col :span="24" class="clearfix"><b class="message-title padding-bottom10">专题</b></el-col>
                        <!-- <el-row> -->
                        <el-col :span="17">
                            <template>
                                <div class="block">
                                    <el-date-picker
                                        v-model="pickerValue"
                                        type="daterange"
                                        align="right"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :picker-options="pickerOptions"
                                        @change="pickerChange">
                                    </el-date-picker>
                                </div>
                            </template>
                        </el-col>
                        <el-col :span="7"><el-button class="btn-search" @click="searchTime">查询</el-button></el-col>
                        <!-- </el-row> -->
                    </el-row>
                    <!-- 传稿意见 -->
                    <el-row :gutter="10" class="opinionText">
                        <el-col :span="24" class="clearfix"><b class="message-title padding-bottom10 yijian">传稿意见</b><span class="redColor">（不超过255个字）</span></el-col>
                        <!-- <el-row> -->
                        <el-col :span="24">
                            <el-input
                                type="textarea"
                                :rows="12"
                                placeholder="请输入内容"
                                v-model="textarea"
                                @change="textareaChange">
                            </el-input>
                        </el-col>
                        <!-- </el-row> -->
                    </el-row>
                </el-col>
            </el-row>
            <!-- 送往 栏目列表 -->
        </div>
        <!-- 内容区 结束 -->
        <div slot="footer" class="dialog-footer">
            <el-button class="primary-btn" size="medium" @click="draftConfirm()">确认</el-button>
            <el-button class="reset-btn" size="medium" @click="draftData.contentShow = false">取消</el-button>
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
            submitData: null,
            textarea: "请输入文字",
            // 栏目选择
            radioName: '版面/栏目稿库',
            radioLabel: [
                '版面/栏目稿库',
                '媒体公共库',
                '我的稿库',
                '组室公共库',
                '其他人员库',
                '专题库'
            ],
            topValue: '新华每日电讯',
            dataList: [
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
                    ],
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
            ],
            // 多选框列表
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, 
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, 
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }
                ]
            },
            pickerValue: ''
        }
    },
    methods: {
        // 栏目选择变化（单选）
        labelChange(value){
            // this.radioName = value;
        },
        // 一级栏目选择变化（下拉框）
        topChange(value){
            // this.topValue = value;
        },
        //点击关闭回调函数
        messageBoxClose(){
        },
        // 日期选择值
        pickerChange(val){
            // this.pickerValue = val; 
        },
        // 选择日期查询
        searchTime(){
        },
        // 传稿意见
        textareaChange(val){
            // this.textarea = val;
        },
        // 点击确定按钮（提交）
        draftConfirm(){

        }
    },
    computed: {
        dataList1(){
            // let idx = 0;
            // this.topTitle.forEach((item,index) => {
            //     if (this.topValue == item.label){
            //         idx = index;
            //     }
            // });
            // let dataList = this.topTitle[0].list;
            return this.dataList;
        }
    }
}
</script>

<style lang="scss">

$primary-color: rgba(0, 152, 210, 1) rgba(11, 169, 239, 1);    //系统色调 默认、hover状态 
$font-color:#333 !default;   //字体颜色（默认）
$white-color: #fff;          //白色
$font-size:14px 16px;      //字体大小
$border-color:#737373 !default;   //边框颜色（默认）
$border-radius: 3px;                //边角弧度
$line-height:30px !default;       //行高（默认）
$pointer: pointer;             //hover状态 鼠标pointer
$border-area-color:#E3E7E9;  //浅色边框颜色


$titleColor: #F2F2F2;
$titleBorder: #C9C9C9;

// 公共样式应用
.tab-padding{       // 强制缩进
    padding-left: 0px!important;    
}
.padding-bottom10{
    padding-bottom: 10px;
}
.padding-top10{
    padding-top:8px;
}
.margin-top20{
    margin-top:20px;
}
.title-overflow{    // 超出内容区，显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 5px;
}
.scroll-y{
    overflow: hidden;
    overflow-y: auto;
}

.message-box{
    padding: 0px 10px;
    font-size: nth($font-size,1);
    color: $font-color;
    line-height: $line-height;
    & .message-title{
        font-size: nth($font-size,2);
    }
    & .message-lists{
        border-bottom: 1px solid $border-color;
        & .message-list{
            padding-bottom: 20px;
            & .listName{
                font-weight: bold;
            }
        }
    }
}
.message-content{
    padding: 20px 0px;
    & .message-checkbox{
        @extend .scroll-y;
        height: 290px;  
        border: 1px solid $border-area-color;
        border-radius: $border-radius;

        padding: 5px 0px;
    }
}
// 修改elm组件样式
.el-dialog__body{
    padding: 20px;
}
// 单选框修改
.el-radio__label{
    padding-left: 5px;
}
// 下拉框样式修改
.el-input__inner{
    // padding-left:10px;
    border-radius: $border-radius;
    border-color:$border-color;
    height: $line-height;
    line-height: $line-height;
}
.el-select:hover .el-input__inner {
    border-color: $border-color;
}
.el-input__inner:hover {
    border-color: $border-color;
}

.el-radio__inner{
    border: 1px solid #737373;
}
.el-radio__input.is-checked+.el-radio__label {
    color: #333;
}
.el-radio__input.is-checked .el-radio__inner{
    border-color: #737373;
    background: #fff;
}
.el-radio__inner::after {
    width: 6px;
    height: 6px;
    background-color: #000;
}
.redColor{
    color:red;
    font-size: 12px;
}
.el-radio__inner:hover {
    border-color: #737373;
}
.el-dialog__header{
    background: $titleColor;
    border-bottom: 1px solid $titleBorder;
}
.el-dialog__title{
    font-weight: bold;
    color:#515151;
}

.el-dialog {
    color:#515151;
    width: 70%;
    min-width: 733px!important;
    overflow:auto;
}
</style>

<style>
.listName{
    color: #2E343C;
    font-weight: bold;
}


.el-textarea__inner{
    border: 1px solid #E3E7E9;
    border-radius: 3px;
}
.el-textarea__inner:focus {
    border-color: #737373;
}
.listSize{
    color:#2E343C
}

.yijian{
    display: inline-block!important;
}
.opinionText{
    margin-top:25px;
}
.el-row{
    color: #2E343C;
}

/* .el-row>.el-col:first-child{
    padding-left: 0px!important;
} */
.el-range-editor.el-input__inner{
    width: 100%;
}
/* .el-row>.el-col:last-child{
    padding-right: 0px!important;
} */
/* .el-button:focus, .el-button:hover{
    color: #515151;
    border-color: #a1a1a1;
    background-color: #F2F2F2;
} */
.message-lists .el-col{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.message-lists h2{
    display: inline-block;
}
.btn-search{
    float: right;
    height: 30px;
    border: 1px solid #A1A1A1;
    color: #515151;
    border-radius:3px;
    line-height: 25px;
    padding:0px 15px;
    text-align: center;
}
.el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 3px;
}
/* .el-button--success {
    color: #fff;
    background-color: rgba(0, 152, 210, 1);
    border-color: rgba(0, 152, 210, 1);
}
.el-button--success:focus, .el-button--success:hover {
    background: rgba(11, 169, 239, 1);
    border-color: rgba(11, 169, 239, 1);
    color: #fff;
} */




.block .el-input__inner{
    padding-left:10px;
    border-radius: 3px;
    border: 1px solid #707070;
    color: #333;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
}
.el-input__icon{
    line-height: 30px;
}
.el-input{
    font-size: 12px;
}

.el-date-editor .el-range-separator{
    line-height: 22px;
    color:#868686;
}
.el-date-editor .el-range__icon{
    line-height: 22px;
}
.el-date-editor .el-range-input, .el-date-editor .el-range-separator{
    font-size:12px;
}
</style>
