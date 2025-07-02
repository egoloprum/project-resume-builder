'use client'

import { Button } from '@/shared/ui'
import { Download } from 'lucide-react'
import { FC } from 'react'

interface DownloadBtnProps {}

export const DownloadBtn: FC<DownloadBtnProps> = ({}) => {
  return (
    <Button mode="ghost" className="fixed bottom-4 right-4">
      <Download />
      <span>Download as pdf</span>
    </Button>
  )
}
