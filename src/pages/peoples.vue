<template>
  <section>
    <h2 class="text-2xl font-semibold leading-tight mb-8">Peoples</h2>
    <v-search-dropdown />
    <v-user-table :users="users" :is-loading="isLoading" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { mapState, mapGetters, mapActions } from 'vuex'

import { VUserTable } from '@/entities/user'
import { VSearchDropdown } from '@/features'

export default defineComponent({
	name: 'peoples',
  components: {
    RouterLink,
    VUserTable,
    VSearchDropdown
  },
  data() {
	  return {
	    isLoading: false
    }
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  computed: {
    ...mapState(['users']),
    ...mapGetters(['favoriteIds'])
  },
	async mounted() {
	  if (this.users.length === 0) {
      this.isLoading = true
    }
    await this.getUsers()
    this.isLoading = false
	}
})
</script>
