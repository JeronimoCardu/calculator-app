import { useEffect, type Dispatch, type SetStateAction } from 'react'

type Props = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  useEffect(() => {
    document.body.style.backgroundColor =
      theme == 'dark' ? '#3a4663' : theme == 'light' ? '#e6e6e6' : '#17062a'
  }, [theme])
  return (
    <div className='flex gap-4 items-end'>
      <p className={`${theme}-mainColor text-[12px]`}>THEME</p>
      <div
        className='cursor-pointer'
        onClick={() =>
          setTheme(
            theme == 'dark' ? 'light' : theme == 'light' ? 'purple' : 'dark'
          )
        }>
        <div
          className={`${theme}-mainColor text-[12px] flex justify-center gap-3`}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div
          className={`${theme}-calculatorBg ${
            theme == 'dark'
              ? 'justify-start'
              : theme == 'light'
              ? 'justify-center'
              : 'justify-end'
          } flex bg-[#242d44] w-16 h-fit p-2 rounded-full`}>
          <div className={`${theme}-ball w-4 h-4  rounded-full`}></div>
        </div>
      </div>
    </div>
  )
}
