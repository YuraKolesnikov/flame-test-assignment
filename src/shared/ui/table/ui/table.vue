<template>
  <div class="min-w-full shadow-md rounded-lg leading-normal overflow-hidden my-4">
    <table class="min-w-full">
      <thead>
      <slot name="head" />
      </thead>
      <tbody>
      <slot name="body" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'v-table'
})
</script>
