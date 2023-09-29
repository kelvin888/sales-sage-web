"use client"
import React, { MutableRefObject, useRef, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MobileSidebar from './Sidebar/MobileSidebar'
import Image from 'next/image'
import { useOnClickOutside } from '@/hooks/useOutsideClick'
import TanstackProvider from '@/providers/TanstackProvider'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    const handleSidebarToggle = () => setShowSidebar((prev) => !prev);

    const ref: MutableRefObject<undefined> = useRef()
    useOnClickOutside(ref, () => setShowSidebar(false))

    return (
        <TanstackProvider>
            <main
                //@ts-ignore
                ref={ref} className='flex w-full h-full'>
                <MobileSidebar isOpen={showSidebar} />
                <Sidebar />
                <section className='lg:flex-1 w-[95%] lg:w-full mx-auto lg:mx-0 lg:pl-[278px] lg:pr-[50px] bg-[#f7f7f7] max-w-[3200px]'>
                    <main>
                        <section className='sticky top-0 z-[999] pt-[50px] pb-[20px] bg-[#f7f7f7] flex items-center max-w-[1100px]'>
                            <h1><span>Welcome,</span> Kelvin! 👋🏼</h1>


                            <button onClick={handleSidebarToggle} className=' w-10 h-10 bg-white rounded-full flex lg:hidden items-center justify-center ml-auto'>
                                <Image height={18} width={18} src="/images/hamburger.svg" alt='hamburger' />
                            </button>
                        </section>
                        <div className='max-w-[1100px]'>
                            {children}
                        </div>
                    </main>
                </section>
            </main>
        </TanstackProvider>
    )
}

export default AdminLayout