import { Building2, MapPin, Phone, Star } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-14 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-8 shadow-sm lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-muted-text)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 text-[var(--slot4-soft-muted-text)]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {[['Listings', Building2], ['Locations', MapPin], ['Reviews', Star], ['Calls', Phone]].map(([label, Icon]) => <div key={String(label)} className="rounded-2xl bg-[var(--slot4-accent-soft)] p-4 text-center text-sm font-extrabold"><Icon className="mx-auto mb-2 h-5 w-5 text-[var(--slot4-accent)]" />{String(label)}</div>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-sm">
                <h2 className="text-xl font-extrabold tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
