/**
 * Largura pedida ao endpoint de thumbnail (`sz=w{n}`).
 * Cards ~300px: 720 cobre retina sem forçar `w2000` (menos carga; ajuda em rate limit 429).
 */
export const DEFAULT_DRIVE_THUMBNAIL_MAX_WIDTH = 720

/**
 * Extrai o ID de arquivo de URLs do Drive ou do CDN `*.googleusercontent.com`
 * (ex.: após redirect de `drive.google.com/thumbnail`).
 */
export function extractGoogleDriveFileId(url: string): string | null {
  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    const u = new URL(trimmed)
    const host = u.hostname.toLowerCase()

    if (host.endsWith('.googleusercontent.com')) {
      const fromPath = u.pathname.match(/^\/d\/([^/]+)/)
      if (fromPath?.[1]) {
        const segment = fromPath[1]
        return segment.includes('=') ? segment.split('=')[0] : segment
      }
      return null
    }

    if (host !== 'drive.google.com') return null

    if (u.pathname.includes('/thumbnail')) {
      return u.searchParams.get('id')
    }

    const fileInPath = u.pathname.match(/\/file\/d\/([^/]+)/)
    if (fileInPath?.[1]) return fileInPath[1]

    const id = u.searchParams.get('id')
    if (id) return id

    return null
  } catch {
    return null
  }
}

/**
 * Converte links do Drive em URL adequada para `<img src>` (thumbnail oficial).
 * `uc?export=view` costuma não renderizar em hotlink; o endpoint de thumbnail é mais estável.
 *
 * @param maxWidth - largura máxima do thumbnail (`sz=w{maxWidth}`); padrão adequado a cards retina.
 */
export function googleDriveThumbnailUrl(
  fileId: string,
  maxWidth: number = DEFAULT_DRIVE_THUMBNAIL_MAX_WIDTH,
): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${maxWidth}`
}

/**
 * Se a URL for do Drive ou do CDN do Google (lh3…), devolve URL de thumbnail com `sz` controlado;
 * caso contrário, a string original.
 *
 * Nota: 429 no `lh3.googleusercontent.com` costuma ser rate limit por muitas requisições paralelas.
 * Use `loading="lazy"` nas tags `<img>` e, em escala, proxy/cache no backend.
 */
export function normalizeGoogleDriveEmbedUrl(
  url: string,
  maxWidth: number = DEFAULT_DRIVE_THUMBNAIL_MAX_WIDTH,
): string {
  const trimmed = url.trim()
  if (!trimmed) return trimmed

  const id = extractGoogleDriveFileId(trimmed)
  if (!id) return trimmed

  return googleDriveThumbnailUrl(id, maxWidth)
}
