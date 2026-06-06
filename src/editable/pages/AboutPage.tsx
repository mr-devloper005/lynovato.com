import { Building2, MapPin, Phone, Star } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f7fb] px-4 py-14 text-slate-950 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-[var(--editable-border)] bg-white p-8 shadow-sm lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {[['Listings', Building2], ['Locations', MapPin], ['Reviews', Star], ['Calls', Phone]].map(([label, Icon]) => <div key={String(label)} className="rounded-2xl bg-[#f8fbff] p-4 text-center text-sm font-black"><Icon className="mx-auto mb-2 h-5 w-5 text-[#2563eb]" />{String(label)}</div>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-[2rem] border border-[var(--editable-border)] bg-white/70 p-6 shadow-sm">
                <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
