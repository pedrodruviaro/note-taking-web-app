import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useServices } from '@/composables/useServices'
import type { Note } from '@/types'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const filteredNotes = ref([])

  const loading = ref(false)

  const services = useServices()

  const getAll = async (type: 'all' | 'archived') => {
    try {
      loading.value = true

      let response

      switch (type) {
        case 'all':
          response = await services.notes.getAllPublished()
          break
        case 'archived':
          response = await services.notes.getAllArchived()
          break
        default:
          response = null
      }

      console.log(response)

      if (response) {
        notes.value = response
      }
    } catch (error) {
      console.log('error -> ', error)

      // show error toast (?)
    } finally {
      loading.value = false
    }
  }

  return {
    notes,
    loading,
    getAll,
  }
})
