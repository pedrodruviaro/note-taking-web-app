<script setup lang="ts">
import Main from '@/components/Main.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

import { onMounted, ref } from 'vue'
import type { MenuItemCommandEvent } from 'primevue/menuitem'
import { useNotesStore } from '@/stores/notes'

const pages = ref([
  {
    label: 'All Notes',
    icon: 'pi pi-home',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeScreen('all')
    },
  },
  {
    label: 'Archived Notes',
    icon: 'pi pi-box',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeScreen('archived')
    },
  },
])

const tags = ref([
  {
    label: 'Cooking',
    icon: 'pi pi-tag',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeFilter('cooking')
    },
  },
  {
    label: 'Dev',
    icon: 'pi pi-tag',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeFilter('dev')
    },
  },
  {
    label: 'Fitness',
    icon: 'pi pi-tag',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeFilter('fitness')
    },
  },
  {
    label: 'Personal',
    icon: 'pi pi-tag',
    command: (event: MenuItemCommandEvent) => {
      handleSetListInfos(event)
      handleChangeFilter('personal')
    },
  },
])

const currentTitle = ref('All Notes')

const handleChangeScreen = (type: 'all' | 'archived') => {
  notesStore.getAll(type)
}

const handleChangeFilter = (filter: string) => {
  console.log(filter)

  // se clicar em um filtro, faço a filter no state atual (não faço refetch)
  // call store filter
}

const handleSetListInfos = (event: MenuItemCommandEvent) => {
  const { label } = event.item

  currentTitle.value = (label as string) || ''
}

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.getAll('all')
})
</script>

<template>
  <div class="grid grid-cols-[1fr_5fr] min-h-screen">
    <Sidebar :pages :tags />
    <div>
      <Header :title="currentTitle" @search="(v: string) => console.log(v)" />
      <Main :notes="notesStore.notes" />
    </div>
  </div>
</template>
