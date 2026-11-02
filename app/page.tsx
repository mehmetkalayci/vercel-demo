import Image from "next/image";
import { profile, projects, skills } from "./data";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-8 sm:py-24">
      <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full border border-zinc-200 dark:border-zinc-800"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">{profile.title}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span>📍 {profile.location}</span>
            {profile.hireable && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Yeni fırsatlara açık
              </span>
            )}
          </div>
        </div>
      </header>

      <nav className="mt-8 flex flex-wrap gap-3">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            {link.label} <span className="text-zinc-500">· {link.text}</span>
          </a>
        ))}
      </nav>

      <Section title="Hakkımda">
        <p className="leading-7 text-zinc-700 dark:text-zinc-300">{profile.about}</p>
        <dl className="mt-6 grid grid-cols-3 gap-3">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <dt className="text-xs text-zinc-500">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Yetenekler">
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.group}>
              <h3 className="mb-2 text-sm font-medium">{skill.group}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Öne Çıkan Projeler">
        <ul className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="flex flex-col rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="flex items-start justify-between gap-2">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  {project.name}
                </a>
                {project.stars ? (
                  <span className="shrink-0 text-xs text-zinc-500">★ {project.stars}</span>
                ) : null}
              </div>
              <p className="mt-1 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-zinc-500">
                    {t}
                  </span>
                ))}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/mehmetkalayci?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-zinc-600 hover:underline dark:text-zinc-400"
        >
          Tüm repoları GitHub&apos;da gör →
        </a>
      </Section>

      <footer className="mt-16 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800">
        © {profile.name} · Bilgiler GitHub profilinden derlenmiştir.
      </footer>
    </main>
  );
}
