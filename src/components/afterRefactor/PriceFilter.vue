<template>
    <div>
        <input type="number" placeholder="가격입력" v-model="price"/>원 미만 <button @click="updatePriceFilter()">적용하기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: null,
        }
    },
    methods: {
        updatePriceFilter() {
            this.$store.commit('ADD_FILTER', {filter: 'products-price', value: this.price});
        },
    },
    watch: {
        price(newPrice) {
            newPrice
            // console.log(newPrice)
        }
    }
    
}
</script>

<style>

</style>