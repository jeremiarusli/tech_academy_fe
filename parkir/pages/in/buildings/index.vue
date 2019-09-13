<template>
  <div>
    <h1> Buildings </h1>
    {{ data }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'building/buildingData',
      status: 'building/buildingStatus',
      message: 'building/buildingMessage'
    })
  },
  async mounted () {
    await this.$store.dispatch('building/FETCH_BUILDINGS')
  }
}

</script>
