export interface Tag {
  title: string
}

export interface Note {
  id: string
  title: string
  content: string
  tags: Tag[]
  updated_at: string
  archived: boolean
}
