<template>
  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    <slot />
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'v-body-cell'
})
</script>
