type GenericRecord = Record<string, any>

const undefinedIfEmptyString = (value: unknown) => {
  return typeof value === 'string' && value.trim() === '' ? undefined : value
}

const asArray = <T = GenericRecord>(value: unknown): T[] => {
  if (!value) return []
  if (Array.isArray(value)) return value as T[]
  return []
}

export const mapBackendEventToFront = (event: GenericRecord) => {
  const coverUrl =
    typeof event?.cover === 'string' ? event.cover.trim() : ''
  return {
  eventId: event?.eventId ?? event?.event_id ?? event?.id,
  eventName: event?.eventName ?? event?.name ?? '',
  startDate: event?.startDate ?? event?.start_date ?? '',
  endDate: event?.endDate ?? event?.end_date ?? '',
  description: event?.description ?? '',
  local: event?.local ?? event?.location ?? '',
  cover: coverUrl,
  hasCover:
    event?.hasCover ??
    event?.has_cover ??
    Boolean(typeof coverUrl === 'string' && coverUrl.trim()),
  hasCoffee: event?.hasCoffee ?? event?.has_coffee ?? false,
  coffeeValue: event?.coffeeValue ?? event?.coffee_value,
  driveGalleryLink: event?.driveGalleryLink ?? event?.drive_gallery_link,
  registrationStart:
    event?.registrationStart ?? event?.registration_start ?? null,
  registrationEnd: event?.registrationEnd ?? event?.registration_end ?? null,
  maxParticipants: event?.maxParticipants ?? event?.max_participants ?? null,
  }
}

export const mapBackendEventsListToFront = (
  payload: GenericRecord | GenericRecord[],
) => {
  const resolvedPayload = Array.isArray(payload)
    ? payload
    : (payload?.events ?? payload?.data?.events ?? payload?.data ?? payload)
  const list = asArray<GenericRecord>(
    Array.isArray(resolvedPayload) ? resolvedPayload : resolvedPayload?.events,
  )
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

export const mapBackendActivityToFront = (activity: GenericRecord) => ({
  activityId: activity?.activityId ?? activity?.activity_id ?? activity?.id,
  activityName: activity?.activityName ?? activity?.name ?? '',
  description: activity?.description ?? '',
  responsible: activity?.responsible ?? activity?.speaker ?? '',
  startTime: activity?.startTime ?? activity?.start_time ?? '',
  endTime: activity?.endTime ?? activity?.end_time ?? '',
  startDate: activity?.startDate ?? activity?.start_time ?? '',
  endDate: activity?.endDate ?? activity?.end_time ?? '',
  eventId: activity?.eventId ?? activity?.event_id,
  eventName:
    activity?.eventName ?? activity?.event_name ?? activity?.event?.name ?? '',
  registrationAt: activity?.registrationAt ?? activity?.registration_at ?? '',
  activityType: activity?.activityType ?? activity?.activity_type ?? '',
})

export const mapBackendActivitiesListToFront = (
  payload: GenericRecord | GenericRecord[],
) => {
  const resolvedPayload = Array.isArray(payload)
    ? payload
    : (payload?.activities ??
      payload?.data?.activities ??
      payload?.data ??
      payload)
  const list = asArray<GenericRecord>(
    Array.isArray(resolvedPayload)
      ? resolvedPayload
      : resolvedPayload?.activities,
  )
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

export const mapBackendDropdownEventsToFront = (payload: any) => {
  const list = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.events)
      ? payload.events
      : []

  return list.map((event: GenericRecord) => ({
    eventId: event?.eventId ?? event?.id,
    eventName: event?.eventName ?? event?.name ?? '',
  }))
}

export const mapBackendDropdownActivityTypesToFront = (payload: any) => {
  const list = Array.isArray(payload) ? payload : []

  return list.map((activityType: GenericRecord) => ({
    activityTypeId: activityType?.activityTypeId ?? activityType?.id,
    activityTypeName:
      activityType?.activityTypeName ?? activityType?.name ?? '',
  }))
}
