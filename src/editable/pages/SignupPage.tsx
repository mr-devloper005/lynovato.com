import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-dark-bg)] text-[var(--slot4-dark-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[var(--slot4-surface-bg)] p-6 text-[var(--slot4-page-text)] shadow-[0_18px_70px_rgba(0,0,0,0.14)] backdrop-blur sm:p-8">
            <h1 className="text-3xl font-extrabold tracking-tight">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[var(--slot4-muted-text)]">Already have an account? <Link href="/login" className="font-extrabold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Free profile', 'Local search', 'Owner tools'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-extrabold">{item}</div>)}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
