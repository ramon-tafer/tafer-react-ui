import { storyblokEditable } from '@storyblok/react'
import type { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react'

type Props<T extends ElementType = 'div'> = {
  /* eslint-disable-next-line */
  blok: any
  children: ReactNode
  Tag?: T
} & ComponentPropsWithoutRef<T>

export default function SbEditable<T extends ElementType = 'div'>({
  children,
  blok,
  Tag,
  ...props
}: Props<T>) {
  const Component = Tag ?? 'div'
  return (
    <Component
      {...props}
      {...storyblokEditable(blok)}
    >
      {children}
    </Component>
  )
}
