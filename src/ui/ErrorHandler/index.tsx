import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler'
import { showErrorMessage } from 'ui/utils'
import { ErrorFallback } from './ErrorFallback'

setJSExceptionHandler((error, isFatal) => {
  console.log(error, isFatal)
  showErrorMessage()
})

//For most use cases:
setNativeExceptionHandler((exceptionString) => {
  console.log({ exceptionString })
})

const myErrorHandler = (error: Error) => {
  console.log(error)
  //   captureException(error);
}

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
)
