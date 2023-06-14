
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextProvider from './components/usercontext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <App />
  </ContextProvider>
    
)
