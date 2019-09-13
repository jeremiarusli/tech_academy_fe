<template>
  <div>
    <h1> Add New Buildings </h1>
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
  methods: {
    save () {
      const data = {
        name: this.name
      }
      this.$store.dispatch('building/ADD_BUILDINGS', data).then(() => {
        this.$router.push('/in/buildings')
      })
    }
  }
}

</script>
