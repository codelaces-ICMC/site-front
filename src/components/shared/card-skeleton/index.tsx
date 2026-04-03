import React from 'react'

import {
  CardShell,
  EventBody,
  EventFooter,
  EventImageArea,
  EventInner,
  List,
  NewsBody,
  NewsImageWrap,
  ShimmerBlock,
} from './style'

export type CardSkeletonVariant = 'event' | 'news'

const PRESETS: Record<
  CardSkeletonVariant,
  { width: number; height: number; imageHeight: number }
> = {
  event: { width: 300, height: 426, imageHeight: 254 },
  news: { width: 300, height: 480, imageHeight: 200 },
}

export type CardSkeletonProps = {
  variant?: CardSkeletonVariant
  /** Quantidade de cards placeholder */
  count?: number
  /** `grid` — igual à página de eventos; `row` — carrossel horizontal com scroll */
  layout?: 'grid' | 'row'
  width?: number
  height?: number
  imageHeight?: number
  /** Rótulo acessível da região de carregamento */
  loadingLabel?: string
}

type SingleProps = {
  variant: CardSkeletonVariant
  width: number
  height: number
  imageHeight: number
}

const EventCardPlaceholder: React.FC<{ imageHeight: number }> = ({
  imageHeight,
}) => (
  <EventInner>
    <EventImageArea $height={imageHeight}>
      <ShimmerBlock $height='100%' $radius='20px' />
    </EventImageArea>
    <EventBody>
      <ShimmerBlock $width='85%' $height='22px' />
      <ShimmerBlock $width='70%' $height='14px' />
      <ShimmerBlock $width='55%' $height='14px' />
    </EventBody>
    <EventFooter>
      <ShimmerBlock $width='50%' $height='12px' />
    </EventFooter>
  </EventInner>
)

const NewsCardPlaceholder: React.FC<{ imageHeight: number }> = ({
  imageHeight,
}) => (
  <>
    <NewsImageWrap>
      <ShimmerBlock $height={`${imageHeight}px`} $radius='10px' />
    </NewsImageWrap>
    <NewsBody>
      <ShimmerBlock $width='90%' $height='22px' />
      <ShimmerBlock $width='100%' $height='12px' />
      <ShimmerBlock $width='95%' $height='12px' />
      <ShimmerBlock $width='60%' $height='12px' />
      <ShimmerBlock $width='75%' $height='11px' $margin='0.75rem 0 0 0' />
    </NewsBody>
  </>
)

const SingleCardSkeleton: React.FC<SingleProps> = ({
  variant,
  width,
  height,
  imageHeight,
}) => (
  <CardShell $width={width} $height={height} $variant={variant}>
    {variant === 'event' ? (
      <EventCardPlaceholder imageHeight={imageHeight} />
    ) : (
      <NewsCardPlaceholder imageHeight={imageHeight} />
    )}
  </CardShell>
)

/**
 * Placeholders de card com shimmer, alinhados aos cards de evento e de notícias.
 * Dimensões podem ser sobrescritas para encaixar em outros layouts (ex.: carrossel).
 */
const CardSkeleton: React.FC<CardSkeletonProps> = ({
  variant = 'event',
  count = 6,
  layout = 'grid',
  width,
  height,
  imageHeight,
  loadingLabel = 'Carregando',
}) => {
  const preset = PRESETS[variant]
  const w = width ?? preset.width
  const h = height ?? preset.height
  const imgH = imageHeight ?? preset.imageHeight

  return (
    <List
      $layout={layout}
      role='status'
      aria-live='polite'
      aria-busy='true'
      aria-label={loadingLabel}
    >
      {Array.from({ length: count }, (_, i) => (
        <SingleCardSkeleton
          key={i}
          variant={variant}
          width={w}
          height={h}
          imageHeight={imgH}
        />
      ))}
    </List>
  )
}

export default CardSkeleton
