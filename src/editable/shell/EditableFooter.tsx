'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, Search, Star } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#eef4fb', '--editable-footer-text': '#111827', '--editable-container': '1120px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl bg-[#071527] px-6 py-10 text-center text-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] sm:px-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">{globalContent.footer.tagline}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">Take control of your local presence.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/create" className="rounded-full bg-[#2563eb] px-6 py-3 text-sm font-black text-white">Add your business today</Link>
            <Link href="/listing" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white">Browse directory</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-12 w-11 object-contain" />
            </span>
            <span className="text-lg font-black tracking-[-0.04em] text-[#2563eb]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Business Solutions</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            <Link href="/create" className="text-sm font-bold opacity-75 hover:opacity-100">Add a Business</Link>
            <Link href="/search" className="text-sm font-bold opacity-75 hover:opacity-100">Search Directory</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Company</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Directory</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold opacity-75">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#2563eb]" /> Local categories</span>
            <span className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-[#2563eb]" /> City search</span>
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-[#f59e0b]" /> Review-ready profiles</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        © {year} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
