import type { Note } from '@/types'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
})

export default () => ({
  async getAllPublished() {
    const response = await api.get<Note[]>('/notes')
    return response.data
  },

  async getAllArchived() {
    const response = await api.get<Note[]>('/archived')
    return response.data
  },
})
