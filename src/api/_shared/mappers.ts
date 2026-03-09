type GenericRecord = Record<string, any>

const asArray = <T = GenericRecord>(value: unknown): T[] => {
  if (!value) return []
  if (Array.isArray(value)) return value as T[]
  return []
}

export const mapBackendEventToFront = (event: GenericRecord) => ({
  eventId: event?.eventId ?? event?.id,
  eventName: event?.eventName ?? event?.name ?? '',
  startDate: event?.startDate ?? event?.start_date ?? '',
  endDate: event?.endDate ?? event?.end_date ?? '',
  description: event?.description ?? '',
  local: event?.local ?? event?.location ?? '',
  hasCover:
    event?.hasCover ??
    Boolean(event?.cover ?? event?.banner_url ?? event?.bannerUrl),
  hasCoffee: event?.hasCoffee ?? false,
  coffeeValue: event?.coffeeValue,
  driveGalleryLink: event?.driveGalleryLink,
})

export const mapBackendEventsListToFront = (
  payload: GenericRecord | GenericRecord[],
) => {
  const list = asArray<GenericRecord>(
    Array.isArray(payload) ? payload : payload?.events,
  )
  return list.map(mapBackendEventToFront)
}

export const mapFrontEventToBackend = (event: GenericRecord) => ({
  name: event?.eventName,
  start_date: event?.startDate,
  end_date: event?.endDate,
  description: event?.description,
  location: event?.local,
  banner_url: event?.cover,
})

export const mapBackendActivityToFront = (activity: GenericRecord) => ({
  activityId: activity?.activityId ?? activity?.id,
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
})

export const mapBackendActivitiesListToFront = (
  payload: GenericRecord | GenericRecord[],
) => {
  const list = asArray<GenericRecord>(
    Array.isArray(payload) ? payload : payload?.activities,
  )
  return list.map(mapBackendActivityToFront)
}

export const mapFrontActivityToBackend = (activity: GenericRecord) => ({
  event_id: activity?.eventId,
  name: activity?.activityName,
  description: activity?.description,
  speaker: activity?.responsible,
  start_time: activity?.startTime,
  end_time: activity?.endTime,
  activity_type: activity?.activityType ?? 'other',
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
