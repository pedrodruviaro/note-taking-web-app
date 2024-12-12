import NotesServices from '@/services/notes'

export function useServices() {
  return {
    notes: NotesServices(),
  }
}
