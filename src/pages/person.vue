<template>
	<div>
		<h1>Component with ID: {{ id }}</h1>
    {{ userData }}
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

import { api } from '@/shared/lib'

export default defineComponent({
	name: 'MyComponent',
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
	    userData: {}
    }
  },
	async mounted() {
		if (!!this.id) {
      this.userData = { ...await api.get(`people/${this.id}`) }
		}
	}
})
</script>
