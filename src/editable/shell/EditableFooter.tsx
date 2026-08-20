'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin, Search, Star } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] text-[var(--slot4-page-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl bg-[var(--slot4-dark-bg)] px-6 py-10 text-center text-[var(--slot4-dark-text)] shadow-[0_22px_70px_rgba(15,23,42,0.16)] sm:px-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">{globalContent.footer.tagline}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">Take control of your local presence.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/create" className="rounded-full bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-white">Add your business today</Link>
            <Link href="/listing" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white">Browse directory</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-11 w-11 rounded-full object-contain" />
            <span className="text-lg font-black tracking-[-0.04em] text-[var(--slot4-accent)]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--slot4-muted-text)]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-muted-text)]">Business Solutions</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            <Link href="/create" className="text-sm font-bold text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]">Add a Business</Link>
            <Link href="/search" className="text-sm font-bold text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]">Search Directory</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-muted-text)]">Company</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]">Logout</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-muted-text)]">Directory</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-[var(--slot4-muted-text)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--slot4-accent)]" /> Local categories</span>
            <span className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-[var(--slot4-accent)]" /> City search</span>
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Review-ready profiles</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold text-[var(--slot4-muted-text)]">
        © {year} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
