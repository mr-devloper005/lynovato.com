'use client'

import { Building2, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
    { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
    { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
    { icon: Mail, title: 'Listing corrections', body: 'Send category, address, website, or phone updates for a business profile.' },
    { icon: Sparkles, title: 'Profile improvements', body: 'Request richer media, clearer descriptions, and stronger profile presentation.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-muted-text)]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.05em]">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
              <div className="mt-8 space-y-4">
                {lanes.map((lane) => (
                  <div key={lane.title} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-5">
                    <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                    <h2 className="mt-3 text-xl font-extrabold">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-7 shadow-sm">
              <h2 className="text-2xl font-extrabold">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </section>
        </div>
      </main>
    </EditableSiteShell>
  )
}
