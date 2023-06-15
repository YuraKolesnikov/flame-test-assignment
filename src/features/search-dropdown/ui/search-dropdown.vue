<template>
  <div class="relative inline-block text-left">
    <div class="relative">
      <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input
        :value="searchVal"
        @focus="setDropdown(true)"
        @input="handleInput"
        type="search"
        id="default-search"
        :class="inputClassList"
        placeholder="In the far far galaxy...">
    </div>
    <div v-if="isDropdownOpen" class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg">
      <div class="rounded-md bg-white shadow-xs">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <span v-if="predictionsLoading" :class="optionClassList">Loading...</span>
          <div v-else>
            <router-link
              v-for="p in predictions"
              :to="`/peoples/${p.id}`"
              :class="optionClassList">
              {{ p.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import debounce from 'debounce'

import { api, getUserId } from '@/shared/lib'

export default defineComponent({
  name: 'v-search-dropdown',
  data() {
    return {
      searchVal: '',
      isDropdownOpen: false,
      predictionsLoading: false,
      predictions: []
    }
  },
  methods: {
    handleInput: debounce(function({ target: { value } }) {
      this.predictionsLoading = true
      this.searchVal = value
      api.get(`/people/?search=${value}`)
        .then(res => this.predictions = [...res.data.results].map(p => ({
          id: getUserId(p.url),
          name: p.name,
        })))
        .finally(() => this.predictionsLoading = false)
    }, 500),
    setDropdown(newState) {
      this.isDropdownOpen = newState
    }
  },
  computed: {
    inputClassList() {
      return 'block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    },
    optionClassList() {
      return 'font-bold block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
    }
  }
})
</script>
