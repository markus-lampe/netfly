import { useEffect, useState } from 'react'

const useMediaDevices = () => {
  const [mediaDevices, setMediaDevices] = useState<MediaDeviceInfo[]>([])

  const [cameras, setCameras] = useState<InputDeviceInfo[]>([])
  const [microphones, setMicrophones] = useState<InputDeviceInfo[]>([])
  const [speakers, setSpeakers] = useState<MediaDeviceInfo[]>([])

  useEffect(() => {
    if (typeof navigator.mediaDevices?.enumerateDevices === 'function') {
      const handler = async () => {
        const newMediaDevices = await navigator.mediaDevices.enumerateDevices()
        if (mediaDevices !== newMediaDevices) {
          setMediaDevices(newMediaDevices)

          const newCameras:     InputDeviceInfo[] = []
          const newMicrophones: InputDeviceInfo[] = []
          const newSpeakers:    MediaDeviceInfo[] = []

          for (const newMediaDevice of newMediaDevices) {
            if (newMediaDevice instanceof InputDeviceInfo) {
              if (newMediaDevice.kind === 'videoinput') {
                newCameras.push(newMediaDevice)
              } else {
                newMicrophones.push(newMediaDevice)
              }
            } else {
              newSpeakers.push(newMediaDevice)
            }
          }

          setCameras(newCameras)
          setMicrophones(newMicrophones)
          setSpeakers(newSpeakers)
        }
      }

      const id = setInterval(handler, 30_000)

      return () => clearInterval(id)
    }

    return () => {}
  }, [mediaDevices, setCameras, setMediaDevices, setMicrophones, setSpeakers]);

  return { cameras, microphones, speakers }
}

export default useMediaDevices
