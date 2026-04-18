import { CountdownTimer } from '@/components/CountdownTimer';
import { CTAButton } from '@/components/CTAButton';
import { PurchasePopup } from '@/components/PurchasePopup';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { DEMO_PURCHASES } from '@/data/purchases';

const offerItems = [
  {
    title: 'Onboarding Flow',
    value: '₦12,000 value',
    text: 'Start every client relationship with structure, clear expectations, and healthy boundaries so work does not become chaos by week two.'
  },
  {
    title: 'Pricing Calculator',
    value: '₦10,000 value',
    text: 'Stop guessing your rates. Calculate pricing with confidence so you can charge like a professional without panic.'
  },
  {
    title: 'Reporting Templates',
    value: '₦8,000 value',
    text: 'Build monthly reports faster and make them easier for clients to understand, trust, and renew from.'
  },
  {
    title: 'Content Systems',
    value: '₦9,000 value',
    text: 'Run content work with less back and forth, stronger consistency, and cleaner execution across multiple clients.'
  },
  {
    title: 'Renewal Scripts',
    value: '₦7,000 value',
    text: 'Handle renewal conversations with confidence so you never sound awkward, desperate, or uncertain about your value.'
  },
  {
    title: 'Upsell Playbook',
    value: '₦9,000 value',
    text: 'Spot natural upsell opportunities and increase account value while keeping trust and delivery quality intact.'
  }
];

