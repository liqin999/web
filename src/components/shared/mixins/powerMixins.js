/**
 * 1.混入：类似于父类，主要用来写vue的共通业务逻辑或拦截权限判断
 * 2.混入中可写一个‘vue’文件中，所有script 代码
 * 3.混入的生命周期，高于引入混入文件的生命周期。会优先执行
 * 4.混入中生命的方法变量会被覆盖，建议命名带有特殊标识，以免被覆盖
 * 5.支持多混入，extends 引入混入优先级最高，mixins [] 中可以写多个混入
 */
export default {
    data () {
        return {
            pm_power: '混入定义字段',
            pm_showChoose: false
        }
    },
    mounted () {
        this.pm_toggleShow()
    },
    methods: {
        pm_toggleShow () {
            this.pm_showChoose = !this.pm_showChoose
        }
    }
}
