import * as types from './buildingTypes'
export default {
  [types.FETCH_BUILDINGS] (state) {
    state.status = 'fetching'
    state.message = null
  },

  [types.FETCH_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'fetched'
    state.message = 'successfully'
    state.buildings = {
      data
    }
    event('storeX', types.FETCH_BUILDINGS_SUCCESS, types.FETCH_BUILDINGS)
  },

  [types.FETCH_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message

    event('storeX', types.FETCH_BUILDINGS_ERROR, types.FETCH_BUILDINGS)
  }
}
