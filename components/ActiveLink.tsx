import './NavBar'
import Link from 'next/link'

import { CSSProperties, FC } from 'react'

import { useRouter } from 'next/router'


const style: CSSProperties = {
    color: '#0070f3',
    // textDecoration: 'underline'
}

interface Props {
  text: string;
  href: string
}

export const ActiveLink: FC<Props> = ( { text, href } ) => {

    const { asPath } = useRouter();

  return (
    <Link style={ asPath === href ? style : undefined }  href={ href }> { text } </Link>
  )
}