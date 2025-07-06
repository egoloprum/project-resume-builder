'use client'

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'
import { useSectionStore } from '@/entities/section/store'
import { AddSectionBtn } from '@/features/addSectionBtn'
import { ContactForm } from '@/features/contactForm'
import { SectionWidget } from '@/widgets/section'
import { FC } from 'react'
import { Section } from '@/entities/section/type'

interface EditorWidgetProps {}

const SortableItem: FC<{ section: Section }> = ({ section }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab'
  }

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <SectionWidget section={section} />
    </li>
  )
}

export const EditorWidget: FC<EditorWidgetProps> = ({}) => {
  const sections = useSectionStore(state => state.sections)
  const reorderSections = useSectionStore(state => state.reorderSections)
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  const selectedSections = sections.filter(section => section.isSelected)
  const selectedIds = selectedSections.map(s => s.id)

  const handleDragStart = (event: DragStartEvent) => {
    const section = sections.find(s => s.id === event.active.id)
    if (section) setActiveSection(section)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveSection(null)

    if (!over || active.id === over.id) return

    const oldIndex = sections.findIndex(s => s.id === active.id)
    const newIndex = sections.findIndex(s => s.id === over.id)

    if (oldIndex !== -1 && newIndex !== -1) {
      const newOrder = arrayMove(sections, oldIndex, newIndex)
      reorderSections(newOrder)
    }
  }

  return (
    <div className="p-4 border-2 w-full min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Resume builder</h1>
      <ContactForm />
      <AddSectionBtn />

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext
          items={selectedIds}
          strategy={verticalListSortingStrategy}>
          <ul>
            {selectedSections.map(section => (
              <SortableItem key={section.id} section={section} />
            ))}
          </ul>
        </SortableContext>

        <DragOverlay>
          {activeSection ? (
            <div className="opacity-80 shadow-xl">
              <SectionWidget section={activeSection} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
