import { useLayoutEffect } from 'react'

export function useRemoveRouterHeader(navigation) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])
}


