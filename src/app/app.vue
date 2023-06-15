<template>
  <header class="shadow-xl w-full md:flex md:items-center md:w-auto">
		<nav class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
			<router-link class="md:p-4 py-2 block hover:text-purple-400" class-active="text-purple-400" to="/">Home</router-link>
			<router-link class="md:p-4 py-2 block hover:text-purple-400" class-active="text-purple-400" to="/peoples">Peoples</router-link>
			<router-link class="md:p-4 py-2 block hover:text-purple-400" class-active="text-purple-400" to="/favorites">Favorites</router-link>
		</nav>
  </header>

  <main class="container mx-auto mt-14 px-4 sm:px-8">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { mapMutations, mapState } from 'vuex'

import { browserStorage } from '@/shared/lib'

export default defineComponent({
  name: 'app',
  methods: {
    ...mapMutations(['setFavorites'])
  },
  computed: {
    ...mapState(['favorites'])
  },
  mounted() {
    this.setFavorites(browserStorage.get('favorites'))
  },
  watch: {
    favorites: {
      handler(newValue) {
        browserStorage.set('favorites', newValue.sort((a, b) => a.id > b.id ? 1 : -1))
      },
      deep: true
    }
  },
})
</script>
