import { useCallback, useEffect, useState } from 'react'

type Scope = 'local' | 'session'

const toStorage = (scope: Scope = 'local') => (
  scope === 'local' ? localStorage : sessionStorage
)

const useWebStorage = (scope: Scope = 'local') => {
  const [storage, setStorage] = useState<Storage>(toStorage(scope))
  useEffect(() => setStorage(toStorage(scope)), [scope, setStorage])

  const getItem = useCallback((key: string, defaultValue: any = null): any => {
    const data = storage.getItem(key)
    return data ? JSON.parse(data) : defaultValue
  }, [storage])

  const setItem = useCallback((key: string, value: any) => {
    const data = JSON.stringify(value)
    storage.setItem(key, data)
  }, [storage])

  return { getItem, setItem }
}

export default useWebStorage
