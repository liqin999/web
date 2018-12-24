<template>
  <el-dialog class=""
             title="传稿"
             @close="messageBoxClose()"
             :visible.sync="draftData.contentShow"
             top="15vh"
             :append-to-body="true">
    <!-- 内容区 -->
    <div class="message-box clearfix">
      <!-- 待传稿件列表 -->
      <el-row :gutter="20"
              class="message-lists clearfix">
        <el-col :span="3"
                class="tab-padding"><b class="message-title">待传稿件</b></el-col>
        <el-col :span="21"
                class="tab-padding">
          <template v-for="(item,index) in draftData.draftList">
            <div :key="index"
                 class="message-list clearfix">
              <el-col :span="9"><i></i>{{ item.title }}</el-col>
              <el-col :span="9"
                      class="listName">{{ item.name }}</el-col>
              <el-col :span="6">{{ item.size }}</el-col>
            </div>
          </template>
        </el-col>
      </el-row>
      <!-- 选项内容区 -->
      <el-row :gutter="20"
              class="message-content clearfix">
        <!-- 送往 -->
        <el-col :span="15">
          <el-row :gutter="20">
            <el-col :span="3"
                    class="tab-padding"><b class="message-title padding-bottom10">送往</b></el-col>
            <el-col :span="14">
              <el-row>
                <template v-for="label in radioLabel">
                  <el-col :span="12"
                          class="text-overflow"
                          :key="label">
                    <el-radio v-model="radioName"
                              :label="label"
                              @change="labelChange">{{ label }}</el-radio>
                  </el-col>
                </template>
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row :gutter="0">
                <el-col :span="24"
                        class="padding-top10">
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
              </el-row>
            </el-col>
          </el-row>
          <!-- 多选框 -->
          <el-row class="margin-top20">
            <el-col :span="21"
                    :offset="3">
              <el-row>
                <el-col :span="12"
                        class="message-checkbox">
                  <el-tree :data="dataList"
                           show-checkbox
                           node-key="id"
                           :props="defaultProps">
                  </el-tree>
                </el-col>
                <el-col :span="12"
                        class="message-checkbox">
                  <el-tree :data="dataList"
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
            <el-col :span="24"
                    class="clearfix"><b class="message-title padding-bottom10">专题</b></el-col>
            <!-- <el-row> -->
            <el-col :span="17">
              <template>
                <div class="block">
                  <el-date-picker v-model="pickerValue"
                                  type="daterange"
                                  align="right"
                                  unlink-panels
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  :picker-options="pickerOptions"
                                  :clearable='false'
                                  @change="pickerChange">
                  </el-date-picker>
                </div>
              </template>
            </el-col>
            <el-col :span="7">
              <el-button plain
                         class="btn-inquire"
                         @click="searchTime">查询</el-button>
            </el-col>
            <!-- </el-row> -->
          </el-row>
          <!-- 传稿意见 -->
          <el-row :gutter="10"
                  class="">
            <el-col :span="24"
                    class="clearfix"><b class="message-title padding-bottom10 inline-block">传稿意见</b><span class="redColor">（不超过255个字）</span></el-col>
            <!-- <el-row> -->
            <el-col :span="24">
              <el-input type="textarea"
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
    <div slot="footer"
         class="dialog-footer">
      <el-button class="primary-btn"
                 size="medium"
                 @click="draftConfirm()">确认</el-button>
      <el-button class="reset-btn"
                 size="medium"
                 @click="draftData.contentShow = false">取消</el-button>
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
      textarea: '请输入文字',
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
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      pickerValue: ''
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

<style lang="scss">
// 定义全局样式变量
$primary-color: rgba(0, 152, 210, 1) rgba(11, 169, 239, 1); //系统色调 默认、hover状态
$font-color: #333 !default; //字体颜色（默认）
$white-color: #fff; //白色
$font-size: 12px 14px 16px; //字体大小
$border-color: #737373 !default; //边框颜色（默认）
$border-radius: 3px; //边角弧度
$line-height: 30px !default; //行高（默认）
$pointer: pointer; //hover状态 鼠标pointer
$border-area-color: #e3e7e9; //浅色边框颜色

