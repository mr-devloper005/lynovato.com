import Link from 'next/link'
import { ArrowRight, Building2, Car, HeartPulse, Home, MapPin, Megaphone, Search, ShieldCheck, Sparkles, Star, Store, Utensils, Wrench } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const categories = [
  { label: 'Restaurants', icon: Utensils, query: 'restaurants' },
  { label: 'Home Services', icon: Wrench, query: 'home services' },
  { label: 'Medical', icon: HeartPulse, query: 'medical' },
  { label: 'Auto', icon: Car, query: 'auto' },
  { label: 'Real Estate', icon: Home, query: 'real estate' },
  { label: 'Retail', icon: Store, query: 'retail' },
]

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'Jacksonville', 'Charlotte']

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = getContent(post)
  const raw = text(content.description) || text(content.summary) || post?.summary || ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function getLocation(post?: SitePost | null) {
  const content = getContent(post)
  return text(content.location) || text(content.address) || text(content.city) || 'Local area'
}

function ListingCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid min-h-[210px] gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[96px_minmax(0,1fr)]">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-[#eef4fb] ring-1 ring-slate-200">
        <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#e8f1ff] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#2563eb]">Business</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500"><MapPin className="h-3.5 w-3.5" /> {getLocation(post)}</span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight tracking-[-0.03em] text-slate-950">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{getExcerpt(post, 125)}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#2563eb]">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  )
}

function ReviewCard({ post, index }: { post: SitePost; index: number }) {
  return (
    <article className="w-[280px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#ff7a1a] to-[#2563eb] text-sm font-black text-white">{post.title.slice(0, 1)}</div>
        <div className="min-w-0">
          <p className="truncate text-sm font-black text-slate-950">{['Jordan M.', 'Priya S.', 'Carlos R.', 'Mina K.'][index % 4]}</p>
          <div className="mt-1 flex text-[#f8b72b]">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div>
        </div>
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">{getExcerpt(post, 150) || 'The listing had the address, phone number, and business details I needed before visiting.'}</p>
      <div className="mt-5 border-t border-slate-200 pt-4 text-center text-sm font-black text-slate-900">{post.title}</div>
    </article>
  )
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="bg-[#f4f7fb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-[#071527] shadow-[0_24px_90px_rgba(15,23,42,0.14)]">
        <div className="relative min-h-[470px] bg-[url('/Hero-background.jpg?height=900&width=1600')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,39,0.42),rgba(7,21,39,0.82))]" />
          <div className="relative z-10 flex min-h-[470px] flex-col items-center justify-center px-5 py-12 text-center text-white">
            <p className="rounded-full bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{pagesContent.home.hero.title.join(' ')}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">{pagesContent.home.hero.description}</p>
            <form action="/search" className="mt-8 grid w-full max-w-3xl overflow-hidden rounded-full bg-white text-left shadow-2xl sm:grid-cols-[1fr_0.85fr_auto]">
              <label className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 sm:border-b-0 sm:border-r">
                <Search className="h-5 w-5 text-slate-400" />
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-400" />
              </label>
              <label className="flex items-center gap-3 px-5 py-4 sm:border-r">
                <MapPin className="h-5 w-5 text-slate-400" />
                <input name="category" placeholder="City or category" className="min-w-0 flex-1 bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-400" />
              </label>
              <button className="m-2 inline-flex items-center justify-center rounded-full bg-[#f8b72b] px-5 py-3 text-sm font-black text-slate-950" type="submit" aria-label="Search businesses"><ArrowRight className="h-5 w-5" /></button>
            </form>
            <div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link key={category.label} href={`/search?q=${encodeURIComponent(category.query)}`} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center backdrop-blur transition hover:bg-white/18">
                  <category.icon className="mx-auto h-7 w-7" />
                  <span className="mt-2 block text-xs font-black uppercase tracking-[0.08em]">{category.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = posts.slice(0, 8)
  return (
    <section className="bg-[#f4f7fb] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563eb]">Featured local businesses</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">Recently listed businesses</h2>
          </div>
          <Link href={primaryRoute} className="rounded-full bg-[#2563eb] px-5 py-3 text-sm font-black text-white">View all</Link>
        </div>
        {items.length ? (
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {items.map((post) => <ListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        ) : (
          <div className="mt-7 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <Building2 className="mx-auto h-10 w-10 text-slate-400" />
            <p className="mt-3 text-lg font-black">New business listings will appear here.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const reviewPosts = posts.slice(0, 8)
  return (
    <section className="bg-[linear-gradient(90deg,#eef8ff,#fffaf0_48%,#f8efff)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center text-3xl font-black tracking-[-0.04em] text-slate-950">Latest reviews</h2>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(reviewPosts.length ? reviewPosts : posts).slice(0, 8).map((post, index) => <ReviewCard key={post.id || post.slug || index} post={post} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2563eb]">Browse by city</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">Popular places in the directory</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Find restaurants, home services, medical offices, shops, and professional services by location.</p>
            <Link href={primaryRoute} className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900">Open business listings <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link key={city} href={`/search?category=${encodeURIComponent(city)}`} className="text-sm font-black uppercase text-[#005cad] hover:underline">{city}</Link>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Cleaner business profiles', body: 'Show service category, location, summary, images, and contact actions in a scannable layout.' },
            { icon: Megaphone, title: 'Owner growth paths', body: 'Add, claim, and improve listings so customers get more accurate business details.' },
            { icon: Sparkles, title: 'Better local decisions', body: 'Customers can compare nearby options before calling, visiting, or opening a website.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-6">
              <item.icon className="h-7 w-7 text-[#2563eb]" />
              <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#f4f7fb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px] rounded-2xl bg-[linear-gradient(110deg,#ffb44a,#ff3838_45%,#8e2db5)] px-6 py-12 text-center text-white shadow-[0_24px_90px_rgba(142,45,181,0.18)] sm:px-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">{pagesContent.home.cta.badge}</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">{pagesContent.home.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/82">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/create" className={dc.button.secondary}>Add your business</Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-black text-white">Talk to us</Link>
        </div>
        <p className="mt-8 text-sm font-bold text-white/80">Join local businesses using {globalContent.site.name} for discovery, customer actions, and listing clarity.</p>
      </div>
    </section>
  )
}
