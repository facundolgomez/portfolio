export default function IntroCard() {
  return (
    <article className="card group col-span-2 row-span-2 hover:bg-[#83105D] p-6 sm:p-8 flex flex-col justify-center">
      <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
        Hola, soy
      </p>

      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-white group-hover:text-white mt-3 transition-colors duration-300">
        Facundo Gómez
      </h1>

      <h2 className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-200 mt-4 transition-colors duration-300">
        Software Developer - Profesor Universitario
      </h2>
    </article>
  );
}
