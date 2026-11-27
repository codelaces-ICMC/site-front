import { normalizeGoogleDriveEmbedUrl } from '@utils/googleDriveImageUrl'

import { resolveApiBaseUrl } from '../../_shared/url'

export type WebVisit = {
  id: number
  title: string
  date: string
  local: string
  description: string
  image: string
  content: string
  status: string
}

/**
 * A imagem pode vir como URL completa (ex.: link do Google Drive) ou como
 * nome de arquivo servido pelo backend em `/images/<nome>`.
 */
const resolveVisitImageUrl = (image: string): string => {
  const trimmed = image.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) {
    return normalizeGoogleDriveEmbedUrl(trimmed)
  }

  const base = resolveApiBaseUrl()
    .replace(/\/+$/, '')
    .replace(/\/api$/i, '')
  return `${base}/images/${trimmed.replace(/^\/+/, '')}`
}

export function normalizeWebVisit(
  raw: Record<string, unknown> | null | undefined,
): WebVisit | null {
  if (!raw || typeof raw !== 'object') return null
  const id = Number(raw.id)
  if (!Number.isFinite(id)) return null

  return {
    id,
    title: String(raw.title ?? ''),
    date: String(raw.date ?? ''),
    local: String(raw.local ?? raw.location ?? ''),
    description: String(raw.description ?? ''),
    image: resolveVisitImageUrl(String(raw.image ?? '')),
    content: String(raw.content ?? ''),
    status: String(raw.status ?? ''),
  }
}
