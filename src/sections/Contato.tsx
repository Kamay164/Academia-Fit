import { CheckCircle2, Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  Button,
  SelectField,
  Section,
  SectionTitle,
  TextAreaField,
  TextField,
} from '../components/ui'
import { contact, contactForm, contactSection } from '../data'
import { reveal } from '../lib/reveal'

const { fields, errors: messages } = contactForm
type FieldName = keyof typeof messages
type Errors = Partial<Record<FieldName, string>>

const onlyDigits = (value: string) => value.replace(/\D/g, '')

/** Máscara de telefone brasileiro: (31) 91234-5678 ou (31) 1234-5678. */
function maskPhone(value: string) {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  const split = d.length > 10 ? 7 : 6
  return `(${d.slice(0, 2)}) ${d.slice(2, split)}-${d.slice(split)}`
}

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (String(data.get('name') ?? '').trim().length < 2) errors.name = messages.name
  const phone = onlyDigits(String(data.get('whatsapp') ?? ''))
  if (phone.length < 10 || phone.length > 11) errors.whatsapp = messages.whatsapp
  const email = String(data.get('email') ?? '').trim()
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = messages.email
  if (!data.get('modality')) errors.modality = messages.modality
  return errors
}

/** Mapa ilustrado e abstrato da região (não usa mapa real). */
function MapIllustration() {
  return (
    <svg
      role="img"
      aria-label={contactForm.mapAlt}
      viewBox="0 0 400 220"
      className="bg-mist h-auto w-full rounded-xl"
    >
      <g className="stroke-line" strokeWidth="14" fill="none" strokeLinecap="round">
        <path d="M-10 60 L410 40" />
        <path d="M-10 150 L410 175" />
        <path d="M90 -10 L120 230" />
        <path d="M290 -10 L260 230" />
      </g>
      <g className="stroke-white" strokeWidth="6" fill="none" strokeLinecap="round">
        <path d="M-10 60 L410 40" />
        <path d="M-10 150 L410 175" />
        <path d="M90 -10 L120 230" />
        <path d="M290 -10 L260 230" />
      </g>
      <path d="M200 -10 L180 230" className="stroke-line" strokeWidth="3" />
      <g transform="translate(190 78)">
        <circle r="26" className="fill-lime opacity-40" />
        <path
          d="M0 -22 C-12 -22 -20 -13 -20 -3 C-20 11 0 30 0 30 C0 30 20 11 20 -3 C20 -13 12 -22 0 -22Z"
          className="fill-ink"
        />
        <circle cy="-4" r="7" className="fill-lime" />
      </g>
    </svg>
  )
}

/** Contato (#contato): dados da academia + formulário de aula experimental (só front-end). */
export function Contato() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const timer = useRef<number>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const found = validate(new FormData(form))
    setErrors(found)
    const firstInvalid = (Object.keys(found) as FieldName[])[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setStatus('loading')
    // Projeto de portfólio: nada é enviado. Simula a espera de uma requisição.
    timer.current = window.setTimeout(() => setStatus('success'), 900)
  }

  /** Limpa o erro do campo assim que a pessoa volta a digitar nele. */
  function clearError(name: FieldName) {
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const { address, hours, whatsapp, email } = contact
  const optional = contactForm.optionalLabel

  return (
    <Section id={contactSection.id} labelledBy="contato-titulo">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <SectionTitle
            id="contato-titulo"
            size="h1"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            description={contactSection.description}
          />
          <ul className="mt-10 flex flex-col gap-6" {...reveal(100)}>
            <li className="flex gap-4">
              <MapPin aria-hidden="true" className="text-lime-deep mt-0.5 size-6 shrink-0" />
              <address className="not-italic">
                {address.street}
                <br />
                {address.district}, {address.city}
              </address>
            </li>
            <li className="flex gap-4">
              <Clock aria-hidden="true" className="text-lime-deep mt-0.5 size-6 shrink-0" />
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                {hours.map(({ days, time }) => (
                  <div key={days} className="col-span-2 grid grid-cols-subgrid">
                    <dt className="text-moss">{days}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </li>
            <li className="flex gap-4">
              <MessageCircle aria-hidden="true" className="text-lime-deep mt-0.5 size-6 shrink-0" />
              <span>WhatsApp: {whatsapp.label}</span>
            </li>
            <li className="flex gap-4">
              <Mail aria-hidden="true" className="text-lime-deep mt-0.5 size-6 shrink-0" />
              <a href={email.href} className="underline underline-offset-4">
                {email.label}
              </a>
            </li>
          </ul>
          <div className="mt-10 hidden lg:block" {...reveal(200)}>
            <MapIllustration />
          </div>
        </div>

        <div className="bg-mist min-w-0 rounded-xl p-6 sm:p-10 lg:col-span-7" {...reveal(120)}>
          {status === 'success' ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="flex flex-col items-start gap-4 py-6 outline-none"
            >
              <span className="bg-lime text-ink grid size-14 place-items-center rounded-full">
                <CheckCircle2 aria-hidden="true" className="size-7" />
              </span>
              <h3 className="text-h2">{contactForm.success.title}</h3>
              <p className="text-moss max-w-prose">{contactForm.success.message}</p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {Object.keys(errors).some((k) => errors[k as FieldName]) && (
                <p role="alert" className="text-error font-semibold sm:col-span-2">
                  Revise os campos destacados para continuar.
                </p>
              )}
              <div className="sm:col-span-2">
                <TextField
                  id="name"
                  label={fields.name.label}
                  placeholder={fields.name.placeholder}
                  autoComplete="name"
                  required
                  error={errors.name}
                  onChange={() => clearError('name')}
                />
              </div>
              <TextField
                id="whatsapp"
                label={fields.whatsapp.label}
                placeholder={fields.whatsapp.placeholder}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                error={errors.whatsapp}
                onChange={(e) => {
                  e.currentTarget.value = maskPhone(e.currentTarget.value)
                  clearError('whatsapp')
                }}
              />
              <TextField
                id="email"
                label={fields.email.label}
                optionalLabel={optional}
                placeholder={fields.email.placeholder}
                type="email"
                autoComplete="email"
                error={errors.email}
                onChange={() => clearError('email')}
              />
              <SelectField
                id="modality"
                label={fields.modality.label}
                placeholder={fields.modality.placeholder}
                options={fields.modality.options}
                required
                error={errors.modality}
                onChange={() => clearError('modality')}
              />
              <SelectField
                id="period"
                label={fields.period.label}
                optionalLabel={optional}
                placeholder={fields.period.placeholder}
                options={fields.period.options}
              />
              <div className="sm:col-span-2">
                <TextAreaField
                  id="message"
                  label={fields.message.label}
                  optionalLabel={optional}
                  placeholder={fields.message.placeholder}
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" arrow disabled={status === 'loading'} fullWidth>
                  {status === 'loading' ? contactForm.submit.loading : contactForm.submit.idle}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
