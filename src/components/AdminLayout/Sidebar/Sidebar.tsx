import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <section className={`h-full w-[228px] -left-[228px] lg:left-0 max-w-[228px] border-r-[1px solid rgb(230, 230, 230)] fixed text-white bg-black transition-all ease-linear z-[1000]`}>
            <section className='py-0 px-[15px]'>
                <section className='py-[40px] flex justify-center'>
                    <Image src="/images/logo.png" width={100} height={40} alt='logo' />
                </section>
                <nav className='mt-[50px]'>
                    <ul>
                        <li className='py-[10px] px-[14px]'><Link href="/dashboard">Dashboard</Link></li>
                        <li className='py-[10px] px-[14px]'><Link href="/products">Products</Link></li>
                        <li className='py-[10px] px-[14px]'><Link href="/sales">Sales</Link></li>
                    </ul>
                </nav>
            </section>
        </section>

    )
}

export default Sidebar