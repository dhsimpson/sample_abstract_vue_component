<template>
    <filter-area/>
</template>

<script>
// import FilterArea from './components/beforeRefactor/FilterArea.vue'
import FilterArea from './components/afterRefactor/FilterArea.vue'
export default {
  name: 'App',
  components: {
      FilterArea
  }
}
</script>