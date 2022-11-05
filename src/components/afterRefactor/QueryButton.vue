<template>
    <button class="query-button" @click="queryProductList()">리스트 새로 쿼리하기</button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            filterList: 'GET_FILTER_LIST',
        })
    },
    methods: {
        queryProductList() {
            let alertMsg = '';
            for(let [filter, value] of this.filterList) {
                alertMsg += this.newMsg(filter, value);
            }
            alert(alertMsg)
        },
        newMsg(filter, value) {
            let tempMsg = `필터명 :${filter}`;
            if(value) {
                tempMsg += ` | 필터값 : ${value}`;
            }
            return tempMsg + '\n';
        }
    },

}
</script>

<style scoped>
.query-button {
    background-color: pink;
}
</style>