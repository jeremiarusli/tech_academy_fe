<template>
  <div>
    <h1> Edit Buildings </h1>
    <el-form label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="name" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item class="float-right">
        <nuxt-link :to="'/in/buildings/'">
          <el-button round>
            Cancel
          </el-button>
        </nuxt-link>
        <el-button round type="primary" @click="save()">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: ''
  }),

  async mounted () {
    await this.fetchBuilding(this.$route.params.building_id)
  },

  methods: {
    async fetchBuilding (id) {
      const detail = await this.$store.dispatch('building/DETAIL_BUILDINGS', { id })
      this.name = detail.name
    },
    save () {
      return 1
    }
  }
}

</script>
