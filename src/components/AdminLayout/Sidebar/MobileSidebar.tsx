import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
    isOpen: boolean
}

const MobileSidebar:FC<Props> = ({isOpen}) => {

    return (
        <section className={`h-full w-[228px] ${isOpen ? 'left-0':'-left-[228px]'}  max-w-[228px] border-r-[1px solid rgb(230, 230, 230)] fixed text-white bg-black z-[1000] transition-all ease-linear`}>
            <section className='py-0 px-[15px]'>
                <section className='py-[40px] flex justify-center'>
                    <Image src="/images/logo.png" width={100} height={40} alt='logo' />
                </section>
                <nav className='mt-[50px]'>
                    <ul>
                        <li className='py-[10px] px-[14px]'><Link href="/products">Products</Link></li>
                        <li className='py-[10px] px-[14px]'><Link href="/sales">Sales</Link></li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export default MobileSidebar