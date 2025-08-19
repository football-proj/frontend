import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardContainer from "@/CardContainer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      Team List
    </div>
    <div className='flex flex-row gap-1 p-2 justify-center items-start'>
      {Array.from({ length: 3 }, (_, i) => (
        <CardContainer
          teamname='test'
          teamDescription='content'
          content='this is body'
          buttonText='confirm'
        />
      ))}
    </div>
  </StrictMode>,
)
