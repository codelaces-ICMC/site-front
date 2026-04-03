type GenericRecord = Record<string, unknown>

const str = (v: unknown): string => (v == null ? '' : String(v))

const optionalStr = (v: unknown): string | null =>
  v == null || v === '' ? null : String(v)

const num = (v: unknown): number => {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

const optionalNum = (v: unknown): number | null => {
  if (v == null || v === '') return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

const undefinedIfEmptyString = (value: unknown) => {
  return typeof value === 'string' && value.trim() === '' ? undefined : value
}

const asArray = <T = GenericRecord>(value: unknown): T[] => {
  if (!value) return []
  if (Array.isArray(value)) return value as T[]
  return []
}

/** Forma canônica de evento vinda dos mappers admin. */
export type MappedAdminEvent = {
  eventId: number
  eventName: string
  startDate: string
  endDate: string
  description: string
  local: string
  cover: string
  hasCover: boolean
  hasCoffee: boolean
  coffeeValue: number | null
  driveGalleryLink: string | null
  registrationStart: string | null
  registrationEnd: string | null
  maxParticipants: number | null
}

export const mapBackendEventToFront = (
  event: GenericRecord,
): MappedAdminEvent => {
  const coverUrl = typeof event.cover === 'string' ? event.cover.trim() : ''
  return {
    eventId: num(event.eventId ?? event.event_id ?? event.id),
    eventName: str(event.eventName ?? event.name),
    startDate: str(event.startDate ?? event.start_date),
    endDate: str(event.endDate ?? event.end_date),
    description: str(event.description),
    local: str(event.local ?? event.location),
    cover: coverUrl,
    hasCover:
      Boolean(event.hasCover ?? event.has_cover) ||
      Boolean(typeof coverUrl === 'string' && coverUrl.trim()),
    hasCoffee: Boolean(event.hasCoffee ?? event.has_coffee),
    coffeeValue: optionalNum(event.coffeeValue ?? event.coffee_value),
    driveGalleryLink: optionalStr(
      event.driveGalleryLink ?? event.drive_gallery_link,
    ),
    registrationStart: optionalStr(
      event.registrationStart ?? event.registration_start,
    ),
    registrationEnd: optionalStr(
      event.registrationEnd ?? event.registration_end,
    ),
    maxParticipants: optionalNum(
      event.maxParticipants ?? event.max_participants,
    ),
  }
}

export const mapBackendEventsListToFront = (
  payload: GenericRecord | GenericRecord[],
): MappedAdminEvent[] => {
  const p = payload as GenericRecord
  const nestedData = p.data as GenericRecord | undefined
  const resolvedPayload = Array.isArray(payload)
    ? payload
    : (p.events ?? nestedData?.events ?? nestedData ?? p)
  const rp = resolvedPayload as GenericRecord | GenericRecord[]
  const list = asArray<GenericRecord>(Array.isArray(rp) ? rp : rp?.events)
  return list.map(mapBackendEventToFront)
}

export const mapFrontEventToBackend = (event: GenericRecord) => {
  const v = event?.cover
  const cover =
    v == null || (typeof v === 'string' && v.trim() === '')
      ? null
      : String(v).trim()

  return {
    name: event?.eventName,
    start_date: event?.startDate,
    end_date: event?.endDate,
    registration_start: event?.registrationStart,
    registration_end: event?.registrationEnd,
    max_participants: event?.maxParticipants,
    description: event?.description,
    location: event?.local,
    cover,
  }
}

/** Forma canônica de atividade vinda dos mappers admin. */
export type MappedAdminActivity = {
  activityId: number
  activityName: string
  description: string
  responsible: string
  startTime: string
  endTime: string
  startDate: string
  endDate: string
  eventId: number
  eventName: string
  registrationAt: string
  activityType: string
}

export const mapBackendActivityToFront = (
  activity: GenericRecord,
): MappedAdminActivity => ({
  activityId: num(activity.activityId ?? activity.activity_id ?? activity.id),
  activityName: str(activity.activityName ?? activity.name),
  description: str(activity.description),
  responsible: str(activity.responsible ?? activity.speaker),
  startTime: str(activity.startTime ?? activity.start_time),
  endTime: str(activity.endTime ?? activity.end_time),
  startDate: str(activity.startDate ?? activity.start_time),
  endDate: str(activity.endDate ?? activity.end_time),
  eventId: num(activity.eventId ?? activity.event_id),
  eventName: str(
    activity.eventName ??
      activity.event_name ??
      (activity.event as GenericRecord | undefined)?.name,
  ),
  registrationAt: str(activity.registrationAt ?? activity.registration_at),
  activityType: str(activity.activityType ?? activity.activity_type),
})

export const mapBackendActivitiesListToFront = (
  payload: GenericRecord | GenericRecord[],
): MappedAdminActivity[] => {
  const p = payload as GenericRecord
  const nestedData = p.data as GenericRecord | undefined
  const resolvedPayload = Array.isArray(payload)
    ? payload
    : (p.activities ?? nestedData?.activities ?? nestedData ?? p)
  const rp = resolvedPayload as GenericRecord | GenericRecord[]
  const list = asArray<GenericRecord>(Array.isArray(rp) ? rp : rp?.activities)
  return list.map(mapBackendActivityToFront)
}

export const mapFrontActivityToBackend = (activity: GenericRecord) => ({
  event_id: activity?.eventId,
  name: activity?.activityName,
  description: undefinedIfEmptyString(activity?.description),
  speaker: undefinedIfEmptyString(activity?.responsible),
  start_time: activity?.startTime,
  end_time: activity?.endTime,
  registration_at: undefinedIfEmptyString(activity?.registrationAt),
  activity_type: undefinedIfEmptyString(activity?.activityType),
})

export type MappedDropdownEvent = { eventId: number; eventName: string }

export const mapBackendDropdownEventsToFront = (
  payload: unknown,
): MappedDropdownEvent[] => {
  let list: unknown[] = []
  if (Array.isArray(payload)) {
    list = payload
  } else if (
    payload &&
    typeof payload === 'object' &&
    Array.isArray((payload as Record<string, unknown>).events)
  ) {
    list = (payload as Record<string, unknown>).events as unknown[]
  }

  return list.map(event => {
    const e = event as GenericRecord
    return {
      eventId: num(e.eventId ?? e.id),
      eventName: str(e.eventName ?? e.name),
    }
  })
}

export type MappedDropdownActivityType = {
  activityTypeId: number
  activityTypeName: string
}

export const mapBackendDropdownActivityTypesToFront = (
  payload: unknown,
): MappedDropdownActivityType[] => {
  const list = Array.isArray(payload) ? payload : []

  return list.map(activityType => {
    const t = activityType as GenericRecord
    return {
      activityTypeId: num(t.activityTypeId ?? t.id),
      activityTypeName: str(t.activityTypeName ?? t.name),
    }
  })
}
