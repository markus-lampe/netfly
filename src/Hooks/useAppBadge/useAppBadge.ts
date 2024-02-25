import { useCallback } from 'react'

const useAppBadge = () => {
  const clearAppBadge = useCallback(async () => {
    if (typeof navigator.clearAppBadge === 'function') {
      await navigator.clearAppBadge()
    }
  }, []);

  const setAppBadge = useCallback(async (contents?: number | undefined) => {
    if (typeof navigator.setAppBadge === 'function') {
      await navigator.setAppBadge(contents)
    }
  }, [])

  return { clearAppBadge, setAppBadge }
}

export default useAppBadge
