export default function IntroCard() {
  return (
    <article className="group col-span-2 row-span-2 rounded-3xl bg-zinc-200 dark:bg-[#151515] hover:bg-[#83105D] transition p-8 flex flex-col justify-center">
      <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300 transition">
        Hola, soy
      </p>

      <h1 className="text-5xl font-semibold text-zinc-900 dark:text-white group-hover:text-white mt-3 transition">
        Facundo Gómez
      </h1>

      <h2 className="text-xl text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-300 mt-4 transition">
        Software Developer - Profesor Universitario
      </h2>
    </article>
  );
}
