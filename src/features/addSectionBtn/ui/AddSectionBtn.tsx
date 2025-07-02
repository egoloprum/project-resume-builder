'use client'

import { Button } from '@/shared/ui'
import { Plus } from 'lucide-react'
import { FC, useState, useRef, useEffect } from 'react'

interface AddSectionBtnProps {}

export const AddSectionBtn: FC<AddSectionBtnProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
        className={`
          overflow-hidden 
          transition-all duration-300 ease-out
          ${isOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
        `}>
        <ul className="border border-gray-200 rounded-xl bg-white w-48 shadow-lg">
          {[
            'Desired Position',
            'Work Experience',
            'Education',
            'Skills',
            'Languages'
          ].map(item => (
            <li
              key={item}
              className="
                p-2 px-4 w-full cursor-pointer
                hover:bg-gray-50 transition-colors
                first:rounded-t-xl last:rounded-b-xl
              ">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
