import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardContainer from "@/CardContainer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CardContainer />
  </StrictMode>,
)
