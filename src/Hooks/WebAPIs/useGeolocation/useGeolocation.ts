import { useCallback, useState } from 'react'

const useGeolocation = () => {
  const [position, setPosition]  = useState<GeolocationPosition|undefined>(undefined)
  const [watchId, setWatchId] = useState<number|undefined>(undefined)

  const unwatchPosition = useCallback(() => {
    if (watchId && typeof navigator.geolocation?.clearWatch === 'function') {
      navigator.geolocation.clearWatch(watchId)
      setWatchId(undefined)
    }
  }, [setWatchId, watchId])

  const watchPosition = useCallback(() => {
    unwatchPosition()

    if (typeof navigator.geolocation?.watchPosition === 'function') {
      const newWatchId = navigator.geolocation.watchPosition(setPosition)
      setWatchId(newWatchId)
    }
  }, [unwatchPosition, setPosition, setWatchId])

  const getCurrentPosition = useCallback(async ()=> {
    if (typeof navigator.geolocation?.getCurrentPosition === 'function') {
      return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }

    return new Promise<GeolocationPosition>((_, reject) => {
      reject(new Error('Geolocation API is not available'))
    })
  }, [])

  return { getCurrentPosition, position, unwatchPosition, watchPosition }
}

export default useGeolocation
