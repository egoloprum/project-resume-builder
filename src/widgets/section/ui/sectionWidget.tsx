'use client'

import { Section } from '@/entities/section/type'
import { DesiredPositionForm } from '@/features/(sections)/desiredPositionForm'
import { EducationForm } from '@/features/(sections)/educationForm'
import { LanguagesForm } from '@/features/(sections)/languagesForm'
import { SkillsForm } from '@/features/(sections)/skillsForm'
import { WorkExperienceForm } from '@/features/(sections)/workExperienceForm'
import { FC } from 'react'

interface SectionWidgetProps {
  section: Section
}

export const SectionWidget: FC<SectionWidgetProps> = ({ section }) => {
  switch (section.context) {
    case 'Desired Position':
      return <DesiredPositionForm />
    case 'Work Experience':
      return <WorkExperienceForm />
    case 'Education':
      return <EducationForm />
    case 'Skills':
      return <SkillsForm />
    case 'Languages':
      return <LanguagesForm />
  }
}
