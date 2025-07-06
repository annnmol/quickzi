import {
  CommonActions,
  createNavigationContainerRef,
  StackActions
} from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef()

export function navigate(routeName: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params))
  }
}

export function replace(routeName: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(routeName, params))
  }
}

export function resetAndNavigate(routeName: string): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName }]
      })
    )
  }
}

export function resetWithParams(routes: { name: string; params?: object }[], index = 0): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes
      })
    )
  }
}

export function push(routeName: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params))
  }
}

export function pop(count = 1): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count))
  }
}

export function popToTop(): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop())
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}
