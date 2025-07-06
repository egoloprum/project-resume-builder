import { create } from 'zustand'
import { Section } from './type'

const defaultSections: Section[] = [
  {
    id: 1,
    context: 'Desired Position',
    isSelected: false
  },
  {
    id: 2,
    context: 'Work Experience',
    isSelected: false
  },
  {
    id: 3,
    context: 'Education',
    isSelected: false
  },
  {
    id: 4,
    context: 'Skills',
    isSelected: false
  },
  {
    id: 5,
    context: 'Languages',
    isSelected: false
  }
]

interface SectionStoreState {
  sections: Section[]
  updateSection: (id: number) => void
  reorderSections: (newOrder: Section[]) => void
}

export const useSectionStore = create<SectionStoreState>()(set => ({
  sections: defaultSections,
  updateSection: (id: number) => {
    set(state => {
      const updatedSections = state.sections.map(section =>
        section.id === id
          ? { ...section, isSelected: !section.isSelected }
          : section
      )
      return { sections: updatedSections }
    })
  },
  reorderSections: newOrder => set({ sections: newOrder })
}))
