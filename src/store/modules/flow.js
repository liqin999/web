const flow = {
    state: {
        dateValue: '', // 选中的日期
        checkedTypes: [] // 选中的搜索条件
    },
    mutations: {
        CHANGE_CUE_DATE (state, data) {
            state.dateValue = data
        },
        CHANGE_CUE_TYPES: (state, data) => {
            state.checkedTypes = data
        }
    },
    actions: {
        changeCurDate ({
            state,
            commit
        }, data) {
            commit('CHANGE_CUE_DATE', data)
        },

        checkedCurTypes ({
            state,
            commit
        }, data) {
            commit('CHANGE_CUE_TYPES', data)
        }

    }
}

export default flow
