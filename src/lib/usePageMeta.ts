import { useEffect } from 'react'

const DESCRIPTION =
  'Jointick is a workspace for small teams. Claude turns projects, meetings, documents, and tasks into summaries, tasks, risks, and next steps.'

export function usePageMeta(title: string, canonical: string, description = DESCRIPTION) {
  useEffect(() => {
    document.title = title

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.href = canonical

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (descriptionMeta) descriptionMeta.content = description
  }, [title, canonical, description])
}
