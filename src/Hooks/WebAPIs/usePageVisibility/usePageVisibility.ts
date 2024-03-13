import { useEffect, useState } from 'react'

const usePageVisibility = () => {
  const [pageVisible, setPageVisible] = useState<boolean>(!document.hidden)

  useEffect(() => {
    const listener = () => {
      setPageVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', listener)

    return () => document.removeEventListener('visibilitychange', listener)
  }, [setPageVisible]);

  return { pageVisible }
}

export default usePageVisibility