const faqs = [
  {
    q: 'Is this for beginner freelancers?',
    a: 'Yes. If you already work with clients, this gives you structure early so you avoid expensive mistakes and messy habits.'
  },
  {
    q: 'Will this work for social media managers specifically?',
    a: 'Absolutely. ClientFlow OS was built with social media service delivery, reporting cycles, approvals, and renewal pressure in mind.'
  },
  {
    q: 'Can I use this with my current workflow?',
    a: 'Yes. You can plug each template into your current process one piece at a time. You do not need to rebuild your business in one day.'
  },
  {
    q: 'Is this a course or a template system?',
    a: 'It is a ready-to-use operating system and template pack. You get practical assets, not long theory videos.'
  },
  {
    q: 'How do I access it after payment?',
    a: 'You get instant digital access immediately after successful payment so you can start setting up right away.'
  },
  {
    q: 'Can I start using it immediately?',
    a: 'Yes. The templates are designed for fast setup and immediate use with active clients.'
  },
  {
    q: 'Is this only for Nigerians?',
    a: 'No. The frameworks work globally for client service businesses. Pricing examples can be adapted to your market.'
  },
  {
    q: 'Will this help me price better and retain clients?',
    a: 'Yes. Better onboarding, clearer scope, and stronger reporting directly improve confidence in pricing and client retention outcomes.'
  }
];

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-8">
      <section className="bg-gradient-to-b from-white to-sand">
        <div className="section-shell">
          <p className="mb-4 inline-flex rounded-full bg-mint/15 px-4 py-2 text-sm font-semibold text-ocean">
            ClientFlow OS for Freelancers and Social Media Managers
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Stop winging client work. Run a clean system that helps you earn better and keep clients longer.
          </h1>
          <p className="copy-lead mt-6 max-w-3xl">
            ClientFlow OS gives you the exact workflows, templates, and scripts to onboard better, price properly, report clearly, protect your scope, and reduce burnout.
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Today only</p>
              <p className="text-4xl font-extrabold text-ink">₦15,000</p>
            </div>
            <p className="pb-1 text-base text-slate-500 line-through">Typical value: ₦55,000+</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton label="Get ClientFlow OS" />
            <CountdownTimer />
          </div>
          <p className="mt-3 text-sm text-slate-600">Instant access. Plug-and-play templates. Start using it today.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">You are not lazy. You are overloaded and running without a system.</h2>
          <div className="mt-8 grid gap-4 text-base sm:grid-cols-2">
            {[
              'Client requests are scattered across DMs, voice notes, and random chats.',
              'You are pricing based on vibes because your method is not clear.',
              'Month-end reporting feels like panic and patchwork.',
              'Scope creep keeps stealing your time and your margins.',
              'Renewal conversations feel awkward even when you deliver good work.',
              'You work too much, yet still feel underpaid and under control.'
            ].map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-sand p-5 shadow-soft">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Why most freelancers stay stuck even when they are talented</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            <p>You can be excellent at delivery and still struggle because there is no backend operating system running your service business.</p>
            <p>You keep solving the same client problems manually. Every project depends on your memory, energy, and availability.</p>
            <p>Without systems, you cannot scale calmly. More clients only means more pressure.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">ClientFlow OS is your ready-to-use client operations system</h2>
          <p className="copy-lead mt-6 max-w-3xl">
            This is not theory. It is a practical template pack you can plug directly into your workflow. Use it to set boundaries, communicate clearly, and run client accounts with more confidence and less stress.
          </p>
          <div className="mt-8">
            <CTAButton label="Get Instant Access" />
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">What you get inside ClientFlow OS</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-wide text-ocean">{item.value}</p>
                <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">What changes when you stop managing clients from memory</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-xl font-bold text-rose-800">Before ClientFlow OS</h3>
              <ul className="mt-4 space-y-2 text-rose-900">
                <li>Messy client communication</li>
                <li>Underpricing and second-guessing</li>
                <li>Last-minute reporting panic</li>
                <li>Burnout from manual work</li>
                <li>Weak renewals and stalled growth</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-emerald-800">After ClientFlow OS</h3>
              <ul className="mt-4 space-y-2 text-emerald-900">
                <li>Smoother onboarding and clearer boundaries</li>
                <li>More confident, structured pricing</li>
                <li>Simpler monthly reporting workflow</li>
                <li>Better client experience and trust</li>
                <li>Stronger retention and reduced stress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Who ClientFlow OS is for</h2>
          <ul className="mt-6 space-y-3 text-lg text-slate-700">
            <li>• Freelancers juggling multiple clients at once</li>
            <li>• Social media managers tired of scattered workflows</li>
            <li>• Service providers who need better backend systems</li>
            <li>• Professionals who want stronger pricing and longer retention</li>
            <li>• People who are good at delivery but need more structure behind it</li>
          </ul>
          <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-6">
            <h3 className="text-xl font-bold text-ink">Not for you if:</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• You want a magic income promise instead of better systems.</li>
              <li>• You are not willing to improve your operations.</li>
              <li>• You do not work with clients at all.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="checkout" className="bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">The value stack makes this an easy yes</h2>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-sand p-6 shadow-soft sm:p-8">
            <ul className="space-y-3 text-lg text-slate-800">
              {offerItems.map((item) => (
                <li key={item.title} className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2">
                  <span>{item.title}</span>
                  <span className="font-semibold">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-slate-600">Total value</p>
                <p className="text-2xl font-bold text-slate-500 line-through">₦55,000+</p>
              </div>
              <div>
                <p className="text-slate-600">Today</p>
                <p className="text-4xl font-extrabold text-ink">₦15,000</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton label="Buy Now" className="w-full sm:w-auto" />
              <CountdownTimer />
            </div>
            <p className="mt-3 text-sm text-slate-600">One payment. Instant digital delivery. Start setup in minutes.</p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Questions before you buy</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-ink">{item.q}</summary>
                <p className="mt-3 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">You do not need more hustle. You need a better system.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-200">
            ClientFlow OS helps you work better, price better, and keep clients longer without drowning in admin. At ₦15,000, this is an easy decision for serious client service professionals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton label="Start Using ClientFlow OS Today" className="bg-mint text-ink hover:bg-mint/90" />
            <CountdownTimer />
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="section-shell py-10 text-sm text-slate-600">
          <p className="font-semibold text-ink">ClientFlow OS</p>
          <p className="mt-1">Support: hello@clientflowos.com</p>
          <p className="mt-1">Secure checkout. Instant access after payment. Built for freelancers and social media managers.</p>
        </div>
      </footer>

      <PurchasePopup purchases={DEMO_PURCHASES} />
      <StickyMobileCTA />
    </main>
  );
}
