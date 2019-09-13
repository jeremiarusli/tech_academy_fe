<template>
  <div>
    <h1> Buildings </h1>
    <div class="mb-4">
      Total : {{ data.total }}
      <nuxt-link :to="'/in/buildings/new'">
        <el-button type="primary" class="float-right">
          Tambah Baru
        </el-button>
      </nuxt-link>
    </div>
    <el-table
      :data="data.data"
      style="width: 100%"
      class="mt-4"
    >
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="80"
      />
      <el-table-column
        prop="name"
        label="Name"
      />
      <el-table-column
        width="120"
      >
        <template
          slot="header"
        >
          Aksi
        </template>
        <template
          slot-scope="scope"
          class="text-center"
        >
          <el-dropdown>
            <span class="el-dropdown-link">
              Aksi<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="handleUpdate(scope.$index)">
                Update
              </el-dropdown-item>
              <el-dropdown-item>Slots</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
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
  },
  methods: {
    handleUpdate (id) {
      alert(id)
    }
  }
}

</script>
