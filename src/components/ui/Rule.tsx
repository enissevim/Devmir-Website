interface RuleProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Rule({ orientation = 'horizontal', className = '' }: RuleProps) {
  if (orientation === 'vertical') {
    return <div className={`w-px self-stretch bg-border ${className}`} aria-hidden="true" />
  }
  return <hr className={`border-0 border-t border-border ${className}`} />
}
