<template>
    <button class="filter-button" @click="updateFilter(filter.name)">{{filter.value}}</button>
</template>

<script>
export default {
    props: ['filter'],
    methods: {
        updateFilter(filter) {
            this.$store.commit('ADD_FILTER', {filter});
        },
    }
}
</script>
<style scoped>
.filter-button {
    background-color: yellow;
}
</style>