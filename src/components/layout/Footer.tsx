import { ArrowUp, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { a11y, contact, footer, nav, site, social } from '../../data/site'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { SocialIcon } from '../ui/SocialIcon'

const linkClass =
  'text-fog underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'
/** Links soltos (fora de parágrafos): área de toque de pelo menos 44px de altura. */
const tapLinkClass = `${linkClass} inline-flex min-h-11 items-center`

/** Rodapé escuro: marca, navegação, contato, redes e aviso de projeto fictício. */
export function Footer() {
  return (
    <footer data-surface="dark" className="bg-ink pt-section text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div className="flex flex-col items-start gap-6">
            <Logo tone="dark" className="h-10 w-auto" />
            <p className="text-h3 font-display max-w-[16ch] font-bold">{site.tagline}</p>
            <ul className="flex items-center gap-2">
              {social.map((item) => (
                <li key={item.network}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="hover:border-lime hover:bg-lime hover:text-ink inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200"
                  >
                    <SocialIcon network={item.network} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-eyebrow text-lime font-semibold uppercase">{footer.navTitle}</h2>
            <ul className="mt-3 flex flex-col gap-1">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={tapLinkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow text-lime font-semibold uppercase">
              {footer.contactTitle}
            </h2>
            <ul className="text-fog mt-5 flex flex-col gap-4 text-sm">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
                <address className="not-italic">
                  {contact.address.street}
                  <br />
                  {contact.address.district}, {contact.address.city}
                </address>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                  {contact.hours.map((row) => (
                    <div key={row.days} className="contents">
                      <dt>{row.days}</dt>
                      <dd className="whitespace-nowrap text-white">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </li>
              {/* Links com 44px de altura: ícone centralizado com o texto, não com o topo */}
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-white" />
                <a href={contact.whatsapp.href} className={tapLinkClass}>
                  {contact.whatsapp.name}: {contact.whatsapp.label}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-white" />
                <a href={contact.email.href} className={tapLinkClass}>
                  {contact.email.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-fog flex flex-col gap-4 py-8 text-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-prose flex-col gap-1">
            <p>{footer.legal}</p>
            <p>
              {footer.credits.before}{' '}
              <a
                href={footer.credits.link.href}
                className={linkClass}
                target="_blank"
                rel="noreferrer"
              >
                {footer.credits.link.label}
                <span className="sr-only"> {a11y.newTab}</span>
              </a>
              {footer.credits.after}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-6 whitespace-nowrap">
            <a
              href={footer.portfolio.href}
              className={tapLinkClass}
              target="_blank"
              rel="noreferrer"
            >
              {footer.portfolio.label}
              <span className="sr-only"> {a11y.newTab}</span>
            </a>
            <a href={footer.backToTop.href} className={`${tapLinkClass} gap-2`}>
              {footer.backToTop.label}
              <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
