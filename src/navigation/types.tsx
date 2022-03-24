import type { AuthStackParams } from './AuthNavigator'
import { MemoStackParams } from './MemoNavigator'

export type RootStackParamList = AuthStackParams & MemoStackParams

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
