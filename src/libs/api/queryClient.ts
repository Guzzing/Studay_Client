import { QueryClient } from '@tanstack/react-query'
import { QueryCache } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true
    }
  },
  queryCache: new QueryCache({
    onError: () => {
      alert('에러 발생! 올바른 경로로 서비스를 이용해주세요.')
      window.location.href = '/'
    }
  })
})
