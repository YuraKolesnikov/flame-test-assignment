import { createStore } from 'vuex'
import { api, getUserId } from '@/shared/lib'

const store = createStore({
  state() {
    return {
      users: [],
      favorites: [],
      userData: {}
    }
  },
  getters: {
    favoriteIds: state => state.favorites.reduce<number[]>((acc, curr) => {
      acc.push(curr.id)
      return acc
    }, []),
    isCurrentUserFavorite: state => {
      return state.favorites.some(item => item.id === state.userData.id)
    }
  },
  mutations: {
    setUsers: (state, users) => state.users = [...users],
    setFavorites: (state, favorites) => state.favorites = [...favorites],
    setUserData: (state, data) => state.userData = { ...data },
    toggleFavorite: (state, user) => {
      if (state.favorites.some(item => item.id === user.id)) {
        state.favorites = state.favorites.filter(f => f.id !== user.id)
      } else {
        state.favorites.push(user)
      }
    }
  },
  actions: {
    getUsers: async ({ commit }) => {
      const response = await api.get('/people')
      commit('setUsers', [...response?.data?.results.map(i => ({
        id: getUserId(i.url),
        ...i
      }))])
    },
    getUserInfo: async({ commit }, { id }) => {
      const response = { ...(await api.get(`people/${id}`))?.data, id }
      commit('setUserData', response)
    }
  }
})

export default store
