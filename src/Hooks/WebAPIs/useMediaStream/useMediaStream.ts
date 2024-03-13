import { useCallback, useState } from "react";

const useMediaStream = (constraints: MediaStreamConstraints) => {
  const [stream, setStream] = useState<MediaStream|undefined>()

  const stopRecording = useCallback(() => {
    stream?.getTracks().forEach(track => track.stop())
    setStream(undefined)
  },[stream, setStream])

  const startRecording = useCallback(async () => {
    stopRecording()

    if (typeof navigator.mediaDevices?.getUserMedia === 'function') {
      const newStream = await navigator.mediaDevices.getUserMedia(constraints)
      setStream(newStream)
      return newStream
    }

    return undefined
  },[constraints, stopRecording])

  return { startRecording, stopRecording }
}

export default useMediaStream
