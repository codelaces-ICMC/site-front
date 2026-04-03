function optionalStr(v: unknown): string | undefined {
  if (v == null || v === '') return undefined
  return String(v)
}

/**
 * O backend (`mapEventRowToApi`) devolve eventos em snake_case.
 * Aqui normalizamos uma vez para camelCase em todo o app web.
 */
export type WebEvent = {
  id: number
  name: string
  description?: string
  startDate: string
  endDate: string
  location?: string
  maxParticipants?: number
  registrationStart?: string
  registrationEnd?: string
  cover?: string
  status: 'active' | 'inactive'
  createdAt: string
  updatedAt: string
}

export function normalizeWebEvent(
  raw: Record<string, unknown> | null | undefined,
): WebEvent | null {
  if (!raw || typeof raw !== 'object') return null
  const id = Number(raw.id)
  if (!Number.isFinite(id)) return null

  const mp = raw.maxParticipants ?? raw.max_participants
  const maxParticipants =
    mp != null && mp !== '' && !Number.isNaN(Number(mp))
      ? Number(mp)
      : undefined

  return {
    id,
    name: String(raw.name ?? ''),
    description: raw.description != null ? String(raw.description) : undefined,
    startDate: String(raw.startDate ?? raw.start_date ?? ''),
    endDate: String(raw.endDate ?? raw.end_date ?? ''),
    location: raw.location != null ? String(raw.location) : undefined,
    maxParticipants,
    registrationStart: optionalStr(
      raw.registrationStart ?? raw.registration_start,
    ),
    registrationEnd: optionalStr(raw.registrationEnd ?? raw.registration_end),
    cover: raw.cover != null ? String(raw.cover) : undefined,
    status: raw.status === 'inactive' ? 'inactive' : 'active',
    createdAt: String(raw.createdAt ?? raw.created_at ?? ''),
    updatedAt: String(raw.updatedAt ?? raw.updated_at ?? ''),
  }
}
