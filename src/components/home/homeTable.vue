<template>
<div>
    <el-table
    :data="tableData3"
    style="width: 100%"
    height="380">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      showDate: "1534836832",
      tableData1: [
        {
          date: "2016-05-03",
          name: "变通",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "路通",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  // 如果页面中不显示vuex中的值，则如下函数必须一起出项，才能实现监听变化
  // 兄弟组件间的通讯，需要两个组件同时处在活动状态，没有被销毁
  computed: {
    allDataShow() {
      console.log("计算属性showTable");
      if (this.$store.state.showTable===-1){
          this.$store.commit("setTab");
      }
      return this.$store.state.showTable;
    }
  },
  watch: {
    allDataShow(newy, oldy) {
      console.log(
        "监听属性，监听值得变化",
        "watch",
        "newy",
        newy,
        "oldy",
        oldy
      );
      this.tableData3 = this.tableData1;
    }
  },
  mounted(){

  },
  created() {
    // 通过eventBus 接收传值  
    Bus.$on('getTarget', target => {  
        console.log(target);  
    });  
  } 
};
</script>