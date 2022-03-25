import APIProvider from 'api/APIProvider'
import { hydrateAuth, setI18nConfig } from 'core'
import { RootNavigator } from 'navigation'
import React from 'react'
import FlashMessage from 'react-native-flash-message'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store'
import { ThemeProvider } from 'ui'

setI18nConfig()
hydrateAuth()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <APIProvider>
          <ThemeProvider>
            <RootNavigator />
            <FlashMessage position="top" />
          </ThemeProvider>
        </APIProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
