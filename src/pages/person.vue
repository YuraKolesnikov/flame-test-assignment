<template>
	<div>
    <v-user-card :user="userData" :is-favorite="isCurrentUserFavorite" :is-loading="isLoading" @toggle-favorite="onToggleFavorite" />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import { VUserCard } from '@/entities/user'

export default defineComponent({
	name: 'MyComponent',
  components: {
    VUserCard
  },
	setup() {
		const router = useRouter()
		const id = computed(() => {
			return router.currentRoute.value.params.id
		})

		return {
			id,
		}
	},
  data() {
	  return {
	    isLoading: false
    }
  },
  computed: {
	  ...mapState(['userData']),
    ...mapGetters(['isCurrentUserFavorite'])
  },
  methods: {
	  ...mapMutations(['toggleFavorite', 'setUserData']),
	  ...mapActions(['getUserInfo']),
    onToggleFavorite() {
	    this.toggleFavorite(this.userData)
    }
  },
	async mounted() {
	  this.isLoading = true
		if (!!this.id) {
      await this.getUserInfo({ id: this.id })
      this.isLoading = false
		}
	},
  unmounted() {
	  this.setUserData()
  }
})
</script>
