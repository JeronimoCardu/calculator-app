import type { Dispatch, SetStateAction } from 'react'

type Props = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <div className='flex gap-4 items-end'>
      <p className=''>THEME</p>
      <div
        onClick={() =>
          setTheme(
            theme == 'dark' ? 'light' : theme == 'light' ? 'purple' : 'dark'
          )
        }>
        <div className='flex justify-center gap-3'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className='bg-[#242d44] w-16 h-fit p-2 rounded-full'>
          <div className='w-4 h-4 bg-[#d03f2f] rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
