import React from 'react'
import { getWhatsAppUrl, getWhatsAppUrlWithText, type WhatsAppMessageKey } from '../../utils/whatsapp'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  whatsapp?: WhatsAppMessageKey
  whatsappText?: string
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  whatsapp,
  whatsappText,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body tracking-widest uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'

  const sizes = {
    sm: 'text-[10px] px-5 py-2.5',
    md: 'text-[11px] px-7 py-3.5',
    lg: 'text-[12px] px-10 py-5',
  }

  const variants = {
    primary: 'bg-[--color-navy] text-white hover:bg-[--color-ocean] focus-visible:outline-[--color-navy]',
    secondary: 'bg-white text-[--color-navy] hover:bg-[--color-cream] focus-visible:outline-white',
    outline: 'border border-white text-white hover:bg-white hover:text-[--color-navy] focus-visible:outline-white',
    ghost: 'text-[--color-navy] hover:text-[--color-ocean] underline underline-offset-4 focus-visible:outline-[--color-navy]',
    gold: 'bg-[--color-gold] text-[--color-navy] hover:opacity-90 focus-visible:outline-[--color-gold]',
  }

  const computedHref =
    whatsapp ? getWhatsAppUrl(whatsapp)
    : whatsappText ? getWhatsAppUrlWithText(whatsappText)
    : href

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (computedHref || Tag === 'a') {
    return (
      <a
        href={computedHref}
        target={whatsapp || whatsappText ? '_blank' : undefined}
        rel={whatsapp || whatsappText ? 'noopener noreferrer' : undefined}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
