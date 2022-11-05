export default {
    FETCH_FILTER_LIST: ({commit}) => {
        const filterButtonList = [
            {
                name: 'md-products',
                value: 'MD추천상품'
            },
            {
                name: 'good-review-products',
                value: '리뷰 평점 4.0 이상 상품'
            }
        ]
        commit('SET_FILTER_BUTTON_LIST', filterButtonList)
    }
}