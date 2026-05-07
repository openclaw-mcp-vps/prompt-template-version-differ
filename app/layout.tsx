import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptDiff — Visual Diff for AI Prompt Templates',
  description: 'Compare prompt versions side-by-side with highlighted changes and performance impact. Built for AI product teams and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b7a64a3d-b9d1-4f4d-b73e-8cc732c8a308"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
