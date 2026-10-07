import { useEffect } from 'react'

const DESCRIPTION =
  'Jointick is an AI-powered workspace that helps small teams turn projects, meetings, documents, tasks, and internal knowledge into clear actions and decisions.'

export function usePageMeta(title: string, canonical: string, description = DESCRIPTION) {
  useEffect(() => {
    document.title = title

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.href = canonical

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (descriptionMeta) descriptionMeta.content = description
  }, [title, canonical, description])
}
