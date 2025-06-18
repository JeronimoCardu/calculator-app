type Props = {
  theme: string
}

export default function Calculator({ theme }: Props) {
  return (
    <>
      <main className={`${theme} w-full px-6 space-y-6 `}>
        <section className={`${theme}-inputBg rounded-[10px]  h-[5rem]`}>
          <input
            className={`${theme}-mainColor tablet:text-[3.5rem] outline-none w-full text-[2.5rem] pt-4 p-3 text-right h-ful`}
            type='text'
          />
        </section>
        <section
          id='calculator'
          className={`${theme}-calculatorBg gap-3 rounded-[10px] p-6 grid text-center grid-cols-4 grid-rows-5`}>
          <div className={`${theme}-number`}>
            <p>7</p>
          </div>
          <div className={`${theme}-number`}>
            <p>8</p>
          </div>
          <div className={`${theme}-number`}>
            <p>9</p>
          </div>
          <div
            className={`${theme}-delete flex justify-center items-center text-[1.25rem]`}>
            <p>DEL</p>
          </div>
          <div className={`${theme}-number`}>
            <p>4</p>
          </div>
          <div className={`${theme}-number`}>
            <p>5</p>
          </div>
          <div className={`${theme}-number`}>
            <p>6</p>
          </div>
          <div className={`${theme}-number`}>
            <p>+</p>
          </div>
          <div className={`${theme}-number`}>
            <p>1</p>
          </div>
          <div className={`${theme}-number`}>
            <p>2</p>
          </div>
          <div className={`${theme}-number`}>
            <p>3</p>
          </div>
          <div className={`${theme}-number`}>
            <p>{'-'}</p>
          </div>
          <div className={`${theme}-number`}>
            <p>.</p>
          </div>
          <div className={`${theme}-number`}>
            <p>0</p>
          </div>
          <div className={`${theme}-number`}>
            <p>/</p>
          </div>
          <div className={`${theme}-number`}>
            <p>x</p>
          </div>
          <div
            className={`${theme}-reset flex justify-center items-center text-[1.25rem] col-span-2`}>
            <p>RESET</p>
          </div>
          <div
            className={`${theme}-equal flex justify-center items-center text-[1.25rem] col-span-2`}>
            <p>{'='}</p>
          </div>
        </section>
      </main>
    </>
  )
}
