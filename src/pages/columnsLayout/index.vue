<template>
    <div>
       <send-draft>
           <span slot="iconName">传稿</span>
       </send-draft>
       <issuance>
           <span slot="iconName">签发</span>
       </issuance>
    </div>
</template>
<script>
import sendDraft from "@/components/buttons/sendDraft/sendDraft"
import issuance from "@/components/buttons/issuance/issuance"
export default {
    components: {
        sendDraft,
        issuance
    },
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
</style>
<style>

</style>



