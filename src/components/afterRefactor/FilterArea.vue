<template>
    <div class="filter_wrapper">
        <span>상품 필터를 선택해 주세요</span>
        <button v-for="filter in filterButtonList" :key="filter.name" class="filter-button" @click="updateFilter(filter.name)">{{filter.value}}</button>
        <div>
            <input type="number" placeholder="가격입력" v-model="price"/>원 미만 <button @click="updatePriceFilter()">적용하기</button>
        </div>
        <br/>
    </div>
    <p>{{filterList}}</p>
    <button class="query-button" @click="queryProductList()">리스트 새로 쿼리하기</button>
</template>

<script>
export default {
    data() {
        return {
            price: null,
            filterList: new Map(),
            filterButtonList: [
                {
                    name: 'md-products',
                    value: 'MD추천상품'
                },
                {
                    name: 'good-review-products',
                    value: '리뷰 평점 4.0 이상 상품'
                }
            ]
        }
    },
    methods: {
        updateFilter(filter, value=null) {
            this.filterList.set(filter, value);
        },
        updatePriceFilter() {
            this.updateFilter('products-price', this.price);
        },
        queryProductList() {
            let alertMsg = '';
            for(let [filter, value] of this.filterList) {
                let tempMsg = `필터명 :${filter}`;
                if(value) {
                    tempMsg += ` | 필터값 : ${value}`;
                }
                alertMsg += tempMsg+'\n'
            }
            alert(alertMsg)
        }
    },
    watch: {
        price(newPrice) {
            newPrice
            // console.log(newPrice)
        }
    }
}
</script>
<style scoped>
.filter-button {
    background-color: yellow;
}
.query-button {
    background-color: pink;
}
.filter_wrapper > * {
    display: block;
    margin: 10px 0;
}
</style>