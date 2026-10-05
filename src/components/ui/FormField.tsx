import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'

/** Visual comum de input, select e textarea. Com erro, a borda fica vermelha e mais grossa. */
const control =
  'min-h-12 w-full rounded-md border border-stone bg-white px-4 py-3 text-base text-ink placeholder:text-moss transition-colors focus-visible:outline-offset-2 aria-[invalid=true]:border-2 aria-[invalid=true]:border-error'

interface FieldShellProps {
  id: string
  label: string
  optionalLabel?: string
  required?: boolean
  error?: string
  children: ReactNode
}

/** Rótulo + controle + mensagem de erro, ligados por `id` / `aria-describedby`. */
function Shell({ id, label, optionalLabel, required, error, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {!required && optionalLabel && (
          <span className="text-moss ml-1.5 font-normal">{optionalLabel}</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} className="text-error text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  )
}

interface BaseProps {
  id: string
  label: string
  optionalLabel?: string
  error?: string
}

const aria = (id: string, error?: string) => ({
  'aria-invalid': error ? (true as const) : undefined,
  'aria-describedby': error ? `${id}-erro` : undefined,
})

export function TextField({
  id,
  label,
  optionalLabel,
  error,
  required,
  className,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Shell id={id} label={label} optionalLabel={optionalLabel} required={required} error={error}>
      <input
        id={id}
        name={id}
        aria-required={required || undefined}
        {...aria(id, error)}
        className={cn(control, className)}
        {...props}
      />
    </Shell>
  )
}

export function SelectField({
  id,
  label,
  optionalLabel,
  error,
  required,
  placeholder,
  options,
  className,
  ...props
}: BaseProps & {
  placeholder: string
  options: string[]
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Shell id={id} label={label} optionalLabel={optionalLabel} required={required} error={error}>
      <select
        id={id}
        name={id}
        defaultValue=""
        aria-required={required || undefined}
        {...aria(id, error)}
        className={cn(control, className)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Shell>
  )
}

export function TextAreaField({
  id,
  label,
  optionalLabel,
  error,
  required,
  className,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Shell id={id} label={label} optionalLabel={optionalLabel} required={required} error={error}>
      <textarea
        id={id}
        name={id}
        rows={4}
        aria-required={required || undefined}
        {...aria(id, error)}
        className={cn(control, 'resize-y', className)}
        {...props}
      />
    </Shell>
  )
}
