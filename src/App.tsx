import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="space-y-6">
        <Button>test</Button>
        <div className="flex justify-center space-x-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-center">Vite + React</h1>
        
        <div className="text-center space-y-4">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p className="text-muted-foreground">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Click on the Vite and React logos to learn more
        </p>
      </div>
  )
}

export default App