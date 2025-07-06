'use client'

import { useSectionStore } from '@/entities/section/store'
import { Button } from '@/shared/ui'
import { Plus } from 'lucide-react'
import { FC, useState, useRef, useEffect } from 'react'

interface AddSectionBtnProps {}

export const AddSectionBtn: FC<AddSectionBtnProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const sections = useSectionStore(state => state.sections)
  const updateSection = useSectionStore(state => state.updateSection)

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSectionClick = (id: number) => {
    updateSection(id)
    setIsOpen(false)
  }

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      <Button
        mode="secondary"
        onClick={toggleDropdown}
        className="flex items-center gap-1">
        <Plus size={16} />
        <span>Add Section</span>
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out z-10 absolute
          ${isOpen ? 'max-h-60 opacity-100 mt-2 pointer-events-auto' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}
        `}>
        <ul className="border border-gray-200 rounded-xl bg-white w-48 shadow-lg">
          {sections
            // .filter(section => section.isSelected === false)
            .map(section => (
              <li
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`
                p-2 px-4 w-full cursor-pointer
                hover:bg-gray-50 transition-colors
                first:rounded-t-xl last:rounded-b-xl
                ${section.isSelected ? 'bg-blue-50 text-blue-600' : ''}
              `}>
                {section.context}
                {section.isSelected && (
                  <span className="ml-2 text-xs text-green-500">✓</span>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
