import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { queryClient } from '@/libs/api/queryClient.ts'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
)
