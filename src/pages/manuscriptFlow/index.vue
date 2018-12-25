<template>
    <div class="clearfix">
        <div class="search-wrap">
            <search-input :searchForm="searchForm"
                          :allTypes="allTypes"
                          :showKeyWords="false"
                          @sendFormData="getFormData">
            </search-input>
        </div>
        <div class="tab-bar">
            <template>
                <el-menu class="el-menu-demo"
                         :router="true"
                         :default-active="$route.path"
                         mode="horizontal"
                         @select="handleSelect">
                    <el-menu-item v-for="item in tabTitleList"
                                  :route='{ path: item.path }'
                                  :key="item.id"
                                  :index="item.path">
                        {{item.name}}</el-menu-item>
                </el-menu>
            </template>
        </div>
        <div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>
<script>
import searchInput from '@/components/searchConditions/searchInput.vue'
export default {
    components: {
        searchInput
    },
    data () {
        return {
            tabTitleList: [
                {
                    id: '1-1',
                    name: '个人稿件',
                    path: '/manuscriptFlow/person'

                },
                {
                    id: '1-2',
                    name: '媒体公共稿件',
                    path: '/manuscriptFlow/media'

                },
                {
                    id: '1-3',
                    name: '组室公共稿件',
                    path: '/manuscriptFlow/group'

                },
                {
                    id: '1-4',
                    name: '其他人员稿件',
                    path: '/manuscriptFlow/other'

                },
                {
                    id: '1-5',
                    name: '版面稿件',
                    path: '/manuscriptFlow/page'

                },
                {
                    id: '1-6',
                    name: '栏目稿件',
                    path: '/manuscriptFlow/column'

                },
                {
                    id: '1-7',
                    name: '专题稿件',
                    path: '/manuscriptFlow/special'

                }
            ],
            searchForm: {
                dateValue: '',
                checkAll: false,
                checkedTypes: ['文本', '图片'],
                isIndeterminate: true
            },
            allTypes: ['文本', '图片', '图表', '视频', '音频', '应用']
        }
    },
    mounted () {

    },
    methods: {
        getFormData (data) {
            console.log('获得自组件的搜索框数据', data)
        },
        handleSelect () {
        }
    }
}
</script>
<style lang="scss" scoped>
.search-wrap {
    padding-top: 10px;
    height: 50px;
    background-color: #f5f5f5;
}
.tab-bar {
    padding: 10px 0 0 10px;
}
.el-menu--horizontal > .el-menu-item {
    height: 30px;
    line-height: 30px;
}
</style>
