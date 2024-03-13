import { useCallback } from 'react'

const useOverlays = () => {
  const showOverlay = useCallback(() => {

  }, [])

  return { showOverlay, hideOverlay }
}

export default useOverlays
