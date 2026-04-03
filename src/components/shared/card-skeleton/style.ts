import { styled, keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`

export const ShimmerBlock = styled.span<{
  $width?: string
  $height?: string
  $radius?: string
  $margin?: string
}>`
  display: block;
  width: ${p => p.$width ?? '100%'};
  height: ${p => p.$height ?? '12px'};
  margin: ${p => p.$margin ?? '0'};
  border-radius: ${p => p.$radius ?? '8px'};
  background: linear-gradient(
    90deg,
    #d9d9d9 0%,
    #ececec 45%,
    #f5f5f5 50%,
    #ececec 55%,
    #d9d9d9 100%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;
`

export const List = styled.div<{ $layout: 'grid' | 'row' }>`
  display: flex;
  flex-wrap: ${p => (p.$layout === 'grid' ? 'wrap' : 'nowrap')};
  gap: ${p => (p.$layout === 'grid' ? '3vw' : '16px')};
  padding: 1vh;
  overflow: ${p => (p.$layout === 'row' ? 'auto' : 'auto')};
  justify-content: ${p => (p.$layout === 'grid' ? 'center' : 'flex-start')};
  width: 100%;
`

export const CardShell = styled.div<{
  $width: number
  $height: number
  $variant: 'event' | 'news'
}>`
  flex: 0 0 auto;
  width: ${p => p.$width}px;
  height: ${p => p.$height}px;
  background: var(--cor-branco);
  border-radius: ${p => (p.$variant === 'event' ? '20px' : '12px')};
  box-shadow: ${p =>
    p.$variant === 'event'
      ? '0px 0px 4px rgba(0.82, 0.39, 0.102, 0.5)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const EventInner = styled.div`
  padding: 0.4em;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`

export const EventImageArea = styled.div<{ $height: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  height: ${p => p.$height}px;
  flex-shrink: 0;
`

export const EventBody = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-height: 0;
  padding-top: 0.75rem;
  gap: 0.65rem;
`

export const EventFooter = styled.div`
  padding: 0 16px 0.5em 16px;
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const NewsImageWrap = styled.div`
  padding: 20px 20px 5px 20px;
  flex-shrink: 0;
`

export const NewsBody = styled.div`
  padding: 0 30px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-height: 0;
`
