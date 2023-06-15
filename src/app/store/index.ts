import { createStore } from 'vuex'
import { api, getUserId } from '@/shared/lib'

const store = createStore({
  state() {
    return {
      users: [],
      favorites: []
    }
  },
  getters: {
    favoriteIds: state => state.favorites.reduce((acc, curr) => {
      acc.push(curr.id)
      return acc
    }, [])
  },
  mutations: {
    setUsers: (state, users) => state.users = [...users],
    setFavorites: (state, favorites) => state.favorites = [...favorites],
    toggleFavorite: (state, user) => {
      if (state.favorites.some(item => item.id === user.id)) {
        console.log('SHOULD DELETE')
        state.favorites = state.favorites.filter(f => f.id !== user.id)
      } else {
        console.log('SHOULD ADD')
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
    }
  }
})

export default store
