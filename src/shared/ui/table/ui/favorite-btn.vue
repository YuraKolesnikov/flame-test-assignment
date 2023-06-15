<template>
  <button @click="handleClick">
    <svg
      :class="svgClassList"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path
        stroke="none"
        d="M0 0h24v24H0z"/>
      <path
        id="inner"
        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'v-favorite-button',
  props: {
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('toggleFavorite', !this.isFavorite)
    }
  },
  computed: {
    svgClassList() {
      return `h-8 w-8 text-black fill-none stroke-none v-favorite-btn ${!!this.isFavorite && 'v-favorite-btn--active'}`
    }
  }
})
</script>

<style>
.v-favorite-btn {
  fill: none;
  transition: fill .1s ease-in-out;
}

.v-favorite-btn #inner {
  transition: stroke .2s ease-in-out;
}

.v-favorite-btn.v-favorite-btn--active {
  stroke: #fef08a;
}

.v-favorite-btn.v-favorite-btn--active #inner {
  fill: #fef08a;
}
</style>
