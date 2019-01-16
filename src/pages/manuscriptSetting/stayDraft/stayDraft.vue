<template>
    <!-- 下载按钮 -->
    <div class= "btn-nav">
        <slot name="icon"></slot>
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/">
            <el-button class="primary-btn">留稿</el-button>
        </el-upload>
    </div>

</template>

<script>

export default {
    components: {

    },
    data () {
        return {

        }
    }
}
</script>