// elm 弹出框样式定义变量
$header-bg-Color: #f2f2f2; //头部背景色颜色
$header-border-color: #c9c9c9; //头部下边框颜色
$header-title-color: #515151; //头部标题颜色
$box-width: 733px; //定义弹出框最小宽度

// 公共样式应用
.margin-bottom15 {
  margin-bottom: 15px;
}
.font-size16 {
  font-size: nth($font-size, 3);
}
/* 字体居中 */
.text-center {
  text-align: center;
}
.tab-padding {
  // 强制缩进
  padding-left: 0px !important;
}
.padding-right {
  padding-right: 10px;
}
.text-right {
  text-align: right;
}
.padding-bottom10 {
  padding-bottom: 10px;
}
.padding-top8 {
  padding-top: 8px;
}
.margin-top20 {
  margin-top: 20px;
}
.inline-block {
  display: inline-block;
}
.text-overflow {
  // 超出内容区，显示省略号
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5px;
}

.message-box {
  padding: 0px 10px;
  font-size: nth($font-size, 2);
  color: $font-color;
  line-height: $line-height;
  & .message-title {
    font-size: nth($font-size, 3);
  }
  & .message-lists {
    border-bottom: 1px solid $border-color;
    & .message-list {
      padding-bottom: 20px;
      & .el-col {
        @extend .text-overflow;
      }
      & .listName {
        font-weight: bold;
      }
    }
  }
}

.message-content {
  padding: 20px 0px;
  & .message-checkbox {
    // @extend .scroll-y;
    height: 290px;
    border: 1px solid $border-area-color;
    border-radius: $border-radius;

    padding: 5px 0px;
  }
  & .btn-inquire {
    box-sizing: border-box;
    border: 1px solid $border-color;
    color: $font-color;
    padding: 0px 20px;
    height: $line-height;
    font-size: nth($font-size, 1);
    border-radius: $border-radius;
  }
}

// 修改elm组件样式
// 弹出框样式修改
.el-dialog {
  width: 70%;
  min-width: $box-width;
  overflow: auto;
}
.el-dialog__header {
  background: $header-bg-Color;
  border-bottom: 1px solid $header-border-color;
}
.el-dialog__title {
  font-weight: bold;
  color: $header-title-color;
}
.el-dialog__body {
  padding: 20px;
}
// 单选框修改
.el-radio__label {
  padding-left: 5px;
}
// 下拉框样式修改
.el-input__inner {
  border-radius: $border-radius;
  border-color: $border-color;
  height: $line-height;
  line-height: $line-height;
}
.el-select:hover .el-input__inner {
  border-color: $border-color;
}
// input框样式修改
.el-input__inner:hover {
  border-color: $border-color;
}
.el-input__icon {
  line-height: $line-height;
}
.el-input {
  font-size: nth($font-size, 1);
}
// 单选框样式修改
.el-radio__inner {
  border: 1px solid $border-color;
}
.el-radio__inner:hover {
  border-color: $border-color;
}
.el-radio__input.is-checked + .el-radio__label {
  color: $font-color;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: $border-color;
  background: $white-color;
}
.el-radio__inner::after {
  width: 6px;
  height: 6px;
  background-color: #000;
}
// 提交框样式修改
.el-textarea__inner {
  border: 1px solid $border-area-color;
  border-radius: $border-radius;
}
.el-textarea__inner:focus {
  border-color: $border-color;
}
// 时间插件修改样式
.el-range-editor.el-input__inner {
  width: 100%;
  padding: 3px 6px;
}
.el-date-editor .el-range-separator {
  line-height: 22px;
  color: $font-color;
  padding: 0 8px;
}
.el-date-editor .el-range__icon {
  line-height: 22px;
}
.el-date-editor .el-range-input,
.el-date-editor .el-range-separator {
  font-size: nth($font-size, 1);
}

//暂时
.redColor {
  color: red;
  font-size: nth($font-size, 1);
}

@mixin border(
  $option: bottom,
  $width: 1px,
  $style: solid,
  $color: $border-color
) {
  @if $option == all {
    border: $width $style $color;
  } @else {
    border-#{$option}: $width $style $color;
  }
}
.el-textarea {
  @include border(all, 3px);
}
</style>
