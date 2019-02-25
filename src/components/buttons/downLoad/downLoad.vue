<template>
    <div class="btn-nav">
        <slot name="icon"></slot>
        <span @click="downLoad">
            <slot name="iconName"></slot>
        </span>
    </div>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
        }
    },
    methods: {
        // 下载文件
        downLoad (data) {
            if (!data) {
                return
            }
            let url = window.URL.createObjectURL(new Blob([data]))
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('downLoad', '千年古镇里走中药种植路.txt')

            document.body.appendChild(link)
            link.click()
        }
    }
}
</script>
