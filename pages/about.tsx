import Link from 'next/link';

import { MainLayout } from '../components/layout/MainLayout';
import { DarkLayout } from '../components/layout/DarkLayout';

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div className={'description'}>
        <h1 className='' >En About :D</h1>
        <p>
          Ir a &nbsp;
          <Link href='/'>
            Home
          </Link>
        </p>
      </div>
  </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
