<template>
    <div class="filter_wrapper">
        <span>상품 필터를 선택해 주세요</span>
        <filter-button v-for="filter in filterButtonList" :key="filter.name" :filter="filter"/>
        <price-filter/>
        <br/>
    </div>
    <p>현재 적용된 필터들 : {{filterList}}</p>
    <query-button/>
</template>

<script>
import FilterButton from './FilterButton.vue';
import { mapGetters } from 'vuex';
import PriceFilter from './PriceFilter.vue';
import QueryButton from './QueryButton.vue';

export default {
    components: { FilterButton, PriceFilter, QueryButton },
    created() {
        this.$store.dispatch('FETCH_FILTER_LIST');
    },
    computed: {
        ...mapGetters({
            filterList: 'GET_FILTER_LIST',
            filterButtonList: 'GET_FILTER_BUTTON_LIST',
        })
    }
}
</script>
<style scoped>
.filter_wrapper > * {
    display: block;
    margin: 10px 0;
}
</style>