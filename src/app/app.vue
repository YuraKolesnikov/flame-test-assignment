<template>
  <header class="shadow-xl">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/peoples">Peoples</RouterLink>
			<RouterLink to="/favorites">Favorites</RouterLink>
		</nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
