import { useLayoutEffect } from 'react'

export function useRemoveRouterHeader(navigation) {
  /*This hook removes the default bar from React Navigation.*/
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])
}


