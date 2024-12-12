<script setup lang="ts">
import { Button, InputGroup, InputGroupAddon, InputText, Menu } from 'primevue'
import { ref } from 'vue'

const props = defineProps<{
  title: string
}>()

const emits = defineEmits<{
  (e: 'search', value: string): void
}>()

const search = ref('')

const handleSearch = () => {
  emits('search', search.value)
}
</script>

<template>
  <header class="border-b">
    <div class="p-4 flex items-center justify-between">
      <h2 class="font-bold text-2xl">{{ props.title }}</h2>

      <div class="flex w-full max-w-96 items-center gap-4 justify-end">
        <InputGroup>
          <InputText placeholder="Search by title..." size="small" v-model="search" />
          <InputGroupAddon>
            <Button
              size="small"
              icon="pi pi-search"
              severity="secondary"
              variant="text"
              @click="handleSearch"
            />
          </InputGroupAddon>
        </InputGroup>

        <div>
          <Button icon="pi pi-cog" severity="secondary" variant="text" />
        </div>
      </div>
    </div>
  </header>
</template>
