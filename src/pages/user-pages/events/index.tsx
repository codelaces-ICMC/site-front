import { getWebEvents, type WebEvent } from 'api/web/events/get'
import CardSkeleton from 'components/shared/card-skeleton'
import CardsSet from 'components/user-components/cards-set'
import Footer from 'components/user-components/footer'
import SearchBar from 'components/user-components/search-bar'
import React, { useEffect, useRef, useState } from 'react'
import defaultEventCover from '../../../assets/icons/logos/logo-fundo-branco.png'
import Header from '../../../components/user-components/header'
import GlobalStyles from '../../../styles/GlobalStyles'

import CardEventProps from 'components/props/props-card-event'
import { normalizeGoogleDriveEmbedUrl } from 'utils/googleDriveImageUrl'
import { preloadImagesWithConcurrency } from 'utils/preloadImages'
import { Container } from './style'

function eventCoverUrl(event: WebEvent | undefined): string {
  const raw = event?.cover
  const s = typeof raw === 'string' ? raw.trim() : ''
  if (!s) return defaultEventCover
  return normalizeGoogleDriveEmbedUrl(s)
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<WebEvent[]>([])
  const [search, setSearch] = useState('')
  const [isFetching, setIsFetching] = useState(true)
  const [coversReady, setCoversReady] = useState(false)
  const fetchGeneration = useRef(0)

  useEffect(() => {
    let cancelled = false
    const generation = ++fetchGeneration.current

    const fetchEvents = async () => {
      setIsFetching(true)
      setCoversReady(false)
      const response = await getWebEvents(search)
      if (cancelled || generation !== fetchGeneration.current) {
        return
      }
      setEvents(response)
      setIsFetching(false)
    }

    fetchEvents()

    return () => {
      cancelled = true
    }
  }, [search])

  useEffect(() => {
    if (isFetching) return

    if (events.length === 0) {
      setCoversReady(true)
      return
    }

    const gen = fetchGeneration.current
    let cancelled = false
    const urls = events.map(e => eventCoverUrl(e))

    preloadImagesWithConcurrency(urls, { concurrency: 2 }).then(() => {
      if (cancelled || gen !== fetchGeneration.current) return
      setCoversReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [events, isFetching])

  const cards = events.map(event => ({
    cardNumber: event.id,
    eventName: event.name,
    startDate: new Date(event.startDate),
    endDate: new Date(event.endDate),
    eventPlace: event.location ?? '',
    coffeeLink: '',
    imageUrl: eventCoverUrl(event),
    fallbackImageUrl: defaultEventCover,
  }))

  const showSkeleton = isFetching || !coversReady

  return (
    <Container>
      <GlobalStyles />
      <Header
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
      <SearchBar onSearch={setSearch} />
      {showSkeleton ? (
        <CardSkeleton variant='event' count={3} layout='grid' />
      ) : (
        <CardsSet cards={cards as CardEventProps[]} />
      )}
      <Footer
        backgroundColor='var(--cor-roxo-escuro)'
        textColor='var(--cor-branco)'
      />
    </Container>
  )
}

export default Events
