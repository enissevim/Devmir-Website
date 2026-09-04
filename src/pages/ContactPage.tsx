import { useRef, useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { PageMeta } from '@/components/seo/PageMeta'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { submitNetlifyForm } from '@/lib/netlifyForm'
import { site } from '@/content/site'
import { contactContent, contactMeta } from '@/content/contact'

const audiencePanelStyles = {
  dark: 'bg-accent text-white',
  lightGreen: 'bg-green-light text-white',
} as const

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const submittingRef = useRef(false)
  const { contact } = site
  const content = contactContent

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: contact.company,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: 'US',
    },
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (submittingRef.current) return

    setError(null)

    if (import.meta.env.DEV) {
      setError(
        'Contact form submissions are processed on the deployed Netlify site. Please email veli@devmir.com directly.',
      )
      return
    }

    submittingRef.current = true
    setSubmitting(true)

    const form = event.currentTarget

    try {
      await submitNetlifyForm(form)
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at veli@devmir.com.')
    } finally {
      submittingRef.current = false
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageMeta {...contactMeta} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <PageHero
        eyebrow="Contact"
        headline={content.hero.headline}
        subcopy={content.hero.subcopy}
      />

      <Section variant="white" className="pb-0">
        <div className="grid lg:grid-cols-2">
          {content.audiences.map((audience, index) => {
            const isColoredPanel = audience.variant === 'dark' || audience.variant === 'lightGreen'

            return (
            <Reveal key={audience.title} delay={index * 0.08}>
              <div
                className={`flex min-h-[240px] flex-col justify-center px-5 py-12 sm:px-8 lg:min-h-[280px] lg:px-16 lg:py-16 xl:px-20 ${audiencePanelStyles[audience.variant]}`}
              >
                <h2
                  className={`font-display text-[clamp(1.375rem,2.5vw,1.75rem)] font-semibold leading-tight ${
                    isColoredPanel ? 'text-white' : 'text-navy'
                  }`}
                >
                  {audience.title}
                </h2>
                <p
                  className={`mt-4 max-w-md text-base leading-relaxed ${
                    isColoredPanel ? 'text-white/75' : 'text-charcoal/80'
                  }`}
                >
                  {audience.description}
                </p>
              </div>
            </Reveal>
            )
          })}
        </div>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <h2 className="font-display text-xl font-semibold text-navy">{contact.company}</h2>
              <address className="mt-6 space-y-4 not-italic">
                <p className="text-base leading-relaxed text-muted">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                  <br />
                  {contact.address.country}
                </p>
                <p>
                  <a
                    href={contact.phoneHref}
                    className="text-base font-medium text-charcoal transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={contact.emailHref}
                    className="text-base font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {contact.email}
                  </a>
                </p>
              </address>
              <div className="mt-8">
                <Button as="a" href={contact.emailHref} variant="secondary">
                  {content.form.emailCta}
                </Button>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={0.08}>
              {submitted ? (
                <div
                  className="border border-border bg-white p-8 sm:p-10"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-display text-xl font-semibold text-navy">Message sent</p>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {content.form.successMessage}
                  </p>
                </div>
              ) : (
                <form
                  name={content.form.name}
                  method="POST"
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6 border border-border bg-white p-8 sm:p-10"
                >
                  <input type="hidden" name="form-name" value={content.form.name} />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div>
                    <h2 className="font-display text-lg font-semibold text-navy">Send a message</h2>
                    <p className="mt-2 text-sm text-muted">
                      We will respond as soon as possible.
                    </p>
                  </div>

                  {error && (
                    <p className="text-sm text-accent" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-charcoal">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="audience" className="mb-2 block text-sm font-medium text-charcoal">
                      I am a...
                    </label>
                    <select
                      id="audience"
                      name="audience"
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {content.form.fields.audienceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-y border border-border bg-white px-4 py-3 text-sm text-charcoal focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20"
                    />
                  </div>

                  <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? 'Sending...' : content.form.submitLabel}
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="navy">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-white">
                {content.cta.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{content.cta.subcopy}</p>
              <div className="mt-10">
                <Button
                  as="a"
                  href={content.cta.button.href}
                  variant="secondary"
                  className="border-white/20 bg-white text-navy hover:border-white hover:bg-white/90"
                >
                  {content.cta.button.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
