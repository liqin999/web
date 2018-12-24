<template>
  <div>
    <dynamic-table :table-data="tableData"
                   :table-header="tableConfig1"
                   v-if="dynamicTableShow"></dynamic-table>
    <dynamic-form v-else></dynamic-form>
  </div>
</template>

<script>
import DynamicTable from './DynamicTable'
export default {
  components: {
    DynamicTable
  },
  data () {
    return {
      dynamicTableShow: true, // 使得DynamicTable组件重新渲染变量
      // 表数据（普通）
      tableConfig1: [{
        id: 100,
        label: '1',
        prop: 'name'
      }, {
        id: 200,
        label: 'age',
        prop: 'age'

      }, {
        id: 300,
        label: 'sex',
        prop: 'sex'
      }, {
        id: 400,
        label: 'sex',
        prop: 'sex'
      }, {
        id: 500,
        label: 'sex',
        prop: 'sex'
      }, {
        id: 600,
        label: 'sex',
        prop: 'sex'
      }],
      // 表数据（多层）
      tableData: [{
        nysjd: '-',
        hyqt: 0,
        zdspfst: 0,
        zols: 0,
        nfsjd: '-',
        llzcs: 0,
        ton_avg: 0,
        llfsd: 0,
        nzcjd: '-',
        income_avg: 0.51,
        zdjzxs: 0,
        zocs: 0,
        qzhyf: 0,
        income_sum: 6.15,
        ton_yoydate: -0.6,
        trip_sum: 12,
        nzcdprj: '-',
        nysdprj: '-',
        nfsddprj: '-',
        ton_sum: 738,
        zxf: 0,
        jqsd: 0,
        trip_avg: 1,
        unit_name: '七斗冲',
        income_yoydate: -0.61,
        jsjj: 0,
        trip_yoydate: -0.6
      }],
      // 表头数据
      tableConfig: [{
        id: 100,
        label: '客户名称',
        prop: 'unit_name',
        children: []
      },
      {
        id: 200,
        label: '装车数',
        prop: '',
        children: [{
          id: 210,
          label: '当期(车)',
          prop: 'trip_sum',
          children: []
        }, {
          id: 210,
          label: '日均(车)',
          prop: 'trip_avg',
          children: []
        }, {
          id: 210,
          label: '同比%',
          prop: 'trip_yoydate',
          children: []
        }]
      },
      {
        id: 300,
        label: '货运总收入',
        prop: '',
        children: [{
          id: 310,
          label: '当期(万元)',
          prop: 'income_sum',
          children: []
        },
        {
          id: 310,
          label: '日均(万元)',
          prop: 'income_avg',
          children: []
        },
        {
          id: 310,
          label: '同比%',
          prop: 'income_yoydate',
          children: []
        }
        ]
      },
      {
        id: 400,
        label: '货运收入分类',
        prop: '',
        children: [{
          id: 310,
          label: '其中货运运费',
          prop: 'zxf',
          children: []
        },
        {
          id: 310,
          label: '装卸费',
          prop: 'jqsd',
          children: []
        },
        {
          id: 310,
          label: '接取送达',
          prop: 'hyqt',
          children: []
        },
        {
          id: 310,
          label: '货运其他',
          prop: 'jsjj',
          children: []
        },
        {
          id: 310,
          label: '建设基金',
          prop: 'zzl1',
          children: []
        }
        ]
      },
      {
        id: 500,
        label: '发送吨',
        prop: '',
        children: [{
          id: 310,
          label: '当期(万吨)',
          prop: 'ton_sum',
          children: []
        },
        {
          id: 310,
          label: '日均(万吨)',
          prop: 'ton_avg',
          children: []
        },
        {
          id: 310,
          label: '同比%',
          prop: 'ton_yoydate',
          children: []
        }
        ]
      },
      {
        id: 201,
        label: '装车数',
        prop: '',
        children: [{
          id: 210,
          label: '累计(万车)',
          prop: 'trip_sum',
          children: []
        }, {
          id: 210,
          label: '进度',
          prop: 'nzjf1',
          children: []
        }, {
          id: 210,
          label: '倒排日均(车)',
          prop: 'nysjd',
          children: []
        }]
      }
      ]
    }
  },
  methods: {
    // 服务类型改变的时候，需要重新请求表头信息和表格数据
    handleServiceCategoryChange (val) {
      // 设置dynamicTableShow为false，使得DynamicTable组件重新渲染
      this.dynamicTableShow = false
      if (val === '1') {
        this.tableData = [{
          districtName: '1',
          timeDimension: '2',
          residentPopNum: '3',
          residentPopDst: '4',
          liveLandArea: '5',
          liveLandDst: '6',
          employmentLandArea: '7',
          employmentLandDst: '8'
        }]
        this.tableConfig = [{
          id: 100,
          label: '一级表头',
          prop: '',
          children: [{
            id: 110,
            label: '二级表头1',
            prop: 'districtName'
          },
          {
            id: 120,
            label: '二级表头2',
            prop: 'timeDimension'
          }
          ]
        },
        {
          id: 205,
          label: '一级表头1',
          prop: '',
          children: [{
            id: 210,
            label: '二级表头2',
            prop: '',
            children: [{
              id: 211,
              label: '三级表头3',
              prop: 'residentPopNum'
            },
            {
              id: 212,
              label: '三级表头',
              prop: 'residentPopDst'
            }
            ]
          }]
        },
        {
          id: 600,
          label: '一级表头1',
          prop: '',
          children: [{
            id: 310,
            label: '二级表头2',
            prop: '',
            children: [{
              id: 311,
              label: '三级表头3',
              prop: 'liveLandArea'
            },
            {
              id: 312,
              label: '三级表头3',
              prop: 'liveLandDst'
            }
            ]
          },
          {
            id: 320,
            label: '二级表头1',
            prop: '',
            children: [{
              id: 321,
              label: '三级表头3',
              prop: 'employmentLandArea'
            },
            {
              id: 322,
              label: '三级表头3',
              prop: 'employmentLandDst'
            }
            ]
          }
          ]
        }
        ]
      } else {
        this.tableData = [{
          districtName: '111',
          timeDimension: '222'
        }]
        this.tableConfig = [{
          id: 100,
          label: '一级表头',
          prop: '',
          children: [{
            id: 110,
            label: '二级表头1',
            prop: 'districtName'
          },
          {
            id: 120,
            label: '二级表头2',
            prop: 'timeDimension'
          }
          ]
        }]
      }
      // 此处是DOM还没有更新，此处的代码是必须的
      this.$nextTick(() => {
        // DOM 现在更新了
        this.dynamicTableShow = true
      })
    }
  }
}
</script>

<style scoped>
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
