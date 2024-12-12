<script setup lang="ts">
import { Menu } from 'primevue'
import type { MenuItem } from 'primevue/menuitem'

const props = defineProps<{
  pages: MenuItem[]
  tags: MenuItem[]
}>()
</script>

<template>
  <aside class="border-r">
    <div class="p-6 pl-8">
      <span class="text-3xl font-mono">
        <i class="pi pi-pencil text-xl text-green-600"></i>
        Notes</span
      >
    </div>

    <div class="p-4">
      <Menu :model="props.pages" style="border: none" />
      <div class="border-b"></div>
      <span class="font-semibold text-gray-400 m-4 mb-2 block">Tags</span>
      <Menu :model="props.tags" style="border: none" />
    </div>
  </aside>
</template>
