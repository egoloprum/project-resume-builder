'use client'

import { Input, Select } from '@/shared/ui'
import { FC } from 'react'

interface ContactFormProps {}

export const ContactForm: FC<ContactFormProps> = ({}) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Input label="First name*" mode="ghost" className="flex-1/4" />
        <Input label="Middle name*" mode="ghost" className="flex-1/4" />
        <Input label="Last name" mode="ghost" className="flex-1/4" />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
        <Select
          label="Gender"
          options={['male', 'female']}
          mode="ghost"
          placeholder="gender"
        />
        <Input type="date" label="Birthday" mode="ghost" />
        <Input type="number" label="Telephone" mode="ghost" />
        <Input type="text" label="City" mode="ghost" />
      </div>
    </div>
  )
}
