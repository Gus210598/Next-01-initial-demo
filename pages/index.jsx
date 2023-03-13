import Link from 'next/link';

import { MainLayout } from '../components/layout/MainLayout';


export default function HomePage() {
  return (
    <MainLayout>

        <h1>Home Page</h1>
        <div className={'description'}>
          <h1 className='' >Soy yo en Home :D</h1>
          <p>
            Ir a &nbsp;
            <Link href='/about'>
              About
            </Link>
          </p>
        
        </div>
 

    </MainLayout>
  )
}
