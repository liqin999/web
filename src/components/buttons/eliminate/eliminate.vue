<template>
  <div class="primary-btn">
    <span @click="eliminateConcatIcon()">
      <slot name="iconName"></slot>
    </span>
  </div>
</template>
<script>
export default {
    // props: {
    //     data: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
        eliminateConcatIcon () {
            this.$confirm('你确定要淘汰吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '淘汰成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消淘汰'
                })
            })
        }
    }
}
</script>
