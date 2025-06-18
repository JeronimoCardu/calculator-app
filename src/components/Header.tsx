import type { Dispatch, SetStateAction } from 'react'
import ThemeToggle from './ThemeToggle'

type Props = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function Header({ theme, setTheme }: Props) {
  return (
    <header className={` flex justify-between w-full items-center  p-6`}>
      <h1 className={`${theme}-mainColor text-[2rem]`}>calc</h1>
      <ThemeToggle setTheme={setTheme} theme={theme} />
    </header>
  )
}
