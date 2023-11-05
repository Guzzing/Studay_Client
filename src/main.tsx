import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.querySelector('#root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
)
