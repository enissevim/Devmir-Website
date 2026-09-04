import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { normalizeInternalPath } from '@/lib/paths'

type ButtonVariant = 'primary' | 'primary-outline' | 'green-light' | 'secondary' | 'outline-light' | 'text'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'a'
  href: string
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover focus-visible:ring-accent',
  'primary-outline':
    'bg-accent text-white hover:bg-accent-hover border border-white hover:border-white focus-visible:ring-white',
  'green-light':
    'bg-green-light text-white hover:bg-green-light/90 border border-green-light hover:border-white/40 focus-visible:ring-accent',
  secondary:
    'bg-white text-navy border border-border hover:border-accent focus-visible:ring-accent',
  'outline-light':
    'bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-white',
  text: 'bg-transparent text-accent hover:text-accent-hover underline-offset-4 hover:underline p-0 border-0',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-body disabled:cursor-not-allowed disabled:opacity-60'

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (props.as === 'a') {
    if (props.external || props.href.startsWith('http')) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }

    if (props.href.startsWith('/#')) {
      return (
        <a href={props.href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link to={normalizeInternalPath(props.href)} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  )
}
