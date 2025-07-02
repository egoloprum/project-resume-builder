import { DownloadBtn } from '@/features/downloadBtn'
import { EditorWidget } from '@/widgets/editor'
import { PreviewWidget } from '@/widgets/preview'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row border-1 min-h-screen h-full">
      <EditorWidget />
      <PreviewWidget />
      <DownloadBtn />
    </main>
  )
}
