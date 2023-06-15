<template>
  <section>
    <h2 class="text-2xl font-semibold leading-tight">Favorites</h2>
    <v-user-table :users="favorites" :is-loading="false" />
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapMutations } from 'vuex'

import { VUserTable } from '@/entities/user'
import { browserStorage } from '@/shared/lib'

export default defineComponent({
  name: 'favorites',
  components: {
    VUserTable
  },
  computed: {
    ...mapState(['favorites'])
  },
  methods: {
    ...mapMutations(['toggleFavorite', 'setFavorites'])
  },
  watch: {
    favorites: {
      handler(newValue) {
        browserStorage.set('favorites', newValue.sort((a, b) => a.id > b.id ? 1 : -1))
      },
      deep: true
    }
  },
  mounted() {
    this.setFavorites(browserStorage.get('favorites'))
  }
})
</script>
