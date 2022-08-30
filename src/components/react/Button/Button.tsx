import React, { ReactNode } from 'react'

const COLORS = {
  primary: 'bg-brandViolet text-brandWhite',
  secondary: 'bg-brandPink text-brandWhite',
  dark: 'bg-brandBg text-brandWhite ring-brandWhite',
  dogcatcher: 'bg-dogcatcherRed text-brandWhite ring-brandBg',
  ouruniverse: 'bg-ouruniverseWhite text-brandBg font-medium',
  ghost: 'text-white ring-white bg-brandPink/75 bg-transparent'
}
const SIZES = {
  small: 'text-base px-5 py-2',
  medium: 'text-lg px-8 py-3',
  large: 'text-xl px-12 py-4'
}

interface Props {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'anchor' | 'download'
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'dark'
    | 'dogcatcher'
    | 'ouruniverse'
    | 'ghost'
  inline?: boolean
  openTab?: boolean
  href?: string
  rightIcon?: ReactNode
  className?: string
  onClick?: () => void
}

export default function Button (
  {
    size = 'medium',
    colorScheme = 'primary',
    className = '',
    inline = false,
    type = 'button',
    openTab = false,
    href,
    rightIcon,
    children,
    onClick
  }: Props

) {
  if ((type === 'anchor' || type === 'download') && !href) {
    console.warn('You need to pass a href as prop in order to use an anchor')
  }

  const buttonClassNames = `flex items-center text-center justify-center tracking-normal rounded-[10px] gap-3 duration-500 transition filter hover:brightness-125 active:ring-2 active:shadow-lg 
    ${SIZES[size]} ${COLORS[colorScheme]} ${inline ? 'inline-flex' : 'flex'} ${className}
  `

  switch (type) {
    case 'anchor':
      return (
          <a
            href={href || '#'}
            onClick={onClick}
            className={buttonClassNames}
            target={openTab ? '_blank' : '_self'} rel="noreferrer"
          >
            {children}
            {rightIcon || null}
          </a>
      )

    case 'download':
      if (typeof href !== 'string') {
        console.warn('The href prop must be a string')
      }

      return (
          <a
            className={buttonClassNames}
            download
            onClick={onClick}
            target="_blank"
            href={typeof href === 'string' ? href : ''}
            rel="noreferrer"
          >
            {children}
            {rightIcon || null}
          </a>
      )

    default:
      return (
          <button className={buttonClassNames} onClick={onClick}>
            {children}
            {rightIcon || null}
          </button>
      )
  }
}
