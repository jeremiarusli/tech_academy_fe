import * as types from './buildingTypes'

export default {
  async [types.FETCH_BUILDINGS] ({ commit }, query = {}) {
    commit(types.FETCH_BUILDINGS)

    await this.$axios.get('/api/v1/buildings/').then((response) => {
      if (response.status === 200) {
        commit(types.FETCH_BUILDINGS_SUCCESS, response.data)
      } else {
        commit(types.FETCH_BUILDINGS_ERROR, response.status)
      }
    })
  }
}
