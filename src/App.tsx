import { useState } from 'react'
import Calculator from './components/Calculator'
import Header from './components/Header'

export default function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className='flex flex-col items-center justify-center desktop:w-1/3 tablet:w-7/10 tablet:mx-auto w-full h-full'>
      <Header setTheme={setTheme} theme={theme} />
      <Calculator theme={theme} />
    </div>
  )
}
