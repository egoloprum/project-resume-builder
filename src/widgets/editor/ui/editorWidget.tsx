'use client'

import { AddSectionBtn } from '@/features/addSectionBtn'
import { ContactForm } from '@/features/contactForm'
import { FC } from 'react'

interface EditorWidgetProps {}

export const EditorWidget: FC<EditorWidgetProps> = ({}) => {
  return (
    <div className="p-4 border-2 w-full min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Resume builder</h1>
      <ContactForm />
      <AddSectionBtn />
    </div>
  )
}
