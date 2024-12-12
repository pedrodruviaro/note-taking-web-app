<script setup lang="ts">
import {
  Badge,
  Button,
  InputGroup,
  InputGroupAddon,
  InputText,
  Menu,
  ScrollPanel,
  Textarea,
} from 'primevue'

import { ref } from 'vue'

const pages = ref([
  { label: 'All Notes', icon: 'pi pi-home' },
  { label: 'Archived Notes', icon: 'pi pi-box' },
])

const tags = ref([
  {
    label: 'Tags',
    items: [
      {
        label: 'Cooking',
        icon: 'pi pi-tag',
      },
      {
        label: 'Dev',
        icon: 'pi pi-tag',
      },
      {
        label: 'Fitness',
        icon: 'pi pi-tag',
      },
      {
        label: 'Personal',
        icon: 'pi pi-tag',
      },
    ],
  },
])
</script>

<template>
  <div class="grid grid-cols-[1fr_5fr] min-h-screen">
    <aside class="border-r">
      <div class="p-6 pl-8">
        <span class="text-3xl font-mono">
          <i class="pi pi-pencil text-xl text-green-600"></i>
          Notes</span
        >
      </div>

      <div class="p-4">
        <Menu :model="pages" style="border: none" />

        <div class="border-b"></div>

        <Menu :model="tags" style="border: none" />
      </div>
    </aside>

    <div>
      <header class="border-b">
        <div class="p-4 flex items-center justify-between">
          <h2 class="font-bold text-2xl">All Notes</h2>

          <div class="flex w-full max-w-96 items-center gap-4 justify-end">
            <InputGroup>
              <InputText placeholder="Search by title..." size="small" />
              <InputGroupAddon>
                <Button size="small" icon="pi pi-search" severity="secondary" variant="text" />
              </InputGroupAddon>
            </InputGroup>

            <div>
              <Button icon="pi pi-cog" severity="secondary" variant="text" />
            </div>
          </div>
        </div>
      </header>

      <main class="grid grid-cols-[1fr_2fr_1fr]">
        <div class="p-4 border-r flex flex-col gap-4">
          <Button label="Create New Note" icon="pi pi-plus" class="w-full" size="small" />

          <ScrollPanel class="w-full h-[700px]">
            <div
              class="p-2 mr-2 border-b flex flex-col gap-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer"
              v-for="i in 10"
            >
              <h3 class="text-lg font-bold">Vue Performance Optimization</h3>
              <div class="flex flex-wrap gap-1">
                <Badge value="Dev" severity="secondary" />
                <Badge value="Vue" severity="secondary" />
              </div>
              <p class="text-sm opacity-75">28 Oct 2024</p>
            </div>
          </ScrollPanel>
        </div>

        <div class="p-4 border-r flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <InputText
              class="w-full font-bold text-xl"
              type="text"
              value="Vue Performance Optimization"
            />

            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1">
                <i class="pi pi-tag text-sm opacity-75"></i>
                <span class="text-sm opacity-75">Tags: </span>
              </div>

              <p class="text-sm opacity-75">Dev, Vue</p>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1">
                <i class="pi pi-clock text-sm opacity-75"></i>
                <span class="text-sm opacity-75">Last edited: </span>
              </div>

              <div class="text-sm opacity-75">28 Oct 2024</div>
            </div>

            <div class="border-b"></div>

            <Textarea rows="20" class="h-full" />
          </div>

          <div class="border-b"></div>

          <div class="flex items-center gap-4">
            <Button label="Save Note" size="small" />
            <Button severity="secondary" label="Cancel" size="small" />
          </div>
        </div>

        <div class="p-4 flex flex-col gap-2">
          <Button
            label="Archive Note"
            severity="secondary"
            variant="outlined"
            icon="pi pi-box"
            size="small"
            class="w-full justify-start"
          />

          <Button
            label="Delete Note"
            severity="secondary"
            variant="outlined"
            icon="pi pi-trash"
            size="small"
            class="w-full justify-start"
          />
        </div>
      </main>
    </div>
  </div>
</template>
