import type { LucideIcon } from 'lucide-react'

/** Título com destaque opcional no final (ex.: "Mais forte quando é" + "junto."). */
export interface Heading {
  text: string
  highlight?: string
}

export interface Link {
  label: string
  href: string
}

export interface SectionIntro {
  id: string
  eyebrow?: string
  title: Heading
  description?: string
}

export interface IconItem {
  icon: LucideIcon
  title: string
  description: string
}
