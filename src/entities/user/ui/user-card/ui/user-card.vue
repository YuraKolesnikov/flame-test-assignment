<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-center">
      <h1 class="text-3xl font-bold mr-3">{{ isLoading ? 'Searching across the galaxy...' : user.name }}</h1>
      <v-favorite-button v-if="!isLoading" :is-favorite="isFavorite" @toggleFavorite="$emit('toggle-favorite')" />
    </div>
    <div class="grid grid-cols-2 gap-8 mt-8">
      <div class="col-span-2 sm:col-span-1">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold">General Information</h2>
          <div v-if="!isLoading" class="mt-4">
            <p><span class="font-bold">Birth Year:</span> {{ user.birth_year }}</p>
            <p><span class="font-bold">Gender:</span> {{ user.gender }}</p>
            <p><span class="font-bold">Eye Color:</span> {{ user.eye_color }}</p>
            <p><span class="font-bold">Hair Color:</span> {{ user.hair_color }}</p>
            <p><span class="font-bold">Skin Color:</span> {{ user.skin_color }}</p>
          </div>
          <div class="animate-pulse" v-else>
            <div class="w-1/2 py-5">
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="col-span-4 bg-gray-200 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2 sm:col-span-1">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold">Physical Attributes</h2>
          <div v-if="!isLoading" class="mt-4">
            <p><span class="font-bold">Height:</span> {{ user.height }} cm</p>
            <p><span class="font-bold">Mass:</span> {{ user.mass }} kg</p>
            <p><span class="font-bold">Hair Color:</span> {{ user.hair_color }}</p>
            <p><span class="font-bold">Eye Color:</span> {{ user.eye_color }}</p>
          </div>
          <div class="animate-pulse" v-else>
            <div class="w-3/4 py-5">
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="col-span-4 bg-gray-200 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold">Starships</h2>
          <div v-if="!isLoading" class="mt-4">
            <ul>
              <li v-for="starship in user.starships" :key="starship">
                <a :href="starship" class="text-blue-600 hover:underline">{{ starship }}</a>
              </li>
            </ul>
          </div>
          <div class="animate-pulse" v-else>
            <div class="w-80 py-5">
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="col-span-4 bg-gray-200 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold">Vehicles</h2>
          <div v-if="!isLoading" class="mt-4">
            <ul>
              <li v-for="vehicle in user.vehicles" :key="vehicle">
                <a :href="vehicle" class="text-blue-600 hover:underline">{{ vehicle }}</a>
              </li>
            </ul>
          </div>
          <div class="animate-pulse" v-else>
            <div class="w-80 py-5">
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="col-span-4 bg-gray-200 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold">Films</h2>
          <div v-if="!isLoading" class="mt-4">
            <ul>
              <li v-for="film in user.films" :key="film">
                <a :href="film" class="text-blue-600 hover:underline">{{ film }}</a>
              </li>
            </ul>
          </div>
          <div class="animate-pulse" v-else>
            <div class="w-80 py-5">
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="mb-4 col-span-4 bg-gray-200 h-4 rounded"></div>
              <div class="col-span-4 bg-gray-200 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { VFavoriteButton } from '@/shared/ui'

export default defineComponent({
  name: 'v-user-card',
  components: {
    VFavoriteButton
  },
  props: {
    user: Object,
    isLoading: Boolean,
    isFavorite: Boolean
  }
})
</script>
