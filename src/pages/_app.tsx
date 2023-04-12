import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import '@/styles/globals.css'
import { AuthProvider } from '@/context/authContext'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  )
}
