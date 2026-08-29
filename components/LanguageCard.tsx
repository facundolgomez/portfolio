export default function LanguageCard() {
  return (
    <article className="group rounded-3xl bg-zinc-200 dark:bg-[#151515] flex items-center justify-center hover:bg-[#8A5A08] transition">
      <div className="text-center">
        <h2 className="text-5xl text-zinc-900 dark:text-white group-hover:text-white font-bold transition">
          B1
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 mt-2 transition">
          Inglés
        </p>
      </div>
    </article>
  );
}
