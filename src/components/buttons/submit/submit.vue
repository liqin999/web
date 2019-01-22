<template>
  <div class="primary-btn">
    <span @click="sendConcatIcon()">
      <slot name="iconName"></slot>
    </span>
  </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
        sendConcatIcon () {
            this.$confirm('你确定要提交吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '提交成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消提交'
                })
            })
        }
    }
}
</script>
