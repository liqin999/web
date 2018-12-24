<template>
  <div style="containers">
    <div class="search-wrap">
      <search-input :searchForm="searchForm"
                    :allTypes="allTypes"
                    @sendFormData="getFormData">
        <el-form-item label="媒体:"
                      slot="media">
          <el-select v-model="searchForm.media"
                     class="w100"
                     size="small"
                     placeholder="请选择媒体">
            <el-option label="媒体一"
                       value="shanghai"></el-option>
            <el-option label="媒体二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </search-input>
    </div>

    <div class="con-wrap">
      <!--
        <div class="leftCon">
           <left-menu :treeData="data2" :defaultProps="defaultProps" @sendTreeObj="getTreeObj"></left-menu>
        </div> -->

      <div class="rightCon">
        <div class="btnGroup">
          <!-- 引入按钮的组的插件 -->
          <send-draft :draft="draft">
            <span slot="iconName">传稿</span>
          </send-draft>
          <issuance>
            <span slot="iconName">签发</span>
          </issuance>
          <div data-v-6eb3df45=""
               class="primary-btn"><span>
              <span data-v-6eb3df45="">审稿</span>
            </span>
          </div>
          <div data-v-6eb3df45=""
               class="primary-btn"><span>
              <span data-v-6eb3df45="">淘汰</span>
            </span>
          </div>
          <div data-v-6eb3df45=""
               class="primary-btn"><span>
              <span data-v-6eb3df45="">版本</span>
            </span>
          </div>
          <div data-v-6eb3df45=""
               class="primary-btn"><span>
              <span data-v-6eb3df45="">编辑</span>
            </span>
          </div>
          <div data-v-6eb3df45=""
               class="primary-btn"><span>
              <span data-v-6eb3df45="">提交</span>
            </span>
          </div>
          <!-- <split>
                        <span slot="iconName">拆分</span>
                </split>
                <concat :data="concatData"
                            @sendConcatData = "getConcatData"
                            @sendConcatDataUp = "getConcatDataUp"
                            @sendConcatDataDown = "getConcatDataDown"
                            >
                            <span slot="iconName">合并</span>
                 </concat> -->

        </div>
        <el-table ref="multipleTable"
                  :data="tableData3"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column label="日期"
                           width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="120">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址"
                           show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div class="mt10">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="10"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="100">
          </el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import sendDraft from '@/components/buttons/sendDraft/sendDraft'
import issuance from '@/components/buttons/issuance/issuance'
import searchInput from '@/components/searchConditions/searchInput.vue'
export default {
  components: {
    searchInput,
    sendDraft,
    issuance
  },
  data () {
    return {
      draft: [],
      currentPage: 1,
      searchForm: {
        dateValue: '',
        keywords: '',
        checkAll: false,
        media: '',
        checkedTypes: ['文本', '图片'],
        isIndeterminate: true
      },
      allTypes: ['文本', '图片', '图表', '视频', '音频', '应用'],
      data2: [
        {
          id: 1,
          label: '新华每日电讯',
          children: [
            {
              id: 4,
              label: '电讯领导',
              children: [{
                id: 9,
                label: '方立新',
                icon: 'iconfont icon-file-b- ft-ffd658'
              }, {
                id: 10,
                label: '李仁虎',
                icon: 'iconfont icon-file-b- ft-ffd658'

              }]
            },
            {
              id: 7,
              label: '总编室',
              children: [{
                id: 12,
                label: '留学室',
                icon: 'iconfont icon-file1'

              }, {
                id: 13,
                label: '卢刚',
                icon: 'iconfont icon-file1'
              }]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      concatData: {
        contentShow: false,
        tableData: [{
          num: '2',
          title: '王小虎'

        }, {
          num: '3',
          title: '王小虎'

        }]
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  mounted () {

  },
  methods: {
    getTreeObj (data) { // 获得树形菜单的对象
      console.log('获得自组件的点击的节点对象', data)
    },
    getFormData (data) { // 搜索表单的选项
      console.log('获得自组件的搜索框数据', data)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {

    },
    handleCurrentChange (val) {

    },
    getConcatData (data) { // 获得合并的元素的参数信息
      console.log('获得子组件的合并的元素数据', data)
    },
    getConcatDataUp (data) { // 获得合并弹框的上移操作
      console.log('获得合并子组件弹框的上移操作元素数据', data)
    },
    getConcatDataDown (data) { // 获得合并弹框的下移操作
      console.log('获得合并子组件弹框的下移操作元素数据', data)
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
.search-wrap {
  padding-top: 10px;
  height: 50px;
  background-color: #f5f5f5;
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
.btnGroup {
  height: 68px;
  padding-top: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
.mt10 {
  margin-top: 10px;
  padding-left: 10px;
}
</style>
<style>
</style>
