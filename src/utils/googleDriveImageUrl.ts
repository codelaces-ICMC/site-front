/**
 * Extrai o ID de arquivo de URLs públicas do Google Drive.
 * Cobre `uc?export=view&id=`, `/file/d/{id}/`, `open?id=`, etc.
 */
export function extractGoogleDriveFileId(url: string): string | null {
  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    const u = new URL(trimmed)
    if (!/^drive\.google\.com$/i.test(u.hostname)) return null

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
  maxWidth = 2000,
): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${maxWidth}`
}

/**
 * Se a URL for do Google Drive, devolve a URL de thumbnail; caso contrário, a string original.
 */
export function normalizeGoogleDriveEmbedUrl(url: string): string {
  const trimmed = url.trim()
  if (!trimmed) return trimmed

  const id = extractGoogleDriveFileId(trimmed)
  if (!id) return trimmed

  return googleDriveThumbnailUrl(id)
}
