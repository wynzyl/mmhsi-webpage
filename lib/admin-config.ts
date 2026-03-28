import type { CollectionConfig } from './types'

export const COLLECTION_CONFIG: Record<string, CollectionConfig> = {
  'board-passers': {
    label: 'Board Passers',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'exam', label: 'Examination', type: 'text', required: true },
      { name: 'year', label: 'Year', type: 'number', required: true },
      { name: 'class', label: 'Class (e.g. JHS Class of 2017)', type: 'text', required: true },
      { name: 'image', label: 'Photo', type: 'image', required: true },
    ],
  },
  'math-science': {
    label: 'Math & Science',
    fields: [
      { name: 'title', label: 'Competition Title', type: 'text', required: true },
      { name: 'participants', label: 'Participants', type: 'text', required: true },
      { name: 'award', label: 'Award / Place', type: 'text', required: true },
      { name: 'level', label: 'Level (e.g. Secondary Level)', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'text', required: true },
      { name: 'image', label: 'Photo', type: 'image', required: true },
    ],
  },
  activities: {
    label: 'Activities',
    fields: [
      { name: 'title', label: 'Activity Title', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
    ],
  },
  alumni: {
    label: 'Alumni',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'batch', label: 'Batch Year', type: 'text', required: true },
      { name: 'university', label: 'University', type: 'text', required: true },
      { name: 'program', label: 'Program / Course', type: 'text', required: true },
      { name: 'achievement', label: 'Achievement', type: 'text', required: true },
      { name: 'story', label: 'Story', type: 'textarea', required: true },
    ],
  },
  graduates: {
    label: 'Graduates',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'university', label: 'University', type: 'text', required: true },
      { name: 'course', label: 'Course', type: 'text', required: true },
      { name: 'batch', label: 'Batch Year', type: 'number', required: true },
    ],
  },
  events: {
    label: 'Incoming Events',
    fields: [
      { name: 'title', label: 'Event Title', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'text', required: true },
      { name: 'time', label: 'Time', type: 'text', required: true },
      { name: 'location', label: 'Location', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'category', label: 'Category', type: 'text', required: true },
    ],
  },
  news: {
    label: 'News',
    fields: [
      { name: 'title', label: 'News Title', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'text', required: true },
      { name: 'excerpt', label: 'Excerpt / Summary', type: 'textarea', required: true },
    ],
  },
}
