<template>
  <v-loader v-if="isLoading" />
  <v-table v-else-if="!isLoading && users.length > 0">
    <template v-slot:head>
      <v-head-cell>Name</v-head-cell>
      <v-head-cell>Height</v-head-cell>
      <v-head-cell>Mass</v-head-cell>
      <v-head-cell>Hair color</v-head-cell>
      <v-head-cell action-cell />
    </template>
    <template v-slot:body>
      <tr v-for="user in users" :key="user.id">
        <v-body-cell>
          <RouterLink class="hover:underline" :to="`/peoples/${user.id}`">{{ user.name }}</RouterLink>
        </v-body-cell>
        <v-body-cell>{{ user.height }}</v-body-cell>
        <v-body-cell>{{ user.mass }}</v-body-cell>
        <v-body-cell>{{ user.hair_color }}</v-body-cell>
        <v-body-cell>
          <v-favorite-button :is-favorite="favoriteIds.includes(user.id)" @toggle-favorite="toggleFavorite(user)" />
        </v-body-cell>
      </tr>
    </template>
  </v-table>
  <div v-else>No data available</div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapMutations, mapState, mapGetters } from 'vuex'
import { RouterLink } from 'vue-router'

import { VTable, VHeadCell, VBodyCell, VLoader, VFavoriteButton } from '@/shared/ui'
import { browserStorage } from '@/shared/lib'

export default defineComponent({
  name: 'v-user-table',
  props: {
    users: Array,
    isLoading: Boolean,
  },
  components: {
    RouterLink,
    VTable,
    VHeadCell,
    VBodyCell,
    VLoader,
    VFavoriteButton
  },
  methods: {
    ...mapMutations(['toggleFavorite'])
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['favoriteIds'])
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
