import { useState } from 'react'
import Calculator from './components/Calculator'
import Header from './components/Header'

export default function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <Calculator theme={theme} />
    </>
  )
}
