type ClassValue = string | false | null | undefined

/** Junta classes ignorando valores vazios. Ex.: cn('a', cond && 'b'). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
