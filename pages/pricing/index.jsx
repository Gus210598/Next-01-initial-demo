import Link from 'next/link';

import { MainLayout } from '@/components/layout/MainLayout';


export default function PricingPage() {

    return (
        <MainLayout>
            <h1>Pricing Page</h1>
            <div className={'description'}>
            <h1 className='' >En Pricing :D</h1>
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
