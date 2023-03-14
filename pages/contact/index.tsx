
import Link from 'next/link';

import { MainLayout } from '../../components/layout/MainLayout';


export default function ContactPage() {
  return (

  <MainLayout>
    <h1>Contact Page</h1>
    <div className={'description'}>
      <h1 className='' >En Contact :D</h1>
      <p>
        Ir a &nbsp;
        <Link href='/'>
          Home
        </Link>
      </p>
    </div>
  </MainLayout>

  )
}
