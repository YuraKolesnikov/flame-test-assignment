<template>
  <th :class="classList">
    <slot />
  </th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'v-head-cell',
  props: {
    actionCell: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classes = 'px-5 py-3 border-b-2 border-gray-200 bg-gray-100'
      if (!this.actionCell) {
        classes += ' text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'
      }

      return classes
    }
  }
})
</script>
