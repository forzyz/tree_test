import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ScaleProvider } from './context/scaleContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ScaleProvider>
    <App />
  </ScaleProvider>,
)
