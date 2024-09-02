import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useProfessionalProfileStore = defineStore('professionalProfile', () => {
  const description = ref('')

  init()

  const professionalProfileSection = computed(() => ({
    columns: [
      {
        width: 120,
        text: 'Perfil profesional',
        style: 'sectionTitle'
      },
      {
        width: '*',
        text: description.value,
        style: 'gray'
      }
    ]
  }))

  const completed = computed(() => description.value !== '')

  const isEmpty = computed(() => description.value === '')

  watch(description, () => localStorage.setItem('description', description.value))

  function init () {
    description.value = localStorage.getItem('description') || ''
  }

  function set (data) {
    description.value = data.cvtext.replace(' ', ' ').trim()
  }

  return { description, completed, isEmpty, set, professionalProfileSection }
})
