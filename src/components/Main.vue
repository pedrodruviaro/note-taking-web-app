<script setup lang="ts">
import { Badge, Button, InputText, ScrollPanel, Skeleton, Textarea } from 'primevue'
import type { Note } from '@/types'
import { useNotesStore } from '@/stores/notes'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  notes: Note[]
}>()

const { loading } = storeToRefs(useNotesStore())

// separate into compontnes

// load editor and handle emits for actions

// hanle emits and show popups for buttons
</script>

<template>
  <main class="grid grid-cols-[1fr_2fr_1fr]">
    <div class="p-4 border-r flex flex-col gap-4">
      <Button label="Create New Note" icon="pi pi-plus" class="w-full" size="small" />

      <div class="grid gap-2" v-if="loading">
        <Skeleton width="100%" height="105px" class="rounded-lg" />
        <Skeleton width="100%" height="105px" class="rounded-lg" />
        <Skeleton width="100%" height="105px" class="rounded-lg" />
      </div>

      <ScrollPanel class="w-full h-[700px]" v-else>
        <div
          class="p-2 mr-2 border-b flex flex-col gap-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer"
          v-for="note in props.notes"
          :key="note.id"
        >
          <h3 class="text-lg font-bold">{{ note.title }}</h3>

          <div class="flex flex-wrap gap-1" v-if="note.tags">
            <Badge
              v-for="tag in note.tags"
              :key="tag.title"
              :value="tag.title"
              severity="secondary"
            />
          </div>
          <p class="text-sm opacity-75">{{ note.updated_at }}</p>
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
</template>
