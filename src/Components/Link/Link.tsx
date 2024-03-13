import React, { ReactNode } from 'react'

interface ILink {
  children: ReactNode
  href?: string
  onClick?: () => any
  wrap?: boolean
}

const Link = ({
  children,
  href,
  onClick,
  wrap = false
}: ILink) => {
  const link = (
    <a >
      {children}
    </a>
  )

  return wrap ? <li>{link}</li> : link
}

export default Link
