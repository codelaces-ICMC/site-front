import { Navigate, useLocation } from 'react-router-dom'

import { suggestPathCorrection } from '@utils/routeFuzzy'

/**
 * 404: tenta corrigir URL (alias / Levenshtein); senão envia para a home.
 */
export function NotFoundRedirect() {
  const { pathname } = useLocation()
  const suggestion = suggestPathCorrection(pathname)

  if (suggestion) {
    return <Navigate to={suggestion} replace />
  }

  return <Navigate to='/' replace />
}
