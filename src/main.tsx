import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      staleTime:1000 * 60 * 5,
      //@ts-ignore
      cacheTime:1000 * 60 * 5,
      refetchOnWindowFocus:false
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster/>
    </QueryClientProvider>
  </BrowserRouter>
)
