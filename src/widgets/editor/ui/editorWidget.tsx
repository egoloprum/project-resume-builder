'use client'

import { ContactForm } from '@/features/contactForm'
import { FC } from 'react'

interface EditorWidgetProps {}

export const EditorWidget: FC<EditorWidgetProps> = ({}) => {
  return (
    <div className="p-4 border-2 w-full min-h-screen">
      <h1></h1>
      <ContactForm />
    </div>
  )
}
