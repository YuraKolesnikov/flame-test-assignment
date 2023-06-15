<template>
	<div>
    <v-user-card :user="userData" :is-favorite="isCurrentUserFavorite" @toggle-favorite="onToggleFavorite" />
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
		if (!!this.id) {
      await this.getUserInfo({ id: this.id })
		}
	},
  unmounted() {
	  this.setUserData()
  }
})
</script>
