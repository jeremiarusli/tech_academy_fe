<template>
  <div>
    <h1> Transactions </h1>
    {{ data }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'transaction/transactionData',
      status: 'transaction/transactionStatus',
      message: 'transaction/transactionMessage'
    })
  },
  async mounted () {
    await this.$store.dispatch('transaction/FETCH_TRANSACTIONS')
  }
}

</script>
