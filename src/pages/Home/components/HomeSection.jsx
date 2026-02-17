export default function HomeSection({
  title,
  span,
  buttonText,
  onButtonClick,
  children,
}) {
  return (
    <section className="py-12 md:py-20 px-4 md:px-20 flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-0">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent stroke-text opacity-60 leading-none">
          {title}
        </h2>
        {span && (
          <span className="font-mono text-[10px] md:text-sm bg-white text-black px-2 py-1 whitespace-nowrap">
            {span}
          </span>
        )}
      </div>

      {children}

      <button
        onClick={onButtonClick}
        className="text-[15px] md:w-fit md:self-end md:border-none border p-2 my-5 md:text-lg font-mono uppercase hover:text-red-500 hover:underline underline-offset-4"
      >
        [ {buttonText} ]
      </button>
    </section>
  );
}
