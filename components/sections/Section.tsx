import Reveal from "@/components/Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-24 sm:py-32">
      <Reveal>
        <h2
          id={`${id}-title`}
          className="flex items-baseline gap-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-400"
        >
          <span className="text-zinc-500">{index}</span>
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
