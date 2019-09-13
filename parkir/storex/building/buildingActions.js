import * as types from './buildingTypes'

export default {
  async [types.FETCH_BUILDINGS] ({ commit }, query = {}) {
    commit(types.FETCH_BUILDINGS)
    try {
      const response = await this.$axios.get('/api/v1/buildings/')
      if (response.status === 200) {
        commit(types.FETCH_BUILDINGS_SUCCESS, { data: response.data.data, total: response.data.data.length })
      } else {
        commit(types.FETCH_BUILDINGS_ERROR, response.data.status)
      }
    } catch (err) {
      commit(types.FETCH_BUILDINGS_ERROR, err)
    }
  },

  async [types.ADD_BUILDINGS] ({ commit }, data = {}) {
    commit(types.ADD_BUILDINGS)

    try {
      const response = await this.$axios.post('/api/v1/buildings/', data)
      if (response.status === 200) {
        commit(types.ADD_BUILDINGS_SUCCESS, response.data.data)
        return response.data.data
      } else {
        commit(types.ADD_BUILDINGS_ERROR, response.data.status)
      }
    } catch (err) {
      commit(types.ADD_BUILDINGS_ERROR, err)
    }
  },

  async [types.DETAIL_BUILDINGS] ({ commit }, data = {}) {
    commit(types.DETAIL_BUILDINGS)

    try {
      const response = await this.$axios.get(`/api/v1/buildings/${data.id}`)
      if (response.status === 200) {
        commit(types.DETAIL_BUILDINGS_SUCCESS, response.data.data)
        return response.data.data
      } else {
        commit(types.DETAIL_BUILDINGS_ERROR, response.data.status)
      }
    } catch (err) {
      commit(types.DETAIL_BUILDINGS_ERROR, err)
    }
  },

  async [types.UPDATE_BUILDINGS] ({ commit }, data = {}) {
    commit(types.UPDATE_BUILDINGS)

    try {
      const response = await this.$axios.put(`/api/v1/buildings/${data.id}`, data)
      if (response.status === 200) {
        commit(types.UPDATE_BUILDINGS_SUCCESS, response.data.data)
        return response.data.data
      } else {
        commit(types.UPDATE_BUILDINGS_ERROR, response.data.status)
      }
    } catch (err) {
      commit(types.UPDATE_BUILDINGS_ERROR, err)
    }
  }
}
